const roomService = require('../services/roomService');

function addRoom(req, res) {
  try {
    const room = roomService.addRoom(req.body);
    res.status(201).json(room);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

function listRooms(req, res) {
  res.json(roomService.listRooms());
}

module.exports = { addRoom, listRooms };