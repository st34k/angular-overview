app.controller('movieCtrl', function($scope, movieService){

  $scope.allMovies = movieService.allMovies;

})