const db = require('../data/memoryDB');
const roomService = require('./roomService');
let nextId = 1;

function createBooking({ userId, roomId, startDate, endDate }) {
  if (!userId || !roomId || !startDate || !endDate) throw new Error('userId, roomId, startDate and endDate required');
  const room = roomService.getRoomById(roomId);
  if (!room) throw new Error('Room not found');
  if (!room.available) throw new Error('Room not available');
  const booking = { id: nextId++, userId, roomId, startDate, endDate, status: 'active', createdAt: new Date().toISOString() };
  db.booking.push(booking);
  roomService.setRoomAvailability(roomId, false);
  return booking;
}

function listBookingsByUser(userId) {
  return db.booking.filter(b => b.userId === userId);
}

function listAllBookings() {
  return db.booking;
}

function cancelBooking(id, userId, isAdmin = false) {
  const booking = db.booking.find(b => b.id === id);
  if (!booking) throw new Error('Booking not found');
  if (!isAdmin && booking.userId !== userId) throw new Error('Not allowed to cancel this booking');
  if (booking.status === 'cancelled') throw new Error('Booking already cancelled');
  booking.status = 'cancelled';
  // free room
  try { roomService.setRoomAvailability(booking.roomId, true); } catch (e) { /* ignore */ }
  return booking;
}

module.exports = { createBooking, listBookingsByUser, listAllBookings, cancelBooking };
