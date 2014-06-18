'use strict';

angular.module('partyBidApp')
    .controller('ActivityListCtrl',function ($scope) {
        Page_Goto.goto_create_activity();
        $scope.activities=Activity.get_activitylist();
    });