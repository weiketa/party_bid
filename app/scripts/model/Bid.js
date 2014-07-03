/**
 * Created by voctor on 14-6-16.
 */
function Bid(bid_name){
    this.bidname=bid_name;
    this.bidstyle='biding';
    this.bidapplylist=[];
}
Bid.prototype.add_bid_info=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{name:activity_name}).bidlist.push(this);
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.check_bid_status=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(activity_list,{name:activity_name}).bidstatus=='bidend')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(activity_list,function(act){return act.name==activity_name&&(act.applylist.length==0||act.applystatus=='applystart'||act.bidstatus=='bidstart')}))
        return true;
    return false;
}

Bid.save_bid_start_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{name:activity_name}).bidstatus='bidstart';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}

Bid.save_bid_end_status=function(activity_name){
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(activity_list,{name:activity_name}).bidstatus='bidend';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.creat_bid_name=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    if(bid_list.length==0)
        return '竞价1';
    return '竞价'+(bid_list.length+1);
}
Bid.get_bid_list=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(activity_list,{name:activity_name}).bidlist;
    return bid_list.reverse();
}
Bid.save_bid_style=function(activity_name){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var lastbid= _.last(_.findWhere(activity_list,{name:activity_name}).bidlist);
    lastbid.bidstyle='bided';
    localStorage.setItem('activitylist',JSON.stringify(activity_list));
}
Bid.save_current_activity=function(activity_name){
    localStorage.setItem('current_activity',JSON.stringify(activity_name));
}