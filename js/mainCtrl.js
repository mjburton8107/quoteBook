angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){
  $scope.quotes = dataService.getQuotes();

  $scope.addData = dataService.addData;
  $scope.removeData = dataService.removeData;

});
