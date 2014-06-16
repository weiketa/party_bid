/**
 * Created by voctor on 14-6-15.
 */
function Activity(){

}
Activity.add_activity=function(name,repeat){
    if(!repeat){
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        act_list.push({'name':name,'applystatus':'applyend','applylist':[],'bidstatus':'bidend'});
        localStorage.setItem('activitylist',JSON.stringify(act_list));
        location.href='#/apply/'+name;
    }
}
Activity.firstadd_activity=function(name){
    var first_activity=[{'name':name,'applystatus':'applyend','applylist':[],'bidstatus':'bidend'}];
    localStorage.setItem('activitylist',JSON.stringify(first_activity));
    location.href='#/apply/'+name;
}
Activity.get_activitise=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var acts=new Array();
    for(var i=0;i<act_list.length;i++){
        acts.unshift(act_list[i].name);
    }
    return acts;
}

Activity.check_activity_repeat=function(activities,name){
    for (var i=0;i<activities.length;i++){
        if(activities[i]==name){
            return true;
        }
    }
    return false;
}


