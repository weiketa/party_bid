/**
 * Created by voctor on 14-7-7.
 */
function bid_result_data_binding(){
    bind_modal_success_info();
    bind_bid_result_float_success_info();
    show_modal_success_info();
    bind_go_back_url();
    bind_page_title();
    bind_bid_result_info();
}

function get_bid_success_message(){
    var bid_statistics_data=get_bid_statistics_data();
    return _.find(bid_statistics_data,function(bid){return bid.times==1});
}

function bind_modal_success_info() {
    if(get_bid_success_message()){
        var bid_success_message=get_bid_success_message();
        $('#modalSuccessMessage').text(bid_success_message.applyname+'￥'+bid_success_message.price+'竞价成功!');
    }
}

function show_modal_success_info(){
    $('#modalSuccess').modal('show');
    setTimeout(function () {
        $('#modalSuccess').modal('hide');
    }, 3000);
}

function bind_bid_result_float_success_info(){
    var bid_success_message=get_bid_success_message();
    $('#modalSuccess').on('hide.bs.modal',function(){
        $('#success').text('竞价结果：'+bid_success_message.applyname+'￥'+bid_success_message.price+'竞价成功!');
    });
}

function bind_go_back_url(){
    var current_activity=Bid.get_current_activity();
    $('#goback').attr('href','#/bidlist/'+current_activity);
}

function bind_page_title(){
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    $('#title').text(localStorage.current_bid+'('+bid_messages.length+'人)');
}
function bind_bid_result_info(){
    var bid_messages=Bid.get_bid_messages(localStorage.current_activity,localStorage.current_bid);
    var sort_by_bid_messages=_.sortBy(bid_messages,function(bid_message){return Math.min(bid_message.price)});
    _.each(sort_by_bid_messages,function(bid){
        var htmlTemp=document.getElementById('temp').content.cloneNode(true);
        var tds=htmlTemp.querySelectorAll('td');
        tds[0].textContent=bid.applyname;
        tds[1].textContent='￥'+bid.price;
        tds[2].textContent=bid.phone;
        $('#bidlist').append(htmlTemp);
    });
}
