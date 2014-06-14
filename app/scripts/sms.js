//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {

        var act_list=JSON.parse(localStorage.getItem('activitylist'));
        var apply_start=0;
        for(var i=0;i<act_list.length;i++){

            if(act_list[i].applystatus=='applystart'){
                var mess=json_message.messages[0].message.replace(/\s/g,'');
                if(mess.search(/bm/i)==0){
                    var apply_name=mess.substr(2).trim();
                    var apply_phone=json_message.messages[0].phone;
                    var apply_model={'applyname':apply_name,'phone':apply_phone};
                    for(var j=0;j<act_list[i].applylist.length;j++){
                        if(apply_phone==act_list[i].applylist[j].phone){
                            console.log('不能重复报名。');
                            return;
                        }
                    }
                    act_list[i].applylist.push(apply_model);
                    localStorage.setItem('activitylist',JSON.stringify(act_list));
                    console.log('报名成功！');
                    apply_start=1;
                    location.reload();
                    break;
                }
                console.log('报名短信格式不对。');
                apply_start=1;
                break;
            }
        }
        if(apply_start==0){
            for(var i=0;i<act_list.length;i++){
                if(act_list[i].applylist.length==0){
                    console.log('活动尚未开始，请稍候。');
                    break;
                }
                if(i==act_list.length-1){
                    console.log('对不起，报名已经结束。');
                    break;
                }
            }
        }
        //console.log('aaaaaaaaaaaaaaa');
    }
};


function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //console.log(message_json.messages[0].message);
    /*var mess=message_json.messages[0].message.replace(/\s/g,'');
    if(mess.search(/bm/i)==0){
        var apply_name=mess.substr(2).trim();
        var apply_phone=message_json.messages[0].phone;
        console.log(apply_phone);
    }*/

    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}

