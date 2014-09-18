'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityCtrl',function ($scope,$location) {
        $scope.flag=Activity.check_exist_activity_list();
        $scope.is_input_able=Bid.is_biding();
        $scope.add=function() {
            var activity=new Activity($scope.input);
            $scope.repeat=activity.check_activity_repeat(Activity.get_activitise());
            activity.add_activity($scope.repeat);
            if(!$scope.repeat)
                $location.path('apply/'+$scope.input);
        }
    });


