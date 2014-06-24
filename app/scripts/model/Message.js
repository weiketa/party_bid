/**
 * Created by voctor on 14-6-16.
 */
function Message(){

}
Message.delete_space=function(message){
     return message.messages[0].message.replace(/\s/g,'');
}

Message.check_apply_state=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(act_list,function(act){return act.applystatus=='applystart'}))
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

