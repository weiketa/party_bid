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
        location.href='#/apply/'+this.name;
    }
}
Activity.prototype.first_add_activity=function(){
    var first_activity=[this];
    localStorage.setItem('activitylist',JSON.stringify(first_activity));
    location.href='#/apply/'+this.name;
}
Activity.prototype.check_activity_repeat=function(activities){
    for (var i=0;i<activities.length;i++){
        if(activities[i]==this.name){
            return true;
        }
    }
    return false;
}
Activity.prototype.add_onclick=function(){
    if(!localStorage.activitylist){
        this.first_add_activity();
        return false;
    }
    else{
        var activities=Activity.get_activitise();
        var error=this.check_activity_repeat(activities);
        this.add_activity(error);
        return error;
    }
}
/*Activity.add_activity=function(name,repeat){
    if(!repeat){
        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        act_list.push({'name':name,'applystatus':'applyend','applylist':[],'bidstatus':'bidend'});
        localStorage.setItem('activitylist',JSON.stringify(act_list));
        location.href='#/apply/'+name;
    }
}*/
/*Activity.firstadd_activity=function(name){
    var first_activity=[{'name':name,'applystatus':'applyend','applylist':[],'bidstatus':'bidend'}];
    localStorage.setItem('activitylist',JSON.stringify(first_activity));
    location.href='#/apply/'+name;
}*/
Activity.get_activitise=function(){
    var act_list=JSON.parse(localStorage.getItem('activitylist'));
    var acts=new Array();
    for(var i=0;i<act_list.length;i++){
        acts.unshift(act_list[i].name);
    }
    return acts;
}

/*Activity.check_activity_repeat=function(activities,name){
    for (var i=0;i<activities.length;i++){
        if(activities[i]==name){
            return true;
        }
    }
    return false;
}*/


