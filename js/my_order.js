$(function() {

	//标签选择
	$('.label_select').each(function() {
		var $wrap = $(this);
		$wrap.on('click', $wrap.data('select-expr'), function() {
			if ($wrap.data('select-type') == 'checkbox') {
				//多选
				$(this).toggleClass($wrap.data('select-class'));
			}
			else {
				//单选
				$(this).addClass($wrap.data('select-class')).siblings().removeClass($wrap.data('select-class'));
			}
			$('#custom_text').val( $(this).text() );
		});
	});

	//默认文本
	$(':text, textarea').setDefault();
	
	//保养记录展开
	$(document).on('click', '.byjl_menu_r_con02 .fr a', function() {
		var $dl = $(this).closest('dl').toggleClass('byjl_menu_r_con02_dl byjl_menu_r_con02_dl02');
		$dl.parent().next('.recording-jl').slideToggle();
		return false;
	});
	
	/*状态*/
	$(".order-status .gray").click(function(){
		$(".order-status .gray").removeClass("gray");
		})
		
		
	//取消 退款弹出

	// $(".cancel").click(function(){
	// 	$(".tanPupBox").fadeIn();
	// 	$(".ups-bj").fadeIn();
	// 	alert($(this).index());				
	// 	})

	// $(".cancel_1").click(function(){
	// 	$(".tanPupBox_1").fadeIn();
	// 	$(".ups-bj_1").fadeIn();
	// 	var a=$('.cancel_1').index($(this));//获取点击当前的索引值
	// 	$(".determine_1").data('key', a);//吧获取的索引值付给弹窗的确认按钮		
	// })
	// $(".determine_1").click(function(){
	// 	var b=$(this).data('key');
	// 	$('.recording-right-dk_1').eq(b).animate({height:"0px"});
	// 	$('.cancel_1').eq(b).animate({height:"0px"});
	// 	$('.orgBtn_1').eq(b).animate({height:"0px"});
	// 	$('.recording-right-dk_1').eq(b).css({'border':'0','margin-top':'0'});
	// 	$('.buttonFooter_1').eq(b).css({'border':'0','margin-top':'0','padding':'0'});
	// });
	// $(".shut-down_1 ,.ups-bj_1 ,.determine_1").click(function(){		
	// 	$(".tanPupBox_1").fadeOut();
	// 	$(".ups-bj_1").fadeOut();				
	// })
	
	//修改密码
	$('#demo_21').on('valid.form', function(e, form){
	$(".tanPupBox_1_1").fadeIn();
	$(".ups-bj_1_1").fadeIn();
	});

	$(".shut-down,.ups-bj").click(function(){
		$(".tanPupBox_1_1").fadeOut();
		$(".ups-bj_1_1").fadeOut();
	})
	//我的爱车删除
	$(".delete_car_line b").click(function(){
        $(".delete_bg").fadeOut();
        $(".delete_car").fadeOut();
	});
	$(".recording-tjac li .sc").click(function(){
		$(".delete_car").fadeIn();
		$(".delete_bg").fadeIn();
		var a=$('.recording-tjac li .sc').index($(this));//获取点击当前的索引值
		$(".delete_car span").data('key', a);//获取的索引值付给弹窗的确认按钮		
	});
	$(".delete_car span").click(function(){
		var b=$(this).data('key');
		$('.recording-tjac li .sc').eq(b).animate({height:"0px"});
		$('.recording-tjac li').eq(b).slideUp(500);
	});
	$(".delete_car span").click(function(){		
		$(".delete_car").fadeOut();
		$(".delete_bg").fadeOut();				
	});



	$(".recording-tjac .bj").click(function(){window.location.href="02.2my_car.html"})


	
});

//我的退款取消
$(function(){
	$(".cancel_2").click(function(){
		$(".tanPupBox_1_2").fadeIn();
		$(".ups-bj_1_2").fadeIn();
		var a=$('.cancel_2').index($(this));//获取点击当前的索引值
		$(".determine_2").data('key', a);//吧获取的索引值付给弹窗的确认按钮		
		return false;
	})
	$(".determine_2").click(function(){
		var b=$(this).data('key');
		$('.recording_delect_1,.recording_quxiao').eq(b).animate({height:"0px"});
		$('.cancel_2').eq(b).animate({height:"0px"});
		$('.recording_delect_1,.recording_quxiao').eq(b).animate({height:"0px"});
		$('.recording_delect_1,.recording_quxiao').eq(b).css({'border':'0','margin-top':'0'});
		$('.marginTop15_1_2,.buttonFooter_2').eq(b).css({'border':'0','margin-top':'0','padding':'0'});
		
	});
	$(".shut-down_2 ,.ups-bj_2 ,.determine_2").click(function(){		
		$(".tanPupBox_1_2").fadeOut();
		$(".ups-bj_1_2").fadeOut();				
	})
})

