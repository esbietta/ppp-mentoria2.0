const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, bookingController.createBooking);
router.get('/', authenticateToken, bookingController.listBookings);
router.delete('/:id', authenticateToken, bookingController.cancelBooking);

module.exports = router;
