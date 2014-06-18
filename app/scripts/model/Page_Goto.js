/**
 * Created by voctor on 14-6-18.
 */
function Page_Goto(){

}
Page_Goto.goto_create_activity=function(){
    if(!localStorage.activitylist){
        location.href='#/';
    }
}
Page_Goto.goto_activity_start= function (act_name) {
    location.href='#/apply/'+act_name;
}
