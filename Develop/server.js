const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'Develop/public')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});