// Creation of my new module
angular.module('mean-course', []);

// My first controller
angular.module('mean-course')
.controller('AttendeesController', function($scope, $http) {
  // $scope represents all variables that will be available in the view
  // $http is used to call data from a web service (our API)
  $http.get('/attendees')
  .then(function (response) {
    // Actual data is in response.data, other info about the request are in the response object
    $scope.attendees = response.data;
  })
  // Handle the error case
  .catch(function () {
    $scope.error = "Unable to retrieve the list of attendees :'(";
  });
});

// My first filter
angular.module('mean-course')
.filter('capitalize', function () {
  return function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  };
});
