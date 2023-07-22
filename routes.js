const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

//gets '/notes' route
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/', 'notes.html'));
});

router.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, input) => {
      if (error) {
          console.log(error)
      } else {
          const newNotes = JSON.parse(input);
          return res.status(200).json(newNotes)
      }
  })
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