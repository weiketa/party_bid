/**
 * Created by voctor on 14-6-17.
 */
'use strict';
angular.module('partyBidApp')
    .controller('BidStartCtrl',function ($scope,$routeParams) {
        $scope.act_name=$routeParams.act_name;
        $scope.switch=Bid.check_bidstatus($scope.act_name);
        $scope.flag=Bid.disable_btn_bidstart($scope.act_name);
        $scope.bid_start=function () {
            Bid.start_onclick($scope.act_name);
            $scope.switch='end';
        }
        $scope.bid_end=function(){
            Bid.end_onclick($scope.act_name);
            $scope.switch='start';
        }
    });
