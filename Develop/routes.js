const express = require('express');
const path = require('path');

const router = express.Router();

//gets '/notes' route
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Develop/public', 'notes.html'));
});

// gets '/' route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Develop/public', 'index.html'));
  });

module.exports = router;