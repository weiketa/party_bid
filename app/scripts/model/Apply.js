/**
 * Created by voctor on 14-6-16.
 */
function Apply(){

}

Apply.check_applystatus=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.findWhere(act_list,{name:act_name}).applystatus=='applyend')
        return 'start';
    return 'end';
}

Apply.get_applylist=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    return _.findWhere(act_list,{name:act_name}).applylist;
}

Apply.is_apply_able=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    if(_.find(act_list,function(act){return (act.applystatus=='applystart'&&act.name!=act_name)||act.bidstatus=='bidstart'}))
        return true;
    return false;
}

Apply.save_applystart_status=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(act_list,{name:act_name}).applystatus='applystart';
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}

Apply.save_applyend_status=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    _.findWhere(act_list,{name:act_name}).applystatus='applyend';
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}