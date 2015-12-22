//create an app called MEANNews
var app = angular.module('MEANNews', []);


//create a  controller called MainCtrl
app.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Hello World';
}]);