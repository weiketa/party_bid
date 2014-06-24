/**
 * Created by voctor on 14-6-15.
 */
function Activity(name) {
    this.name = name;
    this.applystatus = 'applyend';
    this.bidstatus = 'bidend';
    this.applylist = [];
    this.bidlist=[];
}
Activity.prototype.add_activity = function (repeat) {
    if (!repeat) {
        var act_list = JSON.parse(localStorage.getItem('activitylist'));
        act_list.push(this);
        localStorage.setItem('activitylist', JSON.stringify(act_list));
    }
}

/*Activity.prototype.first_add_activity = function () {
    var first_activity = [this];
    localStorage.setItem('activitylist', JSON.stringify(first_activity));
}*/

Activity.prototype.check_activity_repeat = function (activities) {
    return _.contains(activities,this.name);
}

Activity.get_activitise = function () {
    var act_list = JSON.parse(localStorage.getItem('activitylist'));
    var acts = [];
    _.each(act_list,function(act){acts.unshift(act.name)});
    return acts;
}

Activity.get_activitylist = function () {
    var activitylist = JSON.parse(localStorage.getItem('activitylist'));
    activitylist.reverse();
    return activitylist;
}

Activity.check_exist_activitylist = function () {
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if (activity_list.length==0)
        return true;
    return false;
}


