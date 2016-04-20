$(function(){
	
	
	/** backToTop **/
	$(document).ready(function(){
		$(window).scroll( function() {               //婊氬姩鏃惰Е鍙�
			var top = $(document).scrollTop();       //鑾峰彇婊氬姩鏉″埌椤堕儴鐨勫瀭鐩撮珮搴�
			if(top > 100){                           //鍒颁竴瀹氶珮搴︽樉绀�
				var height = $(window).height();     //鑾峰緱鍙娴忚鍣ㄧ殑楂樺害
				$("#backToTop2").fadeIn(300).css({
					top: height-80
				});
			}
			if(top < 100){                            //灏忎簬100娑堝け
				$("#backToTop2").fadeOut(200);
			}
		});
		/*鐐瑰嚮鍥炲埌椤堕儴*/
		$('#backToTop2').click(function(){
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		});
	});
		
	
    var $nav_menu = $('.index-nav2');
    var ismousein;
    $(".index-nav").mouseover(function(){
        $nav_menu.show();
    });
    $(window).scroll(function(){
        $nav_menu.hide();
    })
    $('#searchplacehold,#searchcity').click(function(){
        $(this).hide()
        $('#searchcity').show()
        $('#searchcity').focus()
        event.stopPropagation();
    });

	//选择预约时间
    $(".SjdHideBox .slick-slide").click(function(){
        var a=$(this).find('.sjdHd em');
        if (a.is(".sjdHd_scu")) {
            $(".timedq_tip").show().text("已约满，请重新选择！");
        }
        else{
            $(this).addClass("curr");
            $(this).siblings().removeClass("curr");
        }

    })
	
    //选择车型
    $(document).on('click', '#carnameshow', function() {
        $('#car-selector').toggle();
        $('#city-selector').hide();
        $('#carlist').height( $('#carlist').find('li').length > 4 ? '340' : 'auto' );
        $('#carlist').mCustomScrollbar();
    });
	
	$(document).on('click', '#carnameshow1', function() {
        $('#car-selector5').toggle();
        $('#city-selector5').hide();
        $('#carlist1').height( $('#carlist1').find('li').length > 4 ? '340' : 'auto' );
        $('#carlist1').mCustomScrollbar();
    });
    $(document).on('click','#nav_menu ul li',function(){
        var src=$(this).find('img').attr('src');
        if(util.startWith(src,'_selected.png'))
        {
            return;
        }
        else
        {
            $('#nav_menu ul li').each(function (e) {
                var img=$(this).find('img')
                var text=$(this).find('p')
                var msrc=img.attr('src');
                msrc=msrc.replace('_selected','')
                img.attr('src',msrc);
                text.css('color','#fff')

            })
            $(this).find('img').attr('src',src.substring(0,src.indexOf('.png'))+'_selected.png');
            $(this).find('p').css('color','#ff7109')
        }
    })
    $('.maintenance2-lb').on('click', function() {
        var carname = $(this).find('.maintenance2-mc2').html();
		var mainTen_Add = $(this).find('.mainTen_Add').html();
		var mainTen_Tel = $(this).find('.mainTen_Tel').html();
        var src=$(this).find('.mCS_img_loaded').attr('src');		
        $('.maintenance2-mc').html(carname);	
        $('.maintenance2-dz').html(mainTen_Add);
        $('.maintenance2-hm').html(mainTen_Tel);
        $('.maintenance2-img img').attr('src',src);
        $('#car-selector').hide();
        $('#car-selector5').hide();
    });
	
	$('#car-selector ul li').on('click', function() {
        var carname = $(this).find('.carname').html();
        var src=$(this).find('.mCS_img_loaded').attr('src');
        $('#carname').html(carname);
        $('#carlogo').attr('src',src);
        $('#car-selector').hide();
    });
	//baoyang4
	$('#car-selector5 ul li').on('click', function() {
        var carname = $(this).find('.carname').html();
        var src=$(this).find('.mCS_img_loaded').attr('src');
        $('#carname1').html(carname);
        $('#carlogo1').attr('src',src);
        $('#car-selector5').hide();
    });

    //选择城市
    $(document).on('click', '#citynameshow', function(e) {
        $('#city-selector').toggle();
        $('#car-selector').hide();
        $('#car-selector5').hide();
        $('#citylist').mCustomScrollbar();

    });
    //首页
    $(document).mouseup(function(e){
      var _con = $('#cityname');   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        $(".index-dz-dk").hide();
      }
    });

    $('#citylist li').on('click',  function() {
        $('#citylist').find('li').removeClass('index-rmxz');
        var cityname = $(this).addClass('index-rmxz').text();
        $('#cityname').text(cityname);
        $('#city-selector').hide();
    });
    $('#city-selector,#car-selector ,#car-selector5 ,.mCSB_dragger_bar').on('click',  function() {
        if(event.stopPropagation){
            event.stopPropagation();
        }
        if(event.cancelBubble){
            event.cancelBubble();
        }
    });
	
})

