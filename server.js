const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My fourth commit with CI/CD pipeline and own unique image tag');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});