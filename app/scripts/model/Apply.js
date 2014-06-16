/**
 * Created by voctor on 14-6-16.
 */
function Apply(){

}
Apply.prototype.act_list=JSON.parse(localStorage.getItem('activitylist'));
Apply.check_applystatus=function(act_name){
    var act_list=Apply.prototype.act_list;
    for(var i=0;i<act_list.length;i++){                  //判断开始按钮的状态
        if(act_list[i].name==act_name){
            if(act_list[i].applystatus=='applyend'){
                return 'start';
            }
            return 'end';
        }
    }
}
Apply.get_applylist=function(act_name){
    var act_list=Apply.prototype.act_list;
    for(var i=0;i<act_list.length;i++){
        if(act_list[i].name==act_name){
            return act_list[i].applylist;
        }
    }
}