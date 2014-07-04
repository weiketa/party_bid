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
                templateUrl: 'views/htmls/activity_list.html',
                controller: 'ActivityListCtrl'
            })
            .when('/activitycreate', {
                templateUrl: 'views/htmls/create_activity.html',
                controller: 'CreateActivityCtrl'
            })
            .when('/apply/:activity_name', {
                templateUrl: 'views/htmls/activity_start.html',
                controller: 'ActivityStartCtrl'
            })
            .when('/bidlist/:activity_name', {
                templateUrl: 'views/htmls/bid_start.html',
                controller: 'BidStartCtrl'
            })
            .when('/bidapply/:bid_name', {
                templateUrl: 'views/htmls/bid_apply.html',
                controller: 'BidApplyCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
