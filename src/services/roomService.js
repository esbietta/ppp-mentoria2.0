const db = require('../data/memoryDB');
let nextId = 1;

function addRoom({ type, price, capacity }) {
  if (!type || !price || !capacity) throw new Error('type, price and capacity are required');
  const room = { id: nextId++, type, price, capacity, available: true };
  db.rooms.push(room);
  return room;
}

function listRooms() {
  return db.rooms;
}

function getRoomById(id) {
  return db.rooms.find(r => r.id === id);
}

function setRoomAvailability(id, available) {
  const room = getRoomById(id);
  if (!room) throw new Error('Room not found');
  room.available = available;
  return room;
}

module.exports = { addRoom, listRooms, getRoomById, setRoomAvailability };
