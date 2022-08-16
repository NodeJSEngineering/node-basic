
const express = require("express");
const app = express();

app.get('/profile', function (req, res) {
  console.log(req.query.name);
  res.send();
});

