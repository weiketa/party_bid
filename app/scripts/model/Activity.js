/**
 * Created by voctor on 14-6-15.
 */
function Activity(){

}
Activity.add_activity=function(name){

}
Activity.get_activitise=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var acts=new Array();
    for(var i=0;i<act_list.length;i++){
        acts.unshift(act_list[i].name);
    }
    return acts;
}