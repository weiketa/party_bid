/**
 * Created by voctor on 14-7-7.
 */
    function bid_result_data_binding(){
    var current_activity=Bid.get_current_activity();
    $('#goback').attr('href','#/bidlist/'+current_activity);
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    $('span').text(localStorage.current_bid+'('+bid_messages.length+'人)');
    //$('#bidlist').html('<li><h3>竞价信息</h3></li>');
    _.each(bid_messages,function(bid){
        $('#bidlist').append('<li><div><h3><table><tr><td>'+bid.applyname+'</td></tr><tr><td width="100%">'+bid.phone+'</td><td>￥'+bid.price+'</td></tr></table></li>');
    });

}
