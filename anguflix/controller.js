
app.controller('movieCtrl', function($scope, movieService, personalCollectionService, yearService){
  $scope.show = true;
  $scope.allMovies = movieService.allMovies;
  $scope.myCollection = personalCollectionService.personalCollection;
  

  $scope.addToCollection = function(movie){
    $scope.myCollection.push($scope.allMovies[movie]);
    $scope.allMovies.splice(movie, 1);
    $scope.show = false;
  }

  $scope.remove = function(movie){
    console.log($scope.myCollection[movie])
    $scope.allMovies.push($scope.myCollection[movie]);
    $scope.myCollection.splice(movie,1);

    if (!personalCollectionService.personalCollection[0]){
      $scope.show=true;
    }
  }
// });


// app.controller('collectionCtrl', function($scope, personalCollectionService, yearService){
  
  $scope.years = yearService.years;


  

});