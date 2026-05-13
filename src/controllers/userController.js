const userService = require('../services/userService');

function register(req, res) {
  try {
    const payload = {
      ...req.body,
      name: req.body.name || req.body.username,
    };
    const user = userService.register(payload);
    res.status(201).json({ message: 'Usuário registrado com sucesso', user });
  } catch (e) {
    let message = e.message;
    if (e.message === 'User already exists') {
      message = 'Usuário já existe';
    } else if (e.message === 'name, email and password are required') {
      message = 'Usuário, email e senha obrigatórios';
    }
    res.status(400).json({ message });
  }
}

function login(req, res) {
  try {
    const result = userService.login(req.body);
    res.json(result);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
}

module.exports = { register, login };