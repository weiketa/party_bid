/**
 * Created by voctor on 14-7-7.
 */
    function bid_result_data_binding(){
    var current_activity=Bid.get_current_activity();
    $('#goback').attr('href','#/bidlist/'+current_activity);
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    $('span').text(localStorage.current_bid+'('+bid_messages.length+'人)');
    var sortBy_bid_messages=_.sortBy(bid_messages,function(bid_message){return Math.min(bid_message.price)});
    _.each(sortBy_bid_messages,function(bid){
        $('#bidlist').append('<li><div><h3><table><tr><td>'+bid.applyname+'</td></tr><tr><td width="100%">'+bid.phone+'</td><td>￥'+bid.price+'</td></tr></table></li>');
    });

}
