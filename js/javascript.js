//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//gameList Btn
$(function(){
    $('.gameList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(".gameList .hotBtn").click(function(){
        $(".gameBox.hotBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
    $(".gameList .loveBtn").click(function(){
        $(".gameBox.loveBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
    $(".gameList .sportBtn").click(function(){
        $(".gameBox.sportBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
    $(".gameList .liveBtn").click(function(){
        $(".gameBox.liveBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
    $(".gameList .slotBtn").click(function(){
        $(".gameBox.slotBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
    $(".gameList .fishBtn").click(function(){
        $(".gameBox.fishBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
    $(".gameList .boardBtn").click(function(){
        $(".gameBox.boardBox")
        .addClass("display")
        .siblings().removeClass("display")
    })
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.loginWindow').addClass('display');
    })

    $('.loginWindow .forget').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetWindow').addClass('display');
    })

    $('.signupBtn,.ruleWindow .back').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.registerWindow').addClass('display');
    })

    $('.registerWindow .isCheck .ruleBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })

    $('.memberWrap .opLang').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.langWindow').addClass('display');
    })

    $(".applyList .applyBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
    $(".applyList .checkBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.eventWindow').addClass('display');
    })

    $(".changePhoneBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.phoneWindow').addClass('display');
    })
    $(".changePwdBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $(".opDownload").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.downloadBox').addClass('display');
    })

    $(".vipWrap .topBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkPoint').addClass('display');
    })

    $(".searchContent .opAcc").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.accWindow').addClass('display');
    })
    $(".searchContent .opPlat").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.platWindow').addClass('display');
    })

    $(".cardContent button").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo2').addClass('display');
    })

    $(".transWrap .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $(".forActive .check,.forHistory .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.bettingDetail').addClass('display');
    })

    $(".bettingWrap .recordBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.pointWindow').addClass('display');
    })
})
//請先登入
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}

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

//realLogin
$(function(){
    $('.realLogin').click(function(){
        $('.jumpWindow,.loginBox').removeClass('display');
        $('.filter,.news,.alLogin').addClass('display');
        $(".homeCenter .gameList .loveBtn").addClass("display");
        
        $('.gameBox.hotBox li').attr('onclick',"callSlot()");
        $('.gameBox.liveBox li').attr('onclick',"callLive()");
        $('.gameBox.sportBox li').attr('onclick',"callSport()");
        $(".gameBox.slotBox li").attr('onclick',"window.location.href='./html/slotPage.html'");
        $(".gameBox.fishBox li").attr('onclick',"window.location.href='./html/fishPage.html'");
        $(".gameBox.boardBox li").attr('onclick',"window.location.href='./html/boardPage.html'");

        $('.operate button:eq(0)').attr('onclick',"window.location.href='./html/deposit.html'");
        $('.operate button:eq(1)').attr('onclick',"window.location.href='./html/transfer.html'");
        $('.operate button:eq(2)').attr('onclick',"window.location.href='./html/withdrawal.html'");

        $('footer li:nth-of-type(2)').attr('onclick',"window.location.href='./html/event.html'");
        $('footer li:nth-of-type(3)').attr('onclick',"window.location.href='./html/wallet.html'");
        $('footer li:nth-of-type(4)').attr('onclick',"window.location.href='./html/help_often_contact.html'");
        $('footer li:nth-of-type(5)').attr('onclick',"window.location.href='./html/member.html'");
    })
})
function callSport() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.sport').addClass('display');
}
function callLive() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.live').addClass('display');
}
function callFish() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.fish').addClass('display');
}
function callLottery() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.lottery').addClass('display');
}
function callBoard() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.board').addClass('display');
}
function callSlot() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.slot').addClass('display');
}

//slotPage .gameBox .love
$(function(){
    $('.slotWrap .gameBox .love').click(function(){
        $(this).toggleClass('active');
    })
})
//slotPage .slotHeader切換
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//member opLang
$(function(){
    $('.langWindow li').click(function(){
        var n = $(this).index();

        $(this)
        .addClass('active')
        .siblings().removeClass("active");

        $(".options.opLang span:eq("+ n +")")
        .addClass("active")
        .siblings().removeClass("active")

        $(".filter")
        .removeClass("display");
    })
})

