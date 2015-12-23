//create an app called MEANNews
var app = angular.module('MEANNews', []);

//create a  controller called MainCtrl
app.controller('MainCtrl', ['$scope', function($scope){
  //create a variable called test.  
    // When I make a variable under $scope, I make it useable
    // by all other controllers and also viewable at index.html.
  $scope.test = 'Hello Person'; 
  $scope.posts = [
    {title: 'AmazingPost1', link:'Best news ever!', upvotes: 0},
    {title: 'AmazingPost2', link:'Best news ever2!', upvotes: 0},
    {title: 'AmazingPost3', link:'Best news ever3!', upvotes: 0},
    {title: 'AmazingPost4', link:'Best news ever4!', upvotes: 0},
    {title: 'AmazingPost5', link:'Best news ever5!', upvotes: 0},
    {title: 'AmazingPost6', link:'Best news ever6!', upvotes: 0},
    {title: 'AmazingPost7', link:'Best news ever7!', upvotes: 0},
    {title: 'AmazingPost8', link:'Best news ever8!', upvotes: 10}
    ];

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