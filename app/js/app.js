'use strict';

angular.module('viceroyApp', [
  'ngResource',
  'ngRoute',
  'ngSanitize'
])
.config(function($locationProvider, $routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'views/default.html',
      title: ''
    })
})