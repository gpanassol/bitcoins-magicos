angular.module('bitcoin').factory('mercadoBitcoinService', function($http){
  var _getCotacaoBitcoin = function(){
    return $http.get("https://www.mercadobitcoin.net/api/BTC/ticker/");
  };

  return {
    getCotacaoBitcoin: _getCotacaoBitcoin
  }

});
