//swiper
$(function(){
    var swiper_indexBanner = new Swiper('.swiper_indexBanner', {
	    autoHeight: true, //自動高
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})

//gameList Btn
$(function(){
    $('.gameList li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');

        var n = $(this).index();

        $(".gameBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

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

    $('.loginBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.loginWindow')
        .addClass('display');
    })

    $('.loginWindow .forget p').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetWindow')
        .addClass('display');
    })

    $('.registerBtn,.ruleWindow .back').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.registerWindow')
        .addClass('display');
    })

    $('.registerWindow .isCheck .ruleBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.ruleWindow')
        .addClass('display');
    })

    $(".changePhoneBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.phoneWindow')
        .addClass('display');
    })
    $(".phoneWindow .cellphoneCheck").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".changePwdBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.passwordWindow')
        .addClass('display');
    })
    $(".passwordWindow .passwordCheck").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo2')
        .addClass('display');
    })

    $(".pointWrap .detail").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointWindow')
        .addClass('display');
    })

    $(".bettingWrap .detail").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betHistoryWindow')
        .addClass('display');
    })

    $(".applyList .applyBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })
    $(".applyList .checkBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.eventWindow')
        .addClass('display');
    })

    $(".waterBox button").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterWindow')
        .addClass('display');
    })

    $(".searchContent .opAcc").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.accWindow')
        .addClass('display');
    })
    $(".searchContent .opPlat").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.platWindow')
        .addClass('display');
    })

    $(".callBet").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow')
        .addClass('display');
    })

    $(".transWrap .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $(".langBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.langWindow').addClass('display');
    })

    $(".inviteBtn.apply, .joinAgent").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.agentWindow').addClass('display');
    })
})

//news切換
$(function(){
    $('.jumpWindow.news .typeList li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".jumpWindow.news .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//wallet
$(function(){
    $('.walletWrap .openBtn').click(function(){
        $(this).find("p")
        .toggleClass("display");

        $(this).prev("ul")
        .toggleClass("active");
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".applyList:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//vip
$(function(){
    $(".vipWrap .lv_row li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".vipWrap .cardBox div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//mail
$(function(){
    $("header .editBtn").click(function(){
        $(".editBox,.detailBtn.edit")
        .addClass("display");
        $(".editBtn")
        .removeClass("display");
        $(".mailBox li")
        .addClass("editing");
    })
    $("header .detailBtn.edit").click(function(){
        $(".editBox,.detailBtn.edit")
        .removeClass("display");
        $(".editBtn")
        .addClass("display");
        $(".mailBox li")
        .removeClass("editing");
    })

    $(".mailTopList li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".mailWrap")
        .toggleClass("display");

        $(".mailBox li")
        .removeClass("editing");

        $(".editBox")
        .removeClass("display");

        var n = $(this).index();

        $("header .editBtn")
        .addClass("display")
        .siblings().removeClass("display");

        if(n == 1)
        {
            $("header .editBtn")
            .removeClass("display");
        }
    })

    $(".mailWrap.normal .subClass li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active"); 

        var n = $(this).index();

        $(".mailWrap.normal .mailBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".mailWrap.post .subClass li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active"); 

        var n = $(this).index();

        $(".mailWrap.post .mailBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//bettingRecord + dealRecord + pointWrap
$(function(){
    $(".searchContent .date button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

    })

    $(".bettingWrap .deal").on("change",function(){
        var n = parseInt($(this).val());

        $(".bettingWrap .list:eq("+ (n - 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');
    })
})

//表單查詢(data展開)
$(function(){
    $(".searchContent .check.more").click(function(){
        $(".data")
        .addClass("active");
    })
})

//help
function backToPage(){
    $("header .helpPage").removeClass("display");
    $("header .helpPage:eq(0)").addClass("display");

    $(".helpInner").removeClass("display");
    $(".helpWrap").addClass("display");
}
$(function(){
    $(".helpBody li").click(function(){
        var n = $(this).index();

        $("header .helpPage:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".helpWrap")
        .removeClass("display");

        $(".helpInner,.helpInner ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//slotPage
$(function(){
    $('.slotWrap .gameBox .love').click(function(){
        $(this)
        .toggleClass('active');
    })

    $('.slotHeader .listBox li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".depContent:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        if(n == 0)
        {
            $(".depositWrap .remindBox")
            .removeClass("display");
        }
        else
        {
            $(".depositWrap .remindBox")
            .addClass("display");
        }
    })
})

//transWrap
$(function(){
    $('.transWrap .openBtn').click(function(){
        $(this).find("p")
        .toggleClass("display");

        $(this).prev("ul")
        .toggleClass("active");
    })
})

//withWrap
$(function(){
    $(".withWrap .walletBox .check").click(function(){
        $(".walletDetail").toggleClass("active");
    })

    $('.withWrap .openBtn').click(function(){
        $(this).find("p")
        .toggleClass("display");

        $(this).prev("ul")
        .toggleClass("active");
    })
})