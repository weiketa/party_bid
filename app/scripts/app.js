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
            .when('/apply/:activity_name', {
                templateUrl: 'views/htmls/activity_start.html',
                controller: 'ActivityStartCtrl'
            })
            .when('/bidlist/:activity_name', {
                templateUrl: 'views/htmls/bid_start.html',
                controller: 'BidStartCtrl'
            })
            .when('/bidapply/:activity_name', {
                templateUrl: 'views/htmls/bid_apply.html',
                controller: 'BidApplyCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
$(document).ready(function (){
    //前提假设
    if(!localStorage.activitylist)
        localStorage.activitylist=JSON.stringify([]);
});
