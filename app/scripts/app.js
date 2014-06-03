'use strict';

angular
  .module('partyBidApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/create_activity.html',
        controller: 'CreateActivityCtrl'
      })
      .when('/list', {
        templateUrl: 'views/activity_list.html',
        controller: 'ActivityListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
