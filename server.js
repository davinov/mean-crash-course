var express = require('express');
var app = express();

app.use(express.static('static'));

// Connect to MongoDB
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/mean-course')
.then(function (db) {
  // Insert code that will use the database here!
  console.log('Connected to Mongo!');
});

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
