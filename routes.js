const express = require('express');
const path = require('path');

const router = express.Router();

//gets '/notes' route
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/', 'notes.html'));
});

// gets '/' route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
  });

// catchs all other routes and redirects to root
  router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'))
  });

module.exports = router;