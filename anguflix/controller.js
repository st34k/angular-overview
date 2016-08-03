
app.controller('movieCtrl', function($scope, movieService, personalCollectionService, yearService){
  $scope.show = true;
  $scope.allMovies = movieService.allMovies;

  

  $scope.addToCollection = function(movie){
    personalCollectionService.personalCollection.push(movie);

    movieService.allMovies.splice(movieService.allMovies.indexOf(movie), 1);
    $scope.show = false;
  }

  $scope.remove = function($index){
    movieService.allMovies.push($index);
    personalCollectionService.personalCollection.splice($index,1);
    console.log (personalCollectionService.personalCollection)

    if (!personalCollectionService.personalCollection[0]){
      console.log($scope.show)
      $scope.show=true;
    }
  }
// });


// app.controller('collectionCtrl', function($scope, personalCollectionService, yearService){
  $scope.myCollection = personalCollectionService.personalCollection;
  $scope.years = yearService.years;


  

});