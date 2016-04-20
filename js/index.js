$(function() {
	
	//kv滚动
	(function() {
		var $kv_banner = $('#kv_banner');
		var $nav_menu = $('#nav_menu');
		var ismousein;

		$kv_banner.cycle({
			fx: 'scrollHorz',
			slideResize: 0,
			speed: 500,
			timeout: 5000,
			prev: '#kv_prev',
			next: '#kv_next',
			pager: '#kv_nav',
			pagerAnchorBuilder: function(idx, slide) {
				return '<li></li>';
			},
			activePagerClass: 'curr',
			before: function() {
				//!ismousein && $nav_menu.hide();
			},
			after: function() {
				//$nav_menu.show();
			}
		}).mousemove(function() {
			//$nav_menu.show();
		}).css('width', 'auto');

		$nav_menu.show().hover(function() {
			ismousein = true;
		}, function() {
			ismousein = false;
		})
		// var opts = $kv_banner.css('width', 'auto').data('cycle.opts');
		// $(window).resize(function() {
		// 	var w = $kv_banner.width();
		// 	opts.animOut.left = -w;
		// 	opts.cssBefore.left = w;
		// });

	})();

	//门店展示
	$('#mdzs_cycle').cycle({
		fx: 'scrollHorz',
		speed: 500,
		timeout: 0,
		prev: '#mdzs_prev',
		next: '#mdzs_next'
	});

	//品牌展示
	$('#pp_cycle').cycle({
		fx: 'scrollHorz',
		speed: 500,
		timeout: 0,
		// prev: '#pp_prev',
		// next: '#pp_next'
	});

	//选择购车日期
	$('#date_slt').click(function() {
		var $rq = $('#rq').toggle();
		if ($rq.css('display') == 'none') {
			return false;
		}
		var $year = $('#year_cycle');
		var $month = $('#month_cycle');
		if (!$rq.data('init')) {
			$rq.data('init', true);
			$('#year_prev').click(function() {
				$year.data('cycle.opts').fx = 'scrollDown';
			})
			$('#year_next').click(function() {
				$year.data('cycle.opts').fx = 'scrollUp';
			})
			$year.cycle({
				fx: 'scrollVert',
				slideResize: 0,
				speed: 500,
				timeout: 0,
				prev: '#year_prev',
				next: '#year_next',
				after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
					$('#year_prev').css('visibility', options.currSlide < 1 ? 'hidden' : 'visible' );
					$('#year_next').css('visibility', options.currSlide+1 >= options.slideCount ? 'hidden' : 'visible' );
				}
			});
			$('#month_prev').click(function() {
				$month.data('cycle.opts').fx = 'scrollDown';
			})
			$('#month_next').click(function() {
				$month.data('cycle.opts').fx = 'scrollUp';
			})
			$month.cycle({
				fx: 'scrollUp',
				slideResize: 0,
				speed: 500,
				timeout: 0,
				prev: '#month_prev',
				next: '#month_next',
				after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
					$('#month_prev').css('visibility', options.currSlide < 1 ? 'hidden' : 'visible' );
					$('#month_next').css('visibility', options.currSlide+1 >= options.slideCount ? 'hidden' : 'visible' );
				}
			});
		}
		// var date = $('#date_text').text().split('/');
		// var year = date[0];
		// var month = date[1];

		var index = $year.find('li.Choice').parent().data('index');
		index !== undefined && $year.cycle(index);

		var index = $month.find('li.Choice').parent().data('index');
		index !== undefined && $month.cycle(index);

		return false;
	});

	$('#rq').on('click', '#year_cycle li', function() {
		$('#year_cycle').find('li').removeClass('Choice');
		$(this).addClass('Choice');
	}).on('click', '#month_cycle li', function() {
		$('#month_cycle').find('li').removeClass('Choice');
		$(this).addClass('Choice');
	}).on('click', '.rq-cycle li', function() {
		var year = $('#year_cycle').find('.Choice').attr('data');
		var month = $('#month_cycle').find('.Choice').attr('data');
		$('#date_text').text( year + '/' + month );
		$('#form').find('input[name=car_buy_date]').val( year + '/' + month );
	}).click(function() {
		return false;
	})

	$(document).on('click', function() {
		$('#rq').hide();
	});

	$(".hea_nav li").hover(function() {
		$(this).css('border-top', '3px #ff6c00 solid');
		$(this).find('a').addClass('nav_mo');
	}, function() {
		$(this).css('border-top', '3px #1e1e1e solid');
		$(this).find('a').removeClass('nav_mo');
	});
	$(".hea_nav ul li:last").css('margin-right', '0');

});

//提交评价
	$('#form_1').length && (function() {
		var $fon = $('#form_1');
		$fon.find('.labeltext').labeltext();
		$('#afon').click(function() {
			alert("aaa");
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
			
			if ($(".vin").val()=="") 
				{
					$(".maintenance4-lc .p4").fadeIn();
				return false;
			}
			
			$fon.submit();
			location.href = "03.1my_order.html";
			return false;

		});
	})();

function hao(){
            var re= /[\u4E00-\u9FA5]([0-9A-Z]{6})|([0-9A-Z]{5}[\u4E00-\u9FA5]{1})$/;
			if(!$(".hao").val().match(re || $(".hao").val().length <5))
			{
			       	$(".maintenance4-lc .p3").fadeIn();
			       	$(".maintenance4-lc .p3").text("请输入正确的车牌号");
			       return false;
			}

}
