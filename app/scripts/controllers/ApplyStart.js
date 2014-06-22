/**
 * Created by voctor on 14-6-17.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityStartCtrl', function ($scope, $routeParams) {
        $scope.act_name = $routeParams.act_name;
        $scope.applies = Apply.get_applylist($scope.act_name);
        $scope.switch = Apply.check_applystatus($scope.act_name);
        $scope.flag = Apply.is_apply_able($scope.act_name);

        $scope.apply_start = function () {
            Apply.save_applystart_status($scope.act_name);
            $scope.switch = 'end';
        }

        $scope.apply_end = function () {
            if (window.confirm('确认要结束本次报名吗？')) {
                Apply.save_applyend_status($scope.act_name);
                $scope.switch = 'start';
            }
        }
    });