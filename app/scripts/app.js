'use strict';

/**
 * @ngdoc overview
 * @name picOnlineApp
 * @description
 * # picOnlineApp
 *
 * Main module of the application.
 */
angular.module('picOnlineApp', [
  'ngCookies',
  'ngTouch',
  'ui.router',
  'camera'
]).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    });
});
