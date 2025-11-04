const db = require('../data/memoryDB');
let nextId = 1;

function createPayment({ bookingId, userId, amount }) {
  if (!bookingId || !userId || !amount) throw new Error('bookingId, userId and amount required');
  const payment = { id: nextId++, bookingId, userId, amount, status: 'pending', createdAt: new Date().toISOString() };
  db.payments.push(payment);
  return payment;
}

function getPaymentsByUser(userId) {
  return db.payments.filter(p => p.userId === userId);
}

function updatePaymentStatus(id, status) {
  const p = db.payments.find(x => x.id === id);
  if (!p) throw new Error('Payment not found');
  if (!['pending', 'confirmed', 'cancelled'].includes(status)) throw new Error('Invalid status');
  p.status = status;
  return p;
}

module.exports = { createPayment, getPaymentsByUser, updatePaymentStatus };
