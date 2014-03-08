app.controller('chat', function ($scope) {

  $scope.history = [];

  socket.on('history', function (data) {
    $scope.history = $scope.history.concat(data);
    console.log(data);
    $scope.$apply(); 
  });

});