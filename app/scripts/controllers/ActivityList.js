'use strict';

angular.module('partyBidApp')
    .controller('ActivityListCtrl',function ($scope) {
        if(!localStorage.activitylist){
            location.href='#/';
        }
        $scope.activities=JSON.parse(localStorage.getItem('activitylist'));
        $scope.activities.reverse();
    });