// Creation of my new module
angular.module('mean-course', []);

// My first controller
angular.module('mean-course')
.controller('AttendeesController', function($scope) {
  // $scope represents all variables that will be available in the view
  $scope.attendees = [{
    firstname: 'david'
  },{
    firstname: 'sophie'
  },{
    firstname: 'jeremy'
  },{
    firstname: 'samya'
  }];
});
