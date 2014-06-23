/**
 * Created by voctor on 14-6-22.
 */
'use strict';

angular.module('partyBidApp')
    .controller('BidApplyCtrl',function ($scope,$routeParams) {
        $scope.act_name=$routeParams.act_name;
        $scope.flag=false;
        $scope.bid_end=function(){
            if(window.confirm('确定要结束本次竞价吗？')){
                Bid.save_bidend_status($scope.act_name);
                Bid.save_bid_style($scope.act_name);
                $scope.flag=true;
            }

        }
    });
