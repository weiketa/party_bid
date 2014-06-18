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
        templateUrl: 'views/htmls/create_activity.html',
        controller: 'CreateActivityCtrl'
      })
      .when('/activitylist', {
        templateUrl: 'views/htmls/activity_list.html',
        controller: 'ActivityListCtrl'
      })
      .when('/apply/:act_name', {
            templateUrl: 'views/htmls/activity_start.html',
            controller: 'ActivityStartCtrl'
        })
      .when('/bid/:act_name', {
            templateUrl: 'views/htmls/bid_start.html',
            controller: 'BidStartCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
