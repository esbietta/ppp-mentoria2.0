const bookingService = require('../services/bookingService');

function createBooking(req, res) {
  try {
    const booking = bookingService.createBooking({
      userId: req.user.id,
      ...req.body
    });
    res.status(201).json(booking);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

function listBookings(req, res) {
  try {
    if (req.user && req.user.role === 'admin') {
      return res.json(bookingService.listAllBookings());
    }
    return res.json(bookingService.listBookingsByUser(req.user.id));
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

function cancelBooking(req, res) {
  try {
    const isAdmin = req.user.role === 'admin';
    const booking = bookingService.cancelBooking(Number(req.params.id), req.user.id, isAdmin);
    res.json(booking);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = { createBooking, listBookings, cancelBooking };