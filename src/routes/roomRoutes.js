const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

router.get('/', authenticateToken, roomController.listRooms);
router.post('/', authenticateToken, authorizeRole('admin'), roomController.addRoom);

module.exports = router;