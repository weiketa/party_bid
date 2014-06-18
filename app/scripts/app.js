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
      .when('/activitylist', {
        templateUrl: 'views/activity_list.html',
        controller: 'ActivityListCtrl'
      })
      .when('/apply/:act_name', {
            templateUrl: 'views/activity_start.html',
            controller: 'ActivityStartCtrl'
        })
      .when('/bid/:act_name', {
            templateUrl: 'views/bid_start.html',
            controller: 'BidStartCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
