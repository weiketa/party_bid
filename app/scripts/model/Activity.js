/**
 * Created by voctor on 14-6-15.
 */
function Activity(name){
    this.name=name;

}
Activity.add_activity=function(name){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    act_list.push({'name':name,'applystatus':'applyend','applylist':[],'bidstatus':'bidend'});
    localStorage.setItem('activitylist',JSON.stringify(act_list));
}
Activity.get_activitise=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var acts=new Array();
    for(var i=0;i<act_list.length;i++){
        acts.unshift(act_list[i].name);
    }
    return acts;
}