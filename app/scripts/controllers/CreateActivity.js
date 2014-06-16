'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityCtrl',function ($scope) {
        if(!localStorage.activitylist)
            $scope.flag=true;
        else
        $scope.flag=false;

        $scope.add=function() {
            if(!localStorage.activitylist){
                var first_activity=[{'name':$scope.input,'applystatus':'applyend','applylist':[],'bidstatus':'bidend'}];
                localStorage.setItem('activitylist',JSON.stringify(first_activity));
                location.href='#/apply/'+$scope.input;
            }
            else{
                $scope.activities=Activity.get_activitise();
                $scope.error=Activity.check_activity_repeat($scope.activities,$scope.input);
                console.log($scope.error);
                Activity.add_activity($scope.input, $scope.error);
            }
        }
    });
angular.module('partyBidApp')
    .controller('ActivityListCtrl',function ($scope) {
        if(!localStorage.activitylist){
            location.href='#/';
        }
        $scope.activities=JSON.parse(localStorage.getItem('activitylist'));
        $scope.activities.reverse();
    });
angular.module('partyBidApp')
    .controller('ActivityStartCtrl',function ($scope,$routeParams) {
        $scope.act_name=$routeParams.act_name;
        //console.log($scope.act_name);
        $scope.applies=Apply.get_applylist($scope.act_name)
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        for(var i=0;i<act_list.length;i++){                  //判断开始按钮的状态
            if(act_list[i].name==$scope.act_name){
                if(act_list[i].applystatus=='applyend'){
                    $scope.switch='start';
                    break;
                }
                $scope.switch='end';
                break;
            }
        }
        for(var i=0;i<act_list.length;i++){
            if((act_list[i].applystatus=='applystart'&&act_list[i].name!=$scope.act_name)||act_list[i].bidstatus=='bidstart'){
                $scope.flag=true;
                break;
            }
        }
        $scope.apply_start=function (){
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        for(var i=0;i<act_list.length;i++){
            if(act_list[i].name==$scope.act_name){
                act_list[i].applystatus='applystart';
                localStorage.setItem('activitylist',JSON.stringify(act_list));
                break;
            }
        }

            $scope.switch='end';
        }
        $scope.apply_end=function (){
            if(window.confirm('确认要结束本次报名吗？')){
                var act_list=JSON.parse(localStorage.getItem('activitylist'));
                for(var i=0;i<act_list.length;i++){
                    if(act_list[i].name==$scope.act_name){
                        act_list[i].applystatus='applyend';
                        localStorage.setItem('activitylist',JSON.stringify(act_list));
                        break;
                    }
                }
                $scope.switch='start';
            }
        }
    });
angular.module('partyBidApp')
    .controller('BidStartCtrl',function ($scope,$routeParams) {
        $scope.act_name=$routeParams.act_name;
        $scope.switch='start';
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        for(var i=0;i<act_list.length;i++){                  //判断开始按钮的状态
            if(act_list[i].name==$scope.act_name){
                if(act_list[i].bidstatus=='bidend'){
                    $scope.switch='start';
                    break;
                }
                $scope.switch='end';
                break;
            }
        }
        for(var i=0;i<act_list.length;i++){
            if(act_list[i].name==$scope.act_name){
                if(act_list[i].applylist.length==0||act_list[i].applystatus=='applystart'){
                    $scope.flag=true;
                }
            }
        }
        $scope.bid_start=function () {
            var act_list = JSON.parse(localStorage.getItem('activitylist'));
            for (var i = 0; i < act_list.length; i++) {
                if (act_list[i].name == $scope.act_name) {
                    act_list[i].bidstatus = 'bidstart';
                    localStorage.setItem('activitylist', JSON.stringify(act_list));
                    break;
                }
            }
            $scope.switch='end';
        }
        $scope.bid_end=function(){
            var act_list = JSON.parse(localStorage.getItem('activitylist'));
            for (var i = 0; i < act_list.length; i++) {
                if (act_list[i].name == $scope.act_name) {
                    act_list[i].bidstatus = 'bidend';
                    localStorage.setItem('activitylist', JSON.stringify(act_list));
                    break;
                }
            }
            $scope.switch='start';
        }
    });

