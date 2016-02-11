// Creation of my new module
angular.module('mean-course', []);

// My first controller
angular.module('mean-course')
.controller('AttendeesController', function($scope, $http) {
  // $scope represents all variables that will be available in the view
  // $http is used to call data from a web service (our API)
  $http.get('/attendees')
  .then(function (response) {
    // Look in your browser's console to see what happend
    console.log(response);
    // a 404 error :'(
  })
  // Handle the error case
  .catch(function () {
    $scope.error = "Unable to retrieve the list of attendees :'("
  });
});