//验证vin码
   function inpStytips(){ 
       if($(".inpSty_vin").val().length != 17){ 
            $(".inpSty_tips").fadeIn();
            return false; 
       } else{
       	   $(".inpSty_tips").fadeOut();
       	   $(".orgBtn_2_2").attr('href','06.2carMaintenanceRecords.html'); 
            return false; 
       }
	}
$(function(){
	$(".orgBtn_2_2").click(function(){
		if($(".inpSty_vin").val().length != 17){ 
            $(".inpSty_tips").fadeIn();
            return false; 
       } else{
       	   $(".inpSty_tips").fadeOut();
       	   $(".orgBtn_2_2").attr('href','06.2carMaintenanceRecords.html'); 
       }
	})
})


//验证姓
function tit_info_1(){

       if($(".tit_1").val()==""){ 
            $(".tit_info_1").fadeIn();
            return false; 
       }else{
            $(".tit_info_1").fadeOut();	
       }	   
}

//验证名
function tit_info_2(){

       if($(".tit_2").val()==""){ 
            $(".tit_info_2").fadeIn();
            return false; 
       }else{
            $(".tit_info_2").fadeOut();	
       }	   
}
$(function(){
	$(".tit_info_c").click(function(){
          if($(".tit_1").val()==""){ 
            $(".tit_info_1").fadeIn();
            return false; 
           }
           if($(".tit_2").val()==""){ 
            $(".tit_info_2").fadeIn();
            return false; 
           }
	})
})
//验证微博
function tit_info_b(){
       if($(".tit_b").val()==""){ 
            $(".tit_info_b").fadeIn();
            return false; 
       }else{
            $(".tit_info_b").fadeOut();	
       }	   
}

//验证邮箱
function tit_info_y(){
			 // $("#11").click(function(){
				//  $(".registered-sjh02 .p2").fadeOut();
				// })

       // if($("#mobi2").val()==""){ 
       //      $(".registered-sjh02 .p2").fadeIn();
       //      return false; 
       // } 
	  

       // if(!$("#mobi2").val().match(/^1[3|4|5|8][0-9]\d{4,8}$/)){ 
       //      $(".registered-sjh02 .p2").fadeIn();
       //      return false; 
       // } 
        if (!$(".tit_y").val().match( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)) { 
        $(".tit_info_y").fadeIn();
        return false; 
        }else{
        $(".tit_info_y").fadeOut();	
        }
	   
}
//验证微信
function tit_info_w(){
        if (!$(".tit_w").val().match(/^[a-zA-Z\d_]{5,}$/)) { 
        $(".tit_info_w").fadeIn();
        }else{
        $(".tit_info_w").fadeOut();	
        }	   
}

//验证订单状态
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
	if (a==1) {
		$('.gray').text("待完成");
	};
	if (a==2) {
		$('.gray').text("已完成");
	};
	if (a==3) {
		$('.gray').text("已取消");
	};

    //我的订单申请退款服务项目文字
	if (a==5) {
		$('.order-packages-mc em').text("经济适用套餐");
	};
	if (a==6) {
		$('.order-packages-mc em').text("四轮定位、更换雨刷等");
	};

})


//我的订单申请退款提交按钮弹框
$(function(){
	 $(".order_tj").click(function(){
	  	if ($(".order-evaluation li").is(".order-selected")) {
	  		  $(".tanPupBox_2").fadeIn();
		      $(".ups-bj_2").fadeIn();
	  		}else {	
		      $(".order_score_r").fadeIn();	
	        }
	     $(".determine_3").click(function(){
              $(".tanPupBox_2").fadeOut();
		      $(".ups-bj_2").fadeOut();      
	     })   
	 })	  
	$(".label_s").click(function(){
		$(".status_jin").attr("disabled",true);
		 if ($(".order-selected").css("display","block")) {
		 $(".order_score_r").fadeOut();
		}
	})	
	$(".label_a").click(function(){
		$(".status_jin").removeAttr("disabled");
	  	$(".order_score_r").fadeIn().text("请填写其他原因");
	})
	$(".status_jin").click(function(){
		 $(".order_score_r").fadeOut();
	})

})

