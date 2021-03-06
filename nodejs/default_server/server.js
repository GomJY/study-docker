'use strict';;

const express = require('express');

const PORT = 8090;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, _ => {
  console.log(`${PORT}에서 서버 스타트!`);
});
