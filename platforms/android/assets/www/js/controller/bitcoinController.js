angular.module('bitcoin').controller("bitcoinController", function($scope, mercadoBitcoinService) {
  $scope.cotacao = {};
  $scope.data = "";

  var buscarCotacao = function(){
    mercadoBitcoinService.getCotacaoBitcoin().then(function(response){
      $scope.cotacao = response.data.ticker;
      $scope.data = Date.now();
    });
  };

  buscarCotacao();

});
