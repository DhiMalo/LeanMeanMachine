// Create an app called MEANNews

var app = angular.module('MEANNews', [
  'ui.router'

  ]);

// Create a factory. Factory names are by convention written in lowerCamelCase.

// UI Router provides a number of new things: $stateProvider and $urlRouterProvider

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
    //define which URL will be defined as HOME
    url: "/home",
    template: "/home.html",
    controller: "MainCtrl"
  })

}]);


app.factory('posts', [function(){

  //Create an object that can hold our array of posts.
  
  var obj = {
    posts: []
  }
  return obj;

}]);

//create a  controller called MainCtrl
// Inject the posts factory into both the array and the function's params.

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) { 
    // When I make a variable under $scope, I make it useable
    // by all other controllers and also viewable at index.html.
  $scope.test = 'Hello Person'; 

  $scope.posts = posts.posts; //this now refers to the object returned by the posts factory.

  $scope.addPost = function(){
    //add a new post to the post array on he scope.
    $scope.upvotes = 0;
    
    if ($scope.title !== '') { 
    $scope.posts.push({ title: $scope.title, link: $scope.link, upvotes: $scope.upvotes });
    $scope.title = '';
    $scope.link = '';
    }
  }

  $scope.incrementUpvotes = function(post){
    post.upvotes++;
  }

}]);