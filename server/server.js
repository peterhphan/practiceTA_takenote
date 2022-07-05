const express = require('express');
//const db = FILL_ME_IN
const {db, getAll} = require('./db.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});``

app.get('/api/notes', (req, res) => {
  //Write your route here!
  getAll()
  .then ((data) => {
    res.status(201).send(JSON.stringify(data))
  })
  .catch (() => {
    console.log('err')
  })
});