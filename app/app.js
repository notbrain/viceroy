'use strict';

angular.module('f1ntasyApp', [
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