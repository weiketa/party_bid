/**
 * Created by voctor on 14-6-17.
 */
'use strict';
angular.module('partyBidApp')
    .controller('BidStartCtrl',function ($scope,$routeParams,$location) {
        $scope.activity_name=$routeParams.activity_name;
        Bid.save_current_activity($scope.activity_name);
        $scope.flag=Bid.is_bid_able($scope.activity_name);
        $scope.bids=Bid.get_bid_list($scope.activity_name);
        $scope.activities=Activity.get_activity_list();

        $scope.bid_start=function () {
            Bid.save_bid_start_status($scope.activity_name);
            var bid_info=new Bid(Bid.creat_bid_name($scope.activity_name));
            bid_info.add_bid_info($scope.activity_name);
            $location.path('bidapply/'+$scope.activity_name);
        }

    });
