app.controller('chat', function ($scope) {

  $scope.history = [];

  // get full list of history: rewrite
  socket.on('history', function (data) {
    $scope.history = data;
    console.log(data);
    $scope.$apply(); 
  });

  // get new message: append
  socket.on('new', function (data) {
    $scope.history = $scope.history.concat(data);
    console.log(data);
    $scope.$apply(); 
  });

});