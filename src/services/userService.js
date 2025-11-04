const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../data/memoryDB');

const SECRET = process.env.JWT_SECRET || 'replace_this_secret_in_prod';
let nextId = 1;

// initialize default admin if none exists
(function init() {
  if (!db.users || db.users.length === 0) {
    const hash = bcrypt.hashSync('admin123', 8);
    db.users.push({ id: nextId++, name: 'Admin', email: 'admin@hotel.local', password: hash, role: 'admin' });
  } else {
    nextId = db.users.reduce((m, u) => Math.max(m, u.id), 0) + 1;
  }
})();

function register({ name, email, password, role = 'user' }) {
  if (!name || !email || !password) throw new Error('name, email and password are required');
  const exists = db.users.find(u => u.email === email);
  if (exists) throw new Error('User already exists');
  const hashed = bcrypt.hashSync(password, 8);
  const user = { id: nextId++, name, email, password: hashed, role };
  db.users.push(user);
  // return without password
  const { password: _p, ...safe } = user;
  return safe;
}

function login({ email, password }) {
  if (!email || !password) throw new Error('email and password required');
  const user = db.users.find(u => u.email === email);
  if (!user) throw new Error('Invalid credentials');
  const ok = bcrypt.compareSync(password, user.password);
  if (!ok) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, SECRET, { expiresIn: '8h' });
  const { password: _p, ...safe } = user;
  return { token, user: safe };
}

function getUserById(id) {
  return db.users.find(u => u.id === id);
}

module.exports = { register, login, getUserById, SECRET };
