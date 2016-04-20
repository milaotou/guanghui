$(function() {
	
	

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