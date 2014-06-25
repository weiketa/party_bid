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

Message.is_message_apply=function(message){
        var message=Message.delete_space(message);
        if(message.search(/bm/i)==0){
            return true;
        }
    return false;
}

Message.check_apply_repeat=function(message){
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    var apply_list = _.findWhere(activity_list,{applystatus:'applystart'}).applylist;
    if(_.find(apply_list,function(apply){return apply.phone==message.messages[0].phone}))
        return true;
    return false;
}

Message.add_apply=function(message){
        var activity_list=JSON.parse(localStorage.getItem('activitylist'));
        var apply_name=Message.delete_space(message).substr(2).trim();
        var apply_phone=message.messages[0].phone;
        var apply_model={'applyname':apply_name,'phone':apply_phone};
        _.findWhere(activity_list,{applystatus:'applystart'}).applylist.push(apply_model);
        localStorage.setItem('activitylist',JSON.stringify(activity_list));
        location.reload();
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
    var bid_list=(JSON.parse(localStorage.getItem('activitylist'))).bidlist;
    if(_.find(bid_list,function(bid){return _.last(bid.bidapplylist).length==0}))
        return true;
    return false;
}
Message.is_bid_or_apply=function(message){
    var message=Message.delete_space(message);
    if(message.search(/bm/i)==0)
        return 'apply_message';
    if(message.search(/jj/i)==0)
        return 'bid_message';
    return 'wrong_message'
}

