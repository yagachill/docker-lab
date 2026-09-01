const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'demo-complete.html'));
  //throw new Error('Something crashed');
  res.send('Dette er en random string for demonstrasjon');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});