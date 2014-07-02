'use strict';

angular.module('partyBidApp')
    .controller('ActivityListCtrl',function ($scope,$location) {
        if(Activity.check_exist_activity_list())
            $location.path('activitycreate');

        $scope.activities=Activity.get_activity_list();
    });