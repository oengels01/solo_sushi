myApp.controller('DetailController', ['$scope', '$http', '$location', '$routeParams', 'UserService',
function($scope, $http, $location, $routeParams, UserService) {
  console.log('DetailController');
  $scope.recipeID = UserService.recipeID;
  UserService.findRecipeID($routeParams.id);

  // Connect the function to our factory
  $scope.removeRecipeID = UserService.removeRecipeID;

  $scope.saveRecipe = UserService.saveRecipe;
  //$scope.addToFavorites  = UserService.addToFavorites;
}]);
