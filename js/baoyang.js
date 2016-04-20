$(function(){
	
	

	var ins=1;
	$(".xyb").click(function(){

    $(".maintenance-packages li").removeClass("curr");
	$(".clearfix_h").css("display","none");
	$(".clearfix_h").eq(ins).fadeIn();
	$(".maintenance-packages li").eq(ins).addClass("curr");
	ins++;	
	
	})
	
	
	
	
	$(".quren").click(function(){
		$(".clearfix_h").css("display","none")
	    $(".clearfix_h").eq(4).fadeIn();
		$(".maintenance-packages li").removeClass("curr");
		})
		
	$(".syb").click(function(){
		ins--;
		
	$(".maintenance-packages li").removeClass("curr");
	$(".clearfix_h").css("display","none")
	$(".clearfix_h").eq(ins-1).fadeIn();
	$(".maintenance-packages li").eq(ins-1).addClass("curr");
		
		})
		
		
	
	})

function licheng(){
		var mileage = $(".licheng").val();
		if (!/^[0-9]+$/.test(mileage)) {
			$(".maintenance4-lc .p1").fadeIn();
			return false;
		}
		return false;
	}
	function name_a(){
		if ($(".name_a").val()=="") {
			$(".maintenance4-lc .p2").fadeIn();
			return false;
		}
		return false;
	}
	function hao(){
		if ($(".hao").val()=="") {
			$(".maintenance4-lc .p3").fadeIn();
			return false;
		}
		return false;
	}
	function vin(){
		if ($(".vin").val().length!= 17) 
			{
			$(".maintenance4-lc .p4").fadeIn();
			return false;
		    }
	}



$(function() {

	//选择保养套餐
	$('.lione').on('click',function() {
		$(this).siblings().removeClass('variety');
		var type = $(this).addClass('variety');
		//$('.packages-dk').hide().filter('[data-type=' + type + ']').show();
	});
	$('#packages_slt li').mouseover(function() {
		var type = $(this).attr('data-type');
		$('.packages-dk').hide().filter('[data-type=' + type + ']').show();
	});
	$('#packages_slt').mouseout(function() {
		$('.packages-dk').hide()
	});
	
	$('.o1').mouseout(function() {
		
		$('.packages-dk').hide()
		
	});

	$('.o2').mouseout(function() {
		$('.packages-dk').hide()
		
	});
	
	$('.o3').mouseout(function() {
		$('.packages-dk').hide()
		
	});
	//门店选择
	$('#store_slt').length && (function() {
		$('#store_slt').mCustomScrollbar();
	})();

	//到店时间
	$('#time_slt').on('click', 'li', function() {
		var $li = $(this);
		if ($li.hasClass('yueman')) {
			return;
		}
		$li.addClass('xuanz').siblings().removeClass('xuanz');
	});

	//支付方式
	$('#pay_slt').on('click', 'li', function() {
		$(this).addClass('options').siblings().removeClass('options');
	});
	$(document).on('click','.maintenance2-lb',function(){
		$('.maintenance2-lb').removeClass('maintenance2-bjys')
		$(this).addClass("maintenance2-bjys")
	});
	//添加车型
	$(document).on('click','#addcar,.addcar',function(){
		AddCar.show(function(data) {
			window.JSON && alert("addcar.show的回调得到数据:"+JSON.stringify(data));
			console.log(data);
			
		});
	})
	//选择我的车
	$(document).on('click','#selectmycar',function(){

	})


	//预约保养
	$('#prebook').length && (function() {
		var $form = $('#prebook');
		$form.find('.labeltext').labeltext();
		$('#apply').click(function() {
			var mileage = $($form[0]['car_mileage']).val();
			var date = $($form[0]['car_buy_date']).val();
			if (!/^[0-9]+$/.test(mileage)) {
				$(".maintenance4-lc .p1").fadeIn();
				return false;
			}
			//if (/^[0-9]{4}\/[0-9]{1,2}$/.test(date)) {
				//alert('购车时间填写不正确!\n填写格式：年/月');
				//return false;
			//}
				if ($(".name_a").val()=="") 
				{
					$(".maintenance4-lc .p2").fadeIn();
				return false;
			}
			if ($(".hao").val()=="") 
				{
					$(".maintenance4-lc .p3").fadeIn();
				return false;
			}
			
			$form.submit();
			location.href = "baoyang01.html";
			return false;

		});
	})();
});

 $(document).mouseup(function(e){
      var _con = $('.maintenance4-cx s'); 
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        $(".index-top-dk").hide();
      }
    });


// 预约保养预约时间验证


$(function(){
	$(".maintenance_next_yz").click(function(){
		if ($(".slick-slide").hasClass("curr")) {		
			$(".timedq_tip").fadeOut();
			$(this).addClass("xyb");
			$(".maintenance-packages li").removeClass("curr");
	        $(".clearfix_h").css("display","none")
			$(".clearfix_h").eq(3).fadeIn();
	        $(".maintenance-packages li").eq(3).addClass("curr");
		}else{
			$(".timedq_tip").fadeIn();
		}
	});
	$(".maintenance2-sjd li").click(function(){
		var a=$(this).find('.sjdHd em');
        if (a.is(".sjdHd_scu")) {
        }
        else{
           $(".timedq_tip").fadeOut();
        }
			
	});

  
	
 })
$('.packages-dk .packages-lm ul li').off();