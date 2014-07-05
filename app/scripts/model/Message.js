/**
 * Created by voctor on 14-6-16.
 */
function Message(){

}
Message.delete_space=function(message){
     return message.messages[0].message.replace(/\s/g,'');
}

Message.check_apply_status=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(activity_list,function(activity){return activity.applystatus=='applystart'}))
        return true;
    return false;
}
Message.check_apply_repeat=function(message){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var apply_list = _.findWhere(activity_list,{applystatus:'applystart'}).applylist;
    if(_.find(apply_list,function(apply){return apply.phone==message.messages[0].phone}))
        return true;
    return false;
}

Message.add_apply_message=function(message){
        var activity_list=JSON.parse(localStorage.getItem('activitylist'));
        var apply_name=Message.delete_space(message).substr(2).trim();
        var apply_phone=message.messages[0].phone;
        var apply_model={'applyname':apply_name,'phone':apply_phone};
        _.findWhere(activity_list,{applystatus:'applystart'}).applylist.push(apply_model);
        localStorage.setItem('activitylist',JSON.stringify(activity_list));
        Message.refresh_apply_list();
}

Message.refresh_apply_list=function(){
    var apply_list=document.getElementById('applylist');
    var apply_list_scope=angular.element(apply_list).scope();
    apply_list_scope.$apply(function(){
        apply_list_scope.applies=Apply.get_apply_list(apply_list_scope.activity_name);
    });
}
Message.check_apply_detail_status=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(activity_list,function(activity){return activity.applylist.length==0}))
        return true;
    return false;
}
Message.check_bid_status=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(activity_list,function(activity){return activity.bidstatus=='bidstart'}))
        return true;
    return false;

}
Message.check_bid_detail_status=function(){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var current_activity=localStorage.getItem('current_activity');
    if(_.findWhere(activity_list,{name:current_activity}).bidlist.length==0)
        return true;
    return false;
}
Message.check_bid_is_in_apply=function(message){
    var activity_list=JSON.parse(localStorage.getItem('activitylist')),
        current_activity=localStorage.getItem('current_activity'),
        bid_phone=message.messages[0].phone,
        apply_list=_.findWhere(activity_list,{name:current_activity}).applylist;
    if(_.find(apply_list,function(apply){return apply.phone==bid_phone}))
        return true;
    return false;
}
Message.is_repeat_bid=function(message){
    var activity_list=JSON.parse(localStorage.getItem('activitylist')),
        current_activity=localStorage.getItem('current_activity'),
        bid_phone=message.messages[0].phone,
        bid_list=_.findWhere(activity_list,{name:current_activity}).bidlist,
        bid_messages= _.findWhere(bid_list,{bidstyle:'biding'}).bidapplylist;
    if(_.find(bid_messages,function(bid_message){return bid_message.phone==bid_phone}))
        return true;
    return false;
}
Message.add_bid_message=function(message){
    var activity_list=JSON.parse(localStorage.getItem('activitylist')),
        current_activity=localStorage.getItem('current_activity'),
        bid_price=Message.delete_space(message).substr(2).trim(),
        bid_phone=message.messages[0].phone,
        bid_list=_.findWhere(activity_list,{name:current_activity}).bidlist;
        _.last(bid_list).bidapplylist.push({id:_.last(bid_list).bidapplylist.length+1,price:bid_price,phone:bid_phone});
        localStorage.setItem('activitylist',JSON.stringify(activity_list));
        Message.refresh__bid_list();
}
Message.refresh__bid_list=function(){
    var bid_list=document.getElementById('bidlist');
    var bid_list_scope=angular.element(bid_list).scope();
    bid_list_scope.$apply(function() {
        bid_list_scope.bids=Bid.get_bid_messages(bid_list_scope.activity_name,bid_list_scope.bid_name);
    })
}
Message.is_bid_or_apply=function(message){
    var message=Message.delete_space(message);
    if(message.search(/bm/i)==0)
        return 'apply_message';
    if(message.search(/jj/i)==0)
        return 'bid_message';
    return 'wrong_message';
}
Message.get_phone=function(message){
    return message.messages[0].phone;
}


