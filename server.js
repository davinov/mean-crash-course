var express = require('express');
var app = express();

app.use(express.static('static'));

// Listen on GET attendees
app.get('/attendees', function (req, res) {
  // Prepare attendees list
  var attendeesList = [{
    firstname: 'david'
  },{
    firstname: 'sophie'
  },{
    firstname: 'jeremy'
  },{
    firstname: 'samya'
  }];
  res.send(attendeesList);
});

var port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port ' + port);
});
