'use strict';

/* App Module */

var intellExchange = angular.module('intellExchange', [
  'ngRoute',
  'intellExchangeControllers'
]);

intellExchange.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/allItem', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).when('/category/:categoryId', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).when('/', {
        templateUrl: 'partials/category-list.html',
        controller: 'CategoryListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
