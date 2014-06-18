/**
 * Created by voctor on 14-6-15.
 */
function Activity(name){
    this.name=name;
    this.applystatus='applyend';
    this.bidstatus='bidend';
    this.applylist=[];
}
Activity.prototype.add_activity=function(repeat){
    if(!repeat){
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        act_list.push(this);
        localStorage.setItem('activitylist',JSON.stringify(act_list));
    }
}
Activity.prototype.first_add_activity=function(){
    var first_activity=[this];
    localStorage.setItem('activitylist',JSON.stringify(first_activity));
}
Activity.prototype.check_activity_repeat=function(activities){
    for (var i=0;i<activities.length;i++){
        if(activities[i]==this.name)
            return true;
    }
    return false;
}
Activity.get_activitise=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var acts=[];
    for(var i=0;i<act_list.length;i++){
        acts.unshift(act_list[i].name);
    }
    return acts;
}
Activity.disable_btn_return=function(){
    if(!localStorage.activitylist)
        return true;
        return false;
}
Activity.get_activitylist=function(){
    var activitylist=JSON.parse(localStorage.getItem('activitylist'));
    activitylist.reverse();
    return activitylist;
}
Activity.check_exist_activitylist=function(){
    if(!localStorage.getItem('activitylist'))
    return true;
    return false;
}


