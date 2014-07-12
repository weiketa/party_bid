/**
 * Created by voctor on 14-7-7.
 */
function bid_result_data_binding(){
    if(get_bid_success_message()){
        var bid_success_message=get_bid_success_message();
        $('center').text(bid_success_message.applyname+'￥'+bid_success_message.price+'竞价成功!');
    }
    $('#modalSuccess').modal('show');
        setTimeout(function () {
            $('#modalSuccess').modal('hide');
        }, 3000);
    $('#modalSuccess').on('hide.bs.modal',function(){
        $('#success').text('竞价结果：'+bid_success_message.applyname+'￥'+bid_success_message.price+'竞价成功!');
    });
    var current_activity=Bid.get_current_activity();
    $('#goback').attr('href','#/bidlist/'+current_activity);
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    $('span').text(localStorage.current_bid+'('+bid_messages.length+'人)');
    var sort_by_bid_messages=_.sortBy(bid_messages,function(bid_message){return Math.min(bid_message.price)});
    _.each(sort_by_bid_messages,function(bid){
        $('#bidlist').append('<li><div><h3><table><tr><td>'+bid.applyname+'</td></tr><tr><td width="100%">'+bid.phone+'</td><td>￥'+bid.price+'</td></tr></table></li>');
    });
}

function get_bid_success_message(){
    var bid_statistics_data=get_bid_statistics_data();
    return _.find(bid_statistics_data,function(bid){return bid.times==1});
}
