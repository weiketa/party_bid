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
        var activity_list = JSON.parse(localStorage.getItem('activitylist'));
        activity_list.push(this);
        localStorage.setItem('activitylist', JSON.stringify(activity_list));
    }
}

Activity.prototype.check_activity_repeat = function (activities) {
    return _.contains(activities,this.name);
}

Activity.get_activitise = function () {
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    var activities = [];
    _.each(activity_list,function(activity){activities.unshift(activity.name)});
    return activities;
}

Activity.get_activity_list = function () {
    var activity_list = JSON.parse(localStorage.getItem('activitylist'));
    activity_list.reverse();
    return activity_list;
}

Activity.check_exist_activity_list = function () {
    var activity_list=JSON.parse(localStorage.getItem('activitylist'));
    if (activity_list.length==0)
        return true;
    return false;
}


