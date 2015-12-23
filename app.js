//create an app called MEANNews
var app = angular.module('MEANNews', []);

//create a  controller called MainCtrl
app.controller('MainCtrl', ['$scope', function($scope){
  //create a variable called test.  
    // When I make a variable under $scope, I make it useable
    // by all other controllers and also viewable at index.html.
  $scope.test = 'Hello Man'; 
  $scope.posts = [
    {title: 'AmazingPost1', content:'Best news ever!', upvotes: 0},
    {title: 'AmazingPost2', content:'Best news ever2!', upvotes: 0},
    {title: 'AmazingPost3', content:'Best news ever3!', upvotes: 0},
    {title: 'AmazingPost4', content:'Best news ever4!', upvotes: 0},
    {title: 'AmazingPost5', content:'Best news ever5!', upvotes: 0},
    {title: 'AmazingPost6', content:'Best news ever6!', upvotes: 0},
    {title: 'AmazingPost7', content:'Best news ever7!', upvotes: 0},
    {title: 'AmazingPost8', content:'Best news ever8!', upvotes: 10}
    ];

  $scope.addPost = function(){
    //add a new post to the post array on he scope.
    $scope.posts.push({title: 'AmazingNewPost!', content: 'Dunno but I\'ll fill this later', upvotes: 5});
  }

}]);