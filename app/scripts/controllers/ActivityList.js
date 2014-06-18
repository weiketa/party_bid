'use strict';

angular.module('partyBidApp')
    .controller('ActivityListCtrl',function ($scope) {
        if(Activity.check_exist_activitylist())
            location.href='#/';

        $scope.activities=Activity.get_activitylist();
    });