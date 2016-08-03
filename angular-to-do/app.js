var app = angular.module('toDoApp', []);



app.controller('toDoCtrl', function ($scope, toDoService){


  $scope.addToDo = function(){
    toDoService.toDoList.push($scope.toDo)
    
    $scope.toDo = '';
  }

  $scope.remove = function($index){
    toDoService.toDoList.splice($index,1);
  }

  $scope.toDoList = toDoService.toDoList;

})


app.service('toDoService', function() {

  var toDoArray = [];

  return {toDoList: toDoArray};

});

