var express = require('express');
var app = express();

var port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port ' + port);
});
