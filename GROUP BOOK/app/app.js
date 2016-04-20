'use strict';

// Declare app level module which depends on views, and components
angular.module('MYCONBOOK', [
  'ngRoute',
  'firebase',
  'MYCONBOOK.contacts'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
