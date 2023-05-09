//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })

     $(".unlogin").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".inviteBtn.apply, .joinAgent").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.agentWindow').addClass('display');
    })
})
