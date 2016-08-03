
app.controller('movieCtrl', function($scope, movieService, personalCollectionService, yearService){

  $scope.allMovies = movieService.allMovies;

  $scope.addToCollection = function(movie){
    personalCollectionService.personalCollection.push(movie);

    movieService.allMovies.splice(movieService.allMovies.indexOf(movie), 1);
   
  }
// });


// app.controller('collectionCtrl', function($scope, personalCollectionService, yearService){
  $scope.myCollection = personalCollectionService.personalCollection;
  $scope.years = yearService.years;
  

});