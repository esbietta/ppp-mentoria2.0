const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

router.post('/', authenticateToken, paymentController.createPayment);
router.get('/', authenticateToken, paymentController.listPayments);
// updating payment status restricted to admin
router.patch('/:id', authenticateToken, authorizeRole('admin'), paymentController.updatePaymentStatus);

module.exports = router;