// 修改个人中心 更多服务 提示验证
function na(){
	var nam= $(".nam").parent().next(".name_tip");
	 if($(".nam").val()==""){
      nam.fadeIn();
        return false; 
	  }else{
	  nam.fadeOut();	
	  }
}
function na1(){
	var nam= $(".nam_1").parent().next(".name_tip");
	 if($(".nam_1").val()==""){
      nam.fadeIn();
        return false; 
	  }else{
	  nam.fadeOut();	
	  }
}
function na2(){
	var nam= $(".nam_2").parent().next(".name_tip");
	 if($(".nam_2").val()==""){
      nam.fadeIn();
        return false; 
	  }else{
	  nam.fadeOut();	
	  }
}
function na3(){
	var nam= $(".nam_3").parent().next(".name_tip");
	 if($(".nam_3").val()==""){
      nam.fadeIn();
        return false; 
	  }else{
	  nam.fadeOut();	
	  }
}
function na4(){
	var nam= $(".nam_4").parent().next(".name_tip");
	 if($(".nam_4").val()==""){
      nam.fadeIn();
        return false; 
	  }else{
	  nam.fadeOut();	
	  }
}
function na5(){
	var nam= $(".nam_5").parent().next(".name_tip");
	 if($(".nam_5").val()==""){
      nam.fadeIn();
        return false; 
	  }else{
	  nam.fadeOut();	
	  }
}

var re=/[\u4E00-\u9FA5]([0-9A-Z]{6})|([0-9A-Z]{5}[\u4E00-\u9FA5]{1})$/
// var re= /[\u4e00-\u9fa5][A-Z]([0-9]{5}|(?![A-Z]{5}))/;
function inpSty_2(){
	var ta=$(".inpSty_2");
	var haoa= $(".frr_2")
	if(!ta.val().match(re||ta.val().length <5))
	{
	    haoa.fadeIn();
	}else{
		haoa.fadeOut();
	}
}
		
function hao(){
	var t2=$(".hao");
	var hao= $(".hao").parent().next(".plate_tip");
	if(!t2.val().match(re||t2.val().length <5))
	{
	    hao.fadeIn();
	}else{
		hao.fadeOut();
	}
}
function hao1(){
	var t2=$(".hao_1");
	var hao= $(".hao_1").parent().next(".plate_tip");
	if(!t2.val().match(re||t2.val().length <5))
	{
	    hao.fadeIn();
	}else{
		hao.fadeOut();
	}
}
function hao2(){
	var t2=$(".hao_2");
	var hao= $(".hao_2").parent().next(".plate_tip");
	if(!t2.val().match(re||t2.val().length <5))
	{
	    hao.fadeIn();
	}else{
		hao.fadeOut();
	}
}
function hao3(){
	var t2=$(".hao_3");
	var hao= $(".hao_3").parent().next(".plate_tip");
	if(!t2.val().match(re||t2.val().length <5))
	{
	    hao.fadeIn();
	}else{
		hao.fadeOut();
	}
}
function hao4(){
	var t2=$(".hao_4");
	var hao= $(".hao_4").parent().next(".plate_tip");
	if(!t2.val().match(re||t2.val().length <5))
	{
	    hao.fadeIn();
	}else{
		hao.fadeOut();
	}
}
function hao5(){
	var t2=$(".hao_5");
	var hao= $(".hao_5").parent().next(".plate_tip");
	if(!t2.val().match(re||t2.val().length <5))
	{
	    hao.fadeIn();
	}else{
		hao.fadeOut();
	}
}
 var aw= /^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/;
// var aw=/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/;
function tell(){
	var t1=$(".tell");
	var tell= $(".tell").parent().next(".tell_tip");
    if(!t1.val().match(aw))
    {
       tell.fadeIn();
    }else{
       tell.fadeOut();
    }
}
function tell1(){
	var t1=$(".tell_1");
	var tell= $(".tell_1").parent().next(".tell_tip");
    if(!t1.val().match(aw))
    {
       tell.fadeIn();
    }else{
       tell.fadeOut();
    }
}
function tell2(){
	var t1=$(".tell_2");
	var tell= $(".tell_2").parent().next(".tell_tip");
    if(!t1.val().match(aw))
    {
       tell.fadeIn();
    }else{
       tell.fadeOut();
    }
}
function tell3(){
	var t1=$(".tell_3");
	var tell= $(".tell_3").parent().next(".tell_tip");
    if(!t1.val().match(aw))
    {
       tell.fadeIn();
    }else{
       tell.fadeOut();
    }
}
function tell4(){
	var t1=$(".tell_4");
	var tell= $(".tell_4").parent().next(".tell_tip");
    if(!t1.val().match(aw))
    {
       tell.fadeIn();
    }else{
       tell.fadeOut();
    }
}
function tell5(){
	var t1=$(".tell_5");
	var tell= $(".tell_5").parent().next(".tell_tip");
    if(!t1.val().match(aw))
    {
       tell.fadeIn();
    }else{
       tell.fadeOut();
    }
}

