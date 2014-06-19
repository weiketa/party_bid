/**
 * Created by voctor on 14-6-16.
 */
function Apply(){

}

Apply.check_applystatus=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){                  //判断开始按钮的状态
        if(act_list[i].name==act_name&&act_list[i].applystatus=='applyend'){
                return 'start';
        }
    }
    return 'end';
}

Apply.get_applylist=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){
        if(act_list[i].name==act_name){
            return act_list[i].applylist;
        }
    }
}

Apply.is_apply_able=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){
        if((act_list[i].applystatus=='applystart'&&act_list[i].name!=act_name)||act_list[i].bidstatus=='bidstart'){
            return true;
        }
    }
    return false;
}

Apply.save_applystart_status=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var  i=0;i<act_list.length;i++){
        if(act_list[i].name==act_name){
            act_list[i].applystatus='applystart';
            localStorage.setItem('activitylist',JSON.stringify(act_list));
            break;
        }
    }
}

Apply.save_applyend_status=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){
        if(act_list[i].name==act_name){
            act_list[i].applystatus='applyend';
            localStorage.setItem('activitylist',JSON.stringify(act_list));
            break;
        }
    }
}