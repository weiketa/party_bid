/**
 * Created by voctor on 14-6-16.
 */
function Bid(bidname){
    this.bidname=bidname;
    this.bidstyle='biding';
    this.bidapplylist=[];
}
Bid.prototype.add_bid_info=function(act_name){
    var act_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(act_list,{name:act_name}).bidlist.push(this);
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}
Bid.check_bidstatus=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(act_list,{name:act_name}).bidstatus=='bidend')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(act_list,function(act){return act.name==act_name&&(act.applylist.length==0||act.applystatus=='applystart'||act.bidstatus=='bidstart')}))
        return true;
    return false;
}

Bid.save_bidstart_status=function(act_name){
    var act_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(act_list,{name:act_name}).bidstatus='bidstart';
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}

Bid.save_bidend_status=function(act_name){
    var act_list = JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(act_list,{name:act_name}).bidstatus='bidend';
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}
Bid.creat_bidname=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(act_list,{name:act_name}).bidlist;
    if(bid_list.length==0)
        return '竞价1';
    return '竞价'+(bid_list.length+1);
}
Bid.get_bidlist=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var bid_list=_.findWhere(act_list,{name:act_name}).bidlist;
    return bid_list.reverse();
}
Bid.save_bid_style=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var lastbid= _.last(_.findWhere(act_list,{name:act_name}).bidlist);
    lastbid.bidstyle='bided';
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}