//点赞
$(function(){  
    $(".d_z").click(function(){
        var oldValue=parseInt($(".d_z span").text());
        oldValue++ 
        $(".d_z span").text(oldValue)
    });


    //全部品牌切换
    $(".tit_1").click(function(){
        $(".swiBrandHi_1").css("display","none");
        $(".swiBrandHi_2").show();
    });
     $(".tit_2").click(function(){
        $(".swiBrandHi_2").css("display","none");
        $(".swiBrandHi_1").show();
    });
    //3级联动&切换
    $(".areaSwi").click(function(){
        $(".index-dz-dk_1").toggle();
    });

    $(".index-dz-dk .index-qgdz li").click(function(){
        $(".index-dz-dk .index-dz-rmcc ul li").removeClass('index-rmxz');
        $(this).addClass('index-rmxz').siblings().removeClass('index-rmxz');
        $(".brand-cxxz b").text($(this).text());
        $(".index-dz-dk_1").hide();
        $(".brand-csdqxz li").eq($(this).index()).addClass('ys').siblings('li').removeClass('ys');
        $(".brand-csdqxz li").css('color', '#606060');
    });

    $(".index-dz-dk .index-dz-rmcc ul li").click(function(){
        $(".brand-csdqxz ul:first").show();
        $(this).addClass('index-rmxz');
        $(".index-dz-dk .index-qgdz li").removeClass('index-rmxz');
        $(".brand-cxxz b").text($(this).text());
        $(".index-dz-dk_1").hide();
    });

    // $(".brand-csdqxz ul").not(":first").hide();
    // $(".index-dz-dk .index-qgdz li").click(function(){
    //     $(".brand-csdqxz ul").hide();
    //     $(".brand-csdqxz ul").eq($(this).index()).show();
    // });
$(".brand-csdqxz li").click(function(){
    $(this).css('color', '#ff862d').siblings().css('color', '#606060').removeClass('ys');
    $(".brand-cxxz b").text($(this).find('span').text());
});





// 预约维修

    $(".list_2 b").click(function(){       
        if ($(this).find("i").is(":hidden")) {
        $(this).find("i").css("display","inline-block");
        $(this).parents(".list_child").nextAll(".list_child_info").find(".list_5").removeClass('dian_h');
        $(this).parents(".list_child").nextAll(".list_child_info").css("display","block");
        $(this).parent().siblings(".list_1").addClass("list_1_btn");
        $(this).parent(".list_2").next(".list_c").css("background","url(../images/icon_19_1.png) no-repeat center");
        } else {
         $(this).find("i").css("display","none");
         $(this).parents(".list_child").nextAll(".list_child_info").find(".list_5").addClass('dian_h');
         $(this).parents(".list_child").nextAll(".list_child_info").css("display","none");
         $(this).parent(".list_2").next(".list_c").css("background","url(../images/icon_19.png) no-repeat center");
        $(this).parent().siblings(".list_1").removeClass("list_1_btn");
        }
    });
    $(".list_c").click(function(){
        if ($(this).parents(".list_child").nextAll(".list_child_info").is(":hidden")) {
           $(this).css("background","url(../images/icon_19_1.png) no-repeat center");
           $(this).parents(".list_child").nextAll(".list_child_info").css("display","block");
		   $(this).parent().find(".list_1").addClass("list_1_btn");
        } else {
           $(this).css("background","url(../images/icon_19.png) no-repeat center");
           $(this).parents(".list_child").nextAll(".list_child_info").css("display","none");
		   $(this).parent().find(".list_1").removeClass("list_1_btn");
        }
    
    });
    $(".list_5").click(function(){
		
		
        if($(this).is('.dian_h')){
            $(this).removeClass('dian_h');
			
			
        }
        else{
            $(this).addClass('dian_h');
			
        }
	
		
    });
    
	
	$(".list_5").click(function(){
		
		
	if($(this).parent().parent().find(".list_5").hasClass("dian_h")){
			$(this).parent().parent().find("i").css("display","none")
		}else{$(this).parent().parent().find("i").css("display","inline-block")}
		
    });
	
	
	
	$(".list_1").click(function(){
		
		 if ($(this).parents(".list_child").nextAll(".list_child_info").is(":hidden")) {
           
           $(this).parents(".list_child").nextAll(".list_child_info").css("display","block");
		   $(this).parent().find(".list_1").addClass("list_1_btn");
        } else {
           
           $(this).parents(".list_child").nextAll(".list_child_info").css("display","none");
		   $(this).parent().find(".list_1").removeClass("list_1_btn");
        }
		
		
		})
	

   /*选择保养套餐新添加*/
   $(".repair_detail").click(function(){
	$(".recruit_detail").fadeIn();
    $(".maintenance-packages-dk").css("display","none");
   })
    $(".recruit_detail span").click(function(){
    $(".recruit_detail").fadeOut();
    $(".maintenance-packages-dk").fadeIn();
   });

    $(".packages-detail_1,.packages-detail_2,.packages-detail_3").click(function(){
    $(".combnone_w").fadeIn();
    $(".yby_btn_1").fadeIn();
    $(".maintenance-packages-dk").css("display","none");
    $(".combo_right ul li.combo_right_top").css("margin-top","0px");
   });

   $(".packages-detail_1").click(function(){
    var ad=$(this).siblings(".packages-lm_1").find(".packages-lm_1_1").html();
    $(".combo_right>ul").html(ad);
    var h=$(".combo_right").height();
    $(".combo_left").height(h);
    $(".combo_left_auto img").attr("src","../images/combo_top_01.jpg");
    var caption=$(".packages-name").eq(0).text();
    $(".combo_left_auto>h3").text(caption);
   });
    $(".packages-detail_2").click(function(){
     var ad=$(this).siblings(".packages-lm_2").find(".packages-lm_2_1").html();
      $(".combo_right>ul").html(ad);  
      var h=$(".combo_right").height();
      $(".combo_left").height(h);
      $(".combo_left_auto img").attr("src","../images/combo_top_1_2.jpg");
      var caption=$(".packages-name").eq(1).text();
      $(".combo_left_auto>h3").text(caption);
   });
    $(".packages-detail_3").click(function(){
      var ad=$(this).siblings(".packages-lm_3").find(".packages-lm_3_1").html();
      $(".combo_right>ul").html(ad);   
      var h=$(".combo_right").height();
      $(".combo_left").height(h);
      $(".combo_left_auto img").attr("src","../images/combo_top_1_3.jpg");
      var caption=$(".packages-name").eq(2).text();
      $(".combo_left_auto>h3").text(caption);
   });

   $(".yby_btn_l").click(function(){
     $(".combnone_w").css("display","none");
    $(".yby_btn_1").css("display","none");

     $(".maintenance-packages-dk").fadeIn();
   })
   $(".yby_btn_r").click(function(){
     $(".combnone_w").css("display","none");
    $(".yby_btn_1").css("display","none");
   })
   
   

/*首页已有车型新添加*/
  $(".car_logo_chan").click(function(){
    if ($(this).hasClass("car_icon")) {
        $(this).removeClass("car_icon");
        $(".car_logo_info").fadeIn();
        $(".car_logo_chan").css("background","url(images/car_logo_chanb.png) no-repeat 278px center");
    } else {
        $(this).addClass("car_icon");
        $(".car_logo_info").fadeOut();
        $(".car_logo_chan").css("background","url(images/car_logo_chant.png) no-repeat 275px center");
    }
    
   })
   $(document).mouseup(function(e){
      var _con = $('.index-dl-cx .car_logo_chan');   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        $(".car_logo_info").fadeOut();
         $(".car_logo_chan").css("background","url(images/car_logo_chant.png) no-repeat 275px center");
         $('.car_logo_chan').addClass("car_icon");
      }
    });    
   $(".car_logo_info span").click(function(){
    var a= $(this).html();
    $(".car_logo_chan").html(a);
     $(".car_logo_info").fadeOut();
    $(".car_logo_chan").css("background","url(images/car_logo_chant.png) no-repeat 275px center");
    $(".index-dl-cx .car_logo_chan img").css("margin","-0px 10px 0 2px");

    $(".car_icon_bt").addClass("car_icon_bt1");
    $(".index-dl-cx .car_logo_chan .car_icon_bt1 img").css("margin-top","3px");
    $(".car_logo_info span a").removeClass("car_icon_bt1");
    $('.car_logo_chan').addClass("car_icon");
    
   });


})
