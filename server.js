const express = require('express');
const path = require('path');
const routes = require('./routes');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.post('/api/notes', (req, res) => {
  const { title, text } = req.body
  const note = {
      title,
      text,
      id: uuidv4(),
  };
  fs.readFile('./db/db.json', 'utf8', (error, input) => {
      if (error) {
          console.log(error);
      } else {
          const parseNote = JSON.parse(input);

          parseNote.push(note);

          fs.writeFile('./db/db.json', JSON.stringify(parseNote, null, 1), (err) => {
              if (err) {
                  console.error(err);
              } else {
                  console.info("Notes have been updated!")
                  res.json(note)
              };

          });
      }
  })
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});