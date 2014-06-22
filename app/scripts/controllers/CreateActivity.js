'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityCtrl',function ($scope) {
        $scope.flag=Activity.check_exist_activitylist();

        $scope.add=function() {
            var activity=new Activity($scope.input);
            if($scope.flag){
                activity.first_add_activity();
                location.href='#/apply/'+$scope.input;
            }
            $scope.repeat=activity.check_activity_repeat(Activity.get_activitise());
            activity.add_activity($scope.repeat);
            if(!$scope.repeat)
            location.href='#/apply/'+$scope.input;
        }
    });


