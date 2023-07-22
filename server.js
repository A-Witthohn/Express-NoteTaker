const express = require('express');
const path = require('path');
const routes = require('./routes');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Develop/public')));
app.use(routes);

app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  const note = { title, text, id: uuidv4() };

  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error reading the database file.' });
    }

    const notes = JSON.parse(data);
    notes.push(note);

    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error writing to the database file.' });
      }

      console.info('Congrats! Your Post worked.');
      res.json(note);
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});