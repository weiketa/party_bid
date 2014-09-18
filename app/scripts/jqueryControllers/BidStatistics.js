/**
 * Created by voctor on 14-7-11.
 */
function bid_statistics_data_binding(){
    bind_go_back_url();
    bind_page_title();
    bind_bid_statistics_float_success_info();
    bind_bid_statistics_info();
}

function get_bid_statistics_data(){
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    var sort_by_bid_messages=_.sortBy(bid_messages,function(bid_message){return Math.min(bid_message.price)});
    if(sort_by_bid_messages.length==1)
        return sort_by_bid_messages[0];
    _.each(sort_by_bid_messages,function(bid){bid.times=1});
    delete_repeat_price_message(sort_by_bid_messages);
    return sort_by_bid_messages;
}
function delete_repeat_price_message(sort_by_bid_messages){
    _.each(sort_by_bid_messages,function(bid,index){
        if(index!=sort_by_bid_messages.length-1&&sort_by_bid_messages[index].price==sort_by_bid_messages[index+1].price){
            sort_by_bid_messages[index].times+=1;
            delete sort_by_bid_messages[index+1];
        }
    });
}
function bind_bid_statistics_float_success_info(){
    var bid_success_message=get_bid_success_message();
    $('#success').text('竞价结果：'+bid_success_message.applyname+'￥'+bid_success_message.price+'竞价成功!');
}
function bind_bid_statistics_info(){
    var bid_statistics_date=get_bid_statistics_data();
    _.each(bid_statistics_date,function(bid){
        var htmlTemp=document.getElementById('temp').content.cloneNode(true);
        var tds=htmlTemp.querySelectorAll('td');
        tds[0].textContent='￥'+bid.price;
        tds[1].textContent=bid.times+'人';
        $('#bidlist').append(htmlTemp);
    });
}




