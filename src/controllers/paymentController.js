const paymentService = require('../services/paymentService');

function createPayment(req, res) {
  try {
    const payment = paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

function listPayments(req, res) {
  res.json(paymentService.getPaymentsByUser(req.user.id));
}

function updatePaymentStatus(req, res) {
  try {
    const payment = paymentService.updatePaymentStatus(Number(req.params.id), req.body.status);
    res.json(payment);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = { createPayment, listPayments, updatePaymentStatus };