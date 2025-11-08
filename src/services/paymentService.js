// Payments module removed. Service kept to provide clear errors if accidentally required.
function removed() {
  throw new Error('Payments module removed');
}

module.exports = { createPayment: removed, getPaymentsByUser: removed, updatePaymentStatus: removed };
