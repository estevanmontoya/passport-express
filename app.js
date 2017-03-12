const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('We are live!');
})

app.listen(3000, function() {
  console.log('Application on http://localhost:3000');
})