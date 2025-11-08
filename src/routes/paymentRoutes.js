// Payments module removed. Keep a stub router that responds 404 to any request.
const express = require('express');
const router = express.Router();

router.use((req, res) => {
	res.status(410).json({ error: 'Payments module removed' });
});

module.exports = router;
