angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){
  $scope.quotes = dataService.getQuotes();

  $scope.addData = function(quoteText, quoteAuthor){
    var newQuote = {
      text : quoteText,
      author : quoteAuthor
    }
    dataService.addData(newQuote);
  }

  $scope.removeData = function(str){
    dataService.removeData(str);
  }

});
