'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityCtrl',function ($scope) {
        $scope.flag=Activity.disable_btn_return();
        $scope.add=function() {
            var activity=new Activity($scope.input);
            $scope.error=activity.add_onclick();
        }
    });


