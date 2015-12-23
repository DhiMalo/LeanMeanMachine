// Create an app called MEANNews

var app = angular.module('MEANNews', []);

// Create a factory. Factory names are by convention written in lowerCamelCase.

app.factory('posts', [function(){

  //Create an object that can hold our array of posts.
  
  var obj = {
    posts: []
  }
  return obj;

}]);

//create a  controller called MainCtrl
app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  //create a variable called test.  
    // When I make a variable under $scope, I make it useable
    // by all other controllers and also viewable at index.html.
  $scope.test = 'Hello Person'; 

  $scope.posts = posts.posts; //this now refers to the object returned by the posts factory.

  $scope.addPost = function(){
    //add a new post to the post array on he scope.
    $scope.upvotes = 0;
    
    if ($scope.title !== '') { 
    $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: $scope.upvotes });
    $scope.title = '';
    $scope.link = '';
    }
  }

  $scope.incrementUpvotes = function(post){
    post.upvotes++;
  }

}]);