//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//walletWrap btnBox
$(function(){
    $('.walletWrap .btnBox button:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forActive').addClass('display');
        $('.walletList .forActive').siblings().removeClass('display');
    })

    $('.walletWrap .btnBox button:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forHistory').addClass('display');
        $('.walletList .forHistory').siblings().removeClass('display');
    })

    $('.walletWrap .btnBox button:nth-of-type(3)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forPlatform').addClass('display');
        $('.walletList .forPlatform').siblings().removeClass('display');
    })
})
//walletWrap openBtn
$(function(){
    $('.walletWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
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

//eventApply
$(function(){
    $(".eventApplyType li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".eventApplyType li:eq(0)").click(function(){
        $(".applyRecord,.applyList").removeClass("display");
        $(".applyList.choose").addClass("display");
    })
    $(".eventApplyType li:eq(1)").click(function(){
        $(".applyRecord,.applyList").removeClass("display");
        $(".applyList.already").addClass("display");
    })
    $(".eventApplyType li:eq(2)").click(function(){
        $(".applyList").removeClass("display");
        $(".applyRecord").addClass("display");
    })

    $(".applyRecord .bigBtn button").click(function(){
        $(".reviewBody .noData").removeClass("display");
        $(".reviewBody .recordBox").addClass("display");
    })

    $(".applyRecord .btnBox button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".reviewBody .noData").addClass("display");
        $(".reviewBody .recordBox").removeClass("display");
    })
})

//個人資料頁
$(function(){
    $(".memberInfo .chBtn.edit,.memberInfo .chBtn.check,.memberInfo .chBtn.nope").click(function(){
        $(this).closest("li").find("input")
        .toggleClass("active");

        $(this).closest("li").find("button")
        .toggleClass("display");
    })
})

//vip
$(function(){
    $(".checkPoint button").click(function(){
        $($(this).prev().children()).toggleClass("display");
    })
})

//mail
$(function(){
    $("header .editBtn").click(function(){
        $(".editBox,.detailBtn.edit").addClass("display");
        $(".editBtn").removeClass("display");
        $(".mailBox").addClass("editing");
    })
    $("header .detailBtn.edit").click(function(){
        $(".editBox,.detailBtn.edit").removeClass("display");
        $(".editBtn").addClass("display");
        $(".mailBox").removeClass("editing");
    })

    $(".topList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".topList li:eq(0)").click(function(){
        $(".mailBody.normal").addClass("display");
        $(".mailBody.post").removeClass("display");
        $("header .editBtn").addClass("display");
    })
    $(".topList li:eq(1)").click(function(){
        $(".mailBody.normal").removeClass("display");
        $(".mailBody.post").addClass("display");
        $("header .editBtn").removeClass("display");
    })


    $(".mailBody .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active"); 
    })
    $(".mailBody.normal .subClass li:eq(0)").click(function(){
        $(".mailBox.system").addClass("display");
        $(".mailBox.personal").removeClass("display");
    })
    $(".mailBody.normal .subClass li:eq(1)").click(function(){
        $(".mailBox.system").removeClass("display");
        $(".mailBox.personal").addClass("display");
    })
    $(".mailBody.post .subClass li:eq(0)").click(function(){
        $(".mailBox.hot").addClass("display");
        $(".mailBox.hot").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(1)").click(function(){
        $(".mailBox.nor").addClass("display");
        $(".mailBox.nor").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(2)").click(function(){
        $(".mailBox.dep").addClass("display");
        $(".mailBox.dep").siblings().removeClass("display");
    })
})

//bettingRecord + dealRecord
$(function(){
    $(".searchContent .check").click(function(){
        $(".noData").removeClass("display");
        $(".recordBox,.dealBox,.partnerBox").addClass("display");
    })

    $(".searchContent .date button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".noData").addClass("display");
        $(".recordBox,.dealBox,.partnerBox").removeClass("display");
    })

    $(".bettingWrap .open").click(function(){
        $(this)
        .toggleClass("active")
        .prev(".innerBox").toggleClass("display");
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        var n = $(this).index();

        $(".depContent:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".depContent.card .check").click(function(){
        $(".depList,.depContent").removeClass("display");
        $(".depContent.already").addClass("display");
    })
    $(".depContent.already .change").click(function(){
        $(".depContent").removeClass("display");
        $(".depList,.depContent.card").addClass("display");
    })
})

//transWrap
$(function(){
    $(".transWrap .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".transWrap .subClass li:eq(0)").click(function(){
        $(".transWrap .forActive").addClass("display");
        $(".transWrap .forPlatform").removeClass("display");
    })
    $(".transWrap .subClass li:eq(1)").click(function(){
        $(".transWrap .forActive").removeClass("display");
        $(".transWrap .forPlatform").addClass("display");
    })

    $('.transWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//withWrap
$(function(){
    $(".withWrap .walletBox .check").click(function(){
        $(".walletDetail").toggleClass("active");
    })

    $('.withWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//card
$(function(){
    $(".cardContent .mainSelect").change(function(){
        var n = $(".cardContent .mainSelect").val();

        if(n == 1)
        {
            $(".cardContent ol.card")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 2)
        {
            $(".cardContent ol.vPoint")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 3)
        {
            $(".cardContent ol.usdt")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 4)
        {
            $(".cardContent ol.tigerPay")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 5)
        {
            $(".cardContent ol.iWallet")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 6)
        {
            $(".cardContent ol.sticpay")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 7)
        {
            $(".cardContent ol.imove")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//註冊頁判斷打字按鈕
$(function(){
    $($(".registerWindow .code").prev("input")).on("input",function(){
        if($(".registerWindow .code").prev("input").val() == "")
        {
            $(".registerWindow .code")
            .attr("disabled",true);
        }
        else
        {
            $(".registerWindow .code")
            .attr("disabled",false);
        }
    })
})

//sendBtn
$(function(){
    $(".sendBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.plsGo")
        .addClass("display");
    })
})