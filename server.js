var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Server is up!');
});

var port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port ' + port);
});
