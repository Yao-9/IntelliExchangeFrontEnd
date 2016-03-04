var intellExchangeControllers = angular.module('intellExchangeController', []);

intellExchangeControllers.controller('ItemListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://127.0.0.1:8080/item').success(function(data) {
      $scope.items = data;
    });
  }]);

intellExchangeControllers.controller('CategoryListCtrl',['$scope', '$http',
  function($scope, $http) {
    $http.get('http://127.0.0.1:8080/category').success(function(data) {
      $scope.categories = data;
    });
  }]);
