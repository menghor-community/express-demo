const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express.js is running on Ubuntu Server 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
