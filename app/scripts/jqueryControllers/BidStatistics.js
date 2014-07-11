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
}