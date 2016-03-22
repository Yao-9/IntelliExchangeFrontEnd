var intellExchangeControllers = angular.module('intellExchangeControllers', []);

intellExchangeControllers.controller('ItemListCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://127.0.0.1:8080/category/' + $routeParams.categoryId).success(function(data) {
      $scope.items = data;
    });
  }]);

intellExchangeControllers.controller('CategoryListCtrl',['$scope', '$http',
  function($scope, $http) {
    $http.get('http://127.0.0.1:8080/category').success(function(data) {
      $scope.categories = data;
    });
  }]);

intellExchangeControllers.controller('ItemDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('http://127.0.0.1:8080/item/' + $routeParams.itemID).success(function(data) {
      $scope.item = data
    });
  }]);

intellExchangeControllers.controller('PopCategoryCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://127.0.0.1:8080/popularcategory').success(function(data) {
      $scope.popcates = data;
    });
  }]);
