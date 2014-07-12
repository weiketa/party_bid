/**
 * Created by voctor on 14-7-11.
 */
function bid_statistics_data_binding(){
    var current_activity=Bid.get_current_activity();
    $('#goback').attr('href','#/bidlist/'+current_activity);
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    $('span').text(localStorage.current_bid+'('+bid_messages.length+'人)');
    var bid_success_message=get_bid_success_message();
    $('#success').text('竞价结果：'+bid_success_message.applyname+'￥'+bid_success_message.price+'竞价成功!');
    var bid_statistics_date=get_bid_statistics_data();
    _.each(bid_statistics_date,function(bid){
        $('#bidlist').append('<li><div><h3><table><tr><td>￥'+bid.price+'</td><td width="100%" align="right">'+bid.times+'人</td></tr></table></li>');
    });
}
function get_bid_statistics_data(){
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    var sort_by_bid_messages=_.sortBy(bid_messages,function(bid_message){return Math.min(bid_message.price)});
    if(sort_by_bid_messages.length==1)
        return sort_by_bid_messages[0];
    _.each(sort_by_bid_messages,function(bid){bid.times=1});
    _.each(sort_by_bid_messages,function(bid,index){
        if(index!=sort_by_bid_messages.length-1&&sort_by_bid_messages[index].price==sort_by_bid_messages[index+1].price){
            sort_by_bid_messages[index].times+=1;
            delete sort_by_bid_messages[index+1];
        }
    });
    return sort_by_bid_messages;
}

