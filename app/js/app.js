'use strict';

/* App Module */

var intellExchange = angular.module('intellExchange', [
  'ngRoute',
  'intellExchangeController'
]);

intellExchange.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/showitem', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/', {
        templateUrl: 'partials/category-list.html',
        controller: 'CategoryListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
