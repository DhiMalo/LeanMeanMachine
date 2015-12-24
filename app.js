// Create an app called MEANNews

var app = angular.module('MEANNews', ['ui.router']);

// Create a factory. Factory names are by convention written in lowerCamelCase.

// UI Router provides a number of new things: $stateProvider and $urlRouterProvider

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: '/home.html', // templateUrl must be lower-case camelCased. App will break with any alternative.
    controller: 'MainCtrl'
    }) // WARNING: Make sure not to add commas or semi-colons after each state or the app will break.

    .state('posts', {
    url: '/posts/{id}', // we're going to access this 'id' as a variable string in the controller, aka: a stateParam.
    templateUrl: '/posts.html', 
    controller: 'PostsCtrl'
    });

  // We can gracefully handle invalid routes as well --
  // If nothing is found, redirect to home state:
  $urlRouterProvider.otherwise('home');

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
    $scope.posts.push({ 
      title: $scope.title, 
      link: $scope.link, 
      upvotes: $scope.upvotes,
      // create an array of objects for each comment 
      comments : [
        {author: 'Joe', body: 'Cool, man!', upvotes: 0}, //comments can be upvoted just like posts!
        {author: 'Mikey', body: 'I like everything!', upvotes: 0}, 
      ]
    });
    $scope.title = '';
    $scope.link = '';
    }
  }

  $scope.incrementUpvotes = function(post){
    post.upvotes++;
  }

}]);

// Create A PostController so we can add comments for each post. 
//To do this, pass in the posts factory, and also pass in the stateParams from the ui-router
  // stateParams refers to the {variable} strings being identified by the url, see the string "id",line 20.
app.controller('PostCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){ 
  // Create a new variable to refer to an individual post. 
    // The index of the posts factory array will be equal to whatever id is used.
  $scope.post =  posts.posts[stateParams.id]; 
}]);