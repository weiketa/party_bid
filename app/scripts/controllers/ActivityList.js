'use strict';

angular.module('partyBidApp')
    .controller('ActivityListCtrl',function ($scope) {
        if(Activity.check_exist_activity_list())
            location.href='#/';

        $scope.activities=Activity.get_activity_list();
    });