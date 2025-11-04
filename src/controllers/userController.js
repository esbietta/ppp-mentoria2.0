const userService = require('../services/userService');

function register(req, res) {
  try {
    const user = userService.register(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
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