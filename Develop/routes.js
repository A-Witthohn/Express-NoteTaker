const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Develop/public', 'notes.html'));
});

module.exports = router;