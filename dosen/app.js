const express = require('express');
const app = express();
const dosen = require('./dosen');

app.use(express.json());
app.use('/dosen', dosen);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});