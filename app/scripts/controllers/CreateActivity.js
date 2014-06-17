'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityCtrl',function ($scope) {
        if(!localStorage.activitylist)
            $scope.flag=true;
        else
            $scope.flag=false;

        $scope.add=function() {
            if(!localStorage.activitylist){
                Activity.firstadd_activity($scope.input);
            }
            else{
                $scope.activities=Activity.get_activitise();
                $scope.error=Activity.check_activity_repeat($scope.activities,$scope.input);
                Activity.add_activity($scope.input, $scope.error);
            }
        }
    });


