
app.controller('movieCtrl', function($scope, movieService, personalCollectionService, yearService){
  $scope.show = true;
  $scope.allMovies = movieService.allMovies;
  $scope.myCollection = personalCollectionService.personalCollection;
  $scope.years = yearService.years;
  $scope.budget = 9;
  

  $scope.addToCollection = function(movie){

    if ($scope.budget < 3){
      alert("You don't have enough budget to add more movies!")
    }
    else {
    $scope.myCollection.push($scope.allMovies[movie]);
    $scope.allMovies.splice(movie, 1);
    $scope.show = false;
    $scope.budget-=3;
  }
   

  }

  $scope.remove = function(movie){
    console.log($scope.myCollection[movie])
    $scope.allMovies.push($scope.myCollection[movie]);
    $scope.myCollection.splice(movie,1);
    

    if (!personalCollectionService.personalCollection[0]){
      $scope.show=true;
    }
  }

});