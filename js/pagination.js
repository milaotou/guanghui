function GetQueryString(name)
	{
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)
			return unescape(r[2]);
			return null;
	}
	var a=GetQueryString("cid");//获取地址栏的数字
$(function(){
	if (a) {
		$('.img').eq(a-1).show().siblings('.img').hide();
	};
	
})
$(function(){  
	if (a==11) {	
        $(".reservation_right_1").show();
	};
	if (a==13) {
		$(".byjl_menu_l ul li.myAcco-li").css("height","40px");
        $(".myAcco-li>ul").css("display","none"); 
		$(".reservation-right").css("display","none");
        $(".reservation_right_3").show();
        $(".bar_2").addClass("colorORG").siblings().removeClass("colorORG").end().siblings(".myAcco-li").find("ul li").removeClass("colorORG");
        $(".bar_2").siblings().removeClass("current").end().addClass("current");
        $(".reservation-path>span").text("我的爱车");
	};
	if (a==14) {
		$(".byjl_menu_l ul li.myAcco-li").css("height","40px");
        $(".myAcco-li>ul").css("display","none"); 
		$(".reservation-right").css("display","none");
		$(".bar_3").siblings().removeClass("current").end().addClass("current");
		$(".bar_3").addClass("colorORG").siblings().removeClass("colorORG").end().siblings(".myAcco-li").find("ul li").removeClass("colorORG");
		$(".reservation_right_4").show();
		$(".reservation-path>span").text("我的订单");
	};
	if (a==15) {
		$(".byjl_menu_l ul li.myAcco-li").css("height","40px");
        $(".myAcco-li>ul").css("display","none"); 
		$(".reservation-right").css("display","none");
		$(".bar_4").siblings().removeClass("current").end().addClass("current");
		$(".bar_4").addClass("colorORG").siblings().removeClass("colorORG").end().siblings(".myAcco-li").find("ul li").removeClass("colorORG");
		$(".reservation_right_5").show();
		$(".reservation-path>span").text("我的退款");
	};
	if (a==16) {
		$(".byjl_menu_l ul li.myAcco-li").css("height","40px");
        $(".myAcco-li>ul").css("display","none"); 
		$(".reservation-right").css("display","none");
		$(".bar_5").siblings().removeClass("current").end().addClass("current");
		$(".bar_5").addClass("colorORG").siblings().removeClass("colorORG").end().siblings(".myAcco-li").find("ul li").removeClass("colorORG");
		$(".reservation_right_6").show();
		$(".reservation-path>span").text("我的预约列表");
	};
	if (a==17) {
		$(".byjl_menu_l ul li.myAcco-li").css("height","40px");
        $(".myAcco-li>ul").css("display","none"); 
		$(".reservation-right").css("display","none");
		$(".bar_6").siblings().removeClass("current").end().addClass("current");
		$(".bar_6").addClass("colorORG").siblings().removeClass("colorORG").end().siblings(".myAcco-li").find("ul li").removeClass("colorORG");
	    $(".reservation_right_7").show();
	    $(".reservation-path>span").text("爱车维护保养记录");
	};
})