$(function(){
	$(".orgBtn_tj").click(function(){
		if($(".fr_text").text().length = 0){
			alert($(".fr_text").text())
              $(".addres_tip").fadeIn();
              return false;
		 }
		if($(".nam").val()==""){
              $(".name_tip").fadeIn();
              return false;
		 }
		if($(".tell").val()==""){
             $(".tell_tip").fadeIn();
             return false; 
		 }
		 if($(".hao").val()==""){
             $(".plate_tip").fadeIn();
             return false;
		 }
		 
		 	$(".name_tip,.tell_tip,.plate_tip").fadeOut();
            $(".orgBtn_tj").attr('href','fuwu02.html');
          
      
	})
})

// 我的爱车车辆码提示信息
function inpSty_3(){
	if ($(".inpSty_3").val().length!= 17) 
		{
		$(".frr_3").fadeIn();
		return false;
	    }
}
// 个人中心我的预约列表添加删除
$(function(){
	$(".cancel_q").click(function(){
		$(".tanPupBox_2").fadeIn();
		$(".ups-bj_2").fadeIn();
		var a=$('.cancel_q').index($(this));//获取点击当前的索引值
		$(".determine").data('key', a);//吧获取的索引值付给弹窗的确认按钮
		return false;		
	})
	$(".determine").click(function(){
		var b=$(this).data('key');
		$('.recording_delect_2').eq(b).animate({height:"0px"});
		$(".cancel_q").eq(b).animate({height:"0px"});
		$('.recording_delect_2').eq(b).css({'border':'0','margin-top':'0'});
		$('.marginTop15_2').eq(b).css({'margin-top':'0'});
		$('.marginTop15_2').eq(b).css({'border':'0','margin-top':'0','padding':'0'});
		return false;
	});
	$(".determine").click(function(){		
		$(".tanPupBox_2").fadeOut();
		$(".ups-bj_2").fadeOut();		
		return false;		
	});

})


// 个人中心我的账户修改
$(function(){
	$(".byjl_menu_l>ul>li>ul li").click(function(event){
		$(this).siblings().removeClass("colorORG").end().addClass("colorORG");
		$(this).parents(".myAcco-li").siblings().removeClass("colorORG");
		$(".reservation-right").css("display","none");
		event.stopPropagation();
	});
	$(".byjl_menu_l>ul>li").click(function(event){
		$(this).siblings().removeClass("colorORG").end().addClass("colorORG");
		$(this).siblings().removeClass("current").end().addClass("current");
		$(this).siblings(".myAcco-li").find("ul li").removeClass("colorORG");
		$(".reservation-right").css("display","none");
		event.stopPropagation();
	});
	$(".bar_2,.bar_3,.bar_4,.bar_5,.bar_6").click(function(){    
        $(".byjl_menu_l ul li.myAcco-li").css("height","40px");
        $(".myAcco-li>ul").css("display","none"); 
	});
	$(".bar_1").click(function(){    
       $(".reservation_right_2").fadeIn();
       $(".byjl_menu_l ul li.myAcco-li").css("height","auto");
	});
	$(".bar_2").click(function(){   
       $(".reservation_right_3").fadeIn();
       $(".reservation-path>span").text("我的爱车");
	});
	$(".bar_3").click(function(){	    
       $(".reservation_right_4").fadeIn();
       $(".reservation-path>span").text("我的订单");
	});
	$(".bar_4").click(function(){ 
       $(".reservation_right_5").fadeIn();
       $(".reservation-path>span").text("我的退款");
	});
	$(".bar_5").click(function(){		    
       $(".reservation_right_6").fadeIn();
       $(".reservation-path>span").text("我的预约列表");
	});
	$(".bar_6").click(function(){	    
       $(".reservation_right_7").fadeIn();
       $(".reservation-path>span").text("爱车维护保养记录");
	});
	$(".bar").click(function(){
	   $(".byjl_menu_l ul li.myAcco-li").css("height","auto");
	   $(".myAcco-li>ul").fadeIn(); 
       $(".reservation_right_1").fadeIn();
	});
})
