/**
 * Created by voctor on 14-6-17.
 */
'use strict';
angular.module('partyBidApp')
    .controller('BidStartCtrl',function ($scope,$routeParams) {
        $scope.act_name=$routeParams.act_name;
        $scope.flag=Bid.is_bid_able($scope.act_name);
        $scope.bids=Bid.get_bidlist($scope.act_name);
        $scope.activities=Activity.get_activitylist();

        $scope.bid_start=function () {
            Bid.save_bidstart_status($scope.act_name);
            var bid_info=new Bid(Bid.creat_bidname($scope.act_name));
            bid_info.add_bid_info($scope.act_name);
            location.href='#/bidapply/'+$scope.act_name;
        }

    });
