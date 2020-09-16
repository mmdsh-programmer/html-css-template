function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (10+o.scrollHeight)+"px";
}

$('.leave-comment').keyup(function(){
    if($(this).val().length > 0)
    {
        $(this).closest('.content-box').find('.btn').show();
    }
    else{
        $(this).closest('.content-box').find('.btn').hide();
        $('.leave-comment').css({'height':46});
    }
})