/**
 * Created by voctor on 14-6-16.
 */
function Bid(){

}
Bid.check_bidstatus=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(act_list,{name:act_name}).bidstatus=='bidend')
        return 'start';
    return 'end';
}

Bid.is_bid_able=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(act_list,function(act){return act.name==act_name&&(act.applylist.length==0||act.applystatus=='applystart')}))
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