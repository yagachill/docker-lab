const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  throw new Error('Something crashed');
  res.send('Yaga er best');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});