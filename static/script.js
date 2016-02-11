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
    // Prepare unique values for options
    $scope.eyeColors = _($scope.attendees)
      .map('eye-color')
      .uniq()
      .value();

    // Prepare eyeColors chart data
    eyesColorData = d3.nest()
      .key(function (d) { return d['eye-color']; })
      .entries($scope.attendees);
    // See the result in the console:
    console.log(eyesColorData);

    // Taken from nvD3 and customized
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.key; })
        .y(function(d) { return d.values.length; })
        .margin({top: 30, right: 20, bottom: 50, left: 175})
        .showValues(true);

      chart.yAxis
        .tickFormat(d3.format(',.0f'));

      d3.select('.attendees-list svg')
        .datum([{
          key: 'Eye colors',
          values: eyesColorData
        }])
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
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
