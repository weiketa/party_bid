/**
 * Created by voctor on 14-6-22.
 */
'use strict';

angular.module('partyBidApp')
    .controller('BidApplyCtrl',function ($scope,$routeParams) {
        $scope.activity_name=$routeParams.activity_name;
        $scope.flag=false;
        $scope.bid_end=function(){
            if(window.confirm('确定要结束本次竞价吗？')){
                Bid.save_bid_end_status($scope.activity_name);
                Bid.save_bid_style($scope.activity_name);
                $scope.flag=true;
            }

        }
    });
