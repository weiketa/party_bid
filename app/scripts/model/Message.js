/**
 * Created by voctor on 14-6-16.
 */
function Message(){

}
Message.delete_space=function(message){
     return message.messages[0].message.replace(/\s/g,'');
}

Message.check_applystate=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){
        if(act_list[i].applystatus=='applystart'){
            return true;
        }
    }
    return false;
}

Message.message_is_apply=function(message){
        var message=Message.delete_space(message);
        if(message.search(/bm/i)==0){
            return true;
        }
    return false;
}

Message.check_apply_repeat=function(message){
    var position=Message.get_applystart_array_position();
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var j=0;j<act_list[position].applylist.length;j++){
        if(message.messages[0].phone==act_list[position].applylist[j].phone){
            return true;
        }
    }
    return false;
}

Message.get_applystart_array_position=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){
        if(act_list[i].applystatus=='applystart'){
            return i;
        }
    }
}

Message.add_apply=function(message){
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        var apply_name=Message.delete_space(message).substr(2).trim();
        var apply_phone=message.messages[0].phone;
        var apply_model={'applyname':apply_name,'phone':apply_phone};
        var position=Message.get_applystart_array_position();
        act_list[position].applylist.push(apply_model);
        localStorage.setItem('activitylist',JSON.stringify(act_list));
        location.reload();
}

Message.check_apply_detailstatus=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++) {
        if (act_list[i].applylist.length == 0) {
            return true;
        }
    }
    return false;
}

