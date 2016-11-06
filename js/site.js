'use strict';

/**
 * @ngdoc overview
 * @name governanceApp
 * @description
 * # governanceApp
 *
 * Main module of the application.
 */
angular
  .module('governanceApp', [
    'ngRoute',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/Home', {
        templateUrl: 'views/Index.html',
        controller: 'GovernanceController'
      })
      .when('/Home/Governance', {
        templateUrl: 'views/Governance.html',
        controller: 'GovernanceController'
      })
      .when('/Info', {
        templateUrl: 'views/Info.html',
        controller: 'GovernanceController'
      })
      .when('/TrackOptimize', {
        templateUrl: 'views/TrackOptimize.html',
        controller: 'GovernanceController'
      })
      .when('/Requestpage', {
        templateUrl: 'views/Requestpage.html',
        controller: 'GovernanceController'
      })
      .when('/About', {
        templateUrl: 'views/About.html',
        controller: 'GovernanceController'
      })
      .when('/Admin', {
        templateUrl: 'views/Admin.html',
        controller: 'GovernanceController'
      })
      .otherwise({
        redirectTo: '/Home'
      });
  });