/**
 * Created by voctor on 14-6-17.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityStartCtrl', function ($scope, $routeParams) {
        $scope.act_name = $routeParams.act_name;
        $scope.applies = Apply.get_applylist($scope.act_name);
        $scope.switch = Apply.check_applystatus($scope.act_name);
        $scope.flag = Apply.disable_btn_applystart($scope.act_name);

        $scope.apply_start = function () {
            Apply.start_onclick($scope.act_name);
            $scope.switch = 'end';
        }

        $scope.apply_end = function () {
            if (window.confirm('确认要结束本次报名吗？')) {
                Apply.end_onclick($scope.act_name);
                $scope.switch = 'start';
            }
        }
    });