/**
 * Created by voctor on 14-6-16.
 */
function Bid(){

}
Bid.check_bidstatus=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){                  //判断开始按钮的状态
        if(act_list[i].name==act_name){
            if(act_list[i].bidstatus=='bidend'){
                return 'start';
            }
        }
    }
    return 'end';
}
Bid.disable_btn_bidstart=function(act_name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    for(var i=0;i<act_list.length;i++){
        if(act_list[i].name==act_name){
            if(act_list[i].applylist.length==0||act_list[i].applystatus=='applystart'){
                return true;
            }
        }
    }
}
Bid.start_onclick=function(act_name){
    var act_list = JSON.parse(localStorage.getItem('activitylist'));
    for (var i = 0; i < act_list.length; i++) {
        if (act_list[i].name == act_name) {
            act_list[i].bidstatus = 'bidstart';
            localStorage.setItem('activitylist', JSON.stringify(act_list));
            break;
        }
    }
}
Bid.end_onclick=function(act_name){
    var act_list = JSON.parse(localStorage.getItem('activitylist'));
    for (var i = 0; i < act_list.length; i++) {
        if (act_list[i].name == act_name) {
            act_list[i].bidstatus = 'bidend';
            localStorage.setItem('activitylist', JSON.stringify(act_list));
            break;
        }
    }
}