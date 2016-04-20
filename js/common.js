
//文本框控件
(function($) {
	//标签文本
	$.fn.labeltext = function(options) {
		this.find('input').unbind('focus.lt blur.lt check.lt').bind('focus.lt', function() {
			$(this).next('label').hide();
		}).bind('blur.lt', function() {
			$(this).trigger('check.lt');
		}).bind('check.lt', function() {
			$(this).next('label').toggle( !$(this).val() );
		}).trigger('check.lt');
		this.find('label').click(function() {
			$(this).prev('input').trigger('focus.lt');
		});
		return this;
	};

	//文本默认值
	$.fn.setDefault = function(defaultValue) {
		return this.each(function() {
			$(this).data({
				defaultValue: defaultValue || $(this).attr('default') || $(this).attr('title')
			}).focus(function(){
				$(this).clearDefault();
			}).blur(function(){
				$(this).checkDefault();
			}).checkDefault();
		});
	};
	//检查默认值
	$.fn.checkDefault = function() {
		return this.each(function() {
			var $this = $(this);
			if (!$this.val() || $this.val() == $this.data('defaultValue')) {
				$this.val($this.data('defaultValue'));
			}
		});
	};
	//清除默认值
	$.fn.clearDefault = function(){
		return this.each(function(){
			if (this.value == $(this).data('defaultValue')){
				this.value = '';
			}
		});
	}
	//判断默认值
	$.fn.isDefault = function(){
		return (this.val() == this.data('defaultValue'));
	};

})(jQuery);

//添加车型
var AddCar = {
	popup: null,
	url: {
		brand: "ajax/car_brand.html",
		series: "ajax/car_series.html",
		volume: "ajax/car_volume.html",
		model: "ajax/car_model.html"
	},
	data: {},
	show: function(onSelect) {
		if (!this.popup) {
			this.getPopup();
			this.init();
		}

		this.popup.show();
		this.switchNav('brand');
		$('#brand_hot').trigger('click');
		this.data.onSelect = onSelect;
	},

	getPopup: function() {
		$('body').append(
			'<div id="ui_car_popup" style="display:none;">' +
			'	<div class="ups-bj"></div>' +
			'	<div class="window">' +
			'		<div class="window-ac"><em>我的爱车</em><span><a href="javascript:void(0);" onclick="$(\'#ui_car_popup\').hide();" class="guanbi"></a></span></div>' +
			'		<div class="window-xz" id="ui_car_nav">' +
			'			<ul>' +
			'				<li data-type="brand">汽车品牌</li>' +
			'				<li data-type="series">车系</li>' +
			'				<li data-type="volume">排量</li>' +
			'				<li data-type="model">车型</li>' +
			'			</ul>' +
			'		</div>' +
			'		<div class="window-zm"><em>品牌首字母选择：</em><span class="item" id="brand_hot">热门</span>' +
			'			<ul id="ui_car_index"></ul>' +
			'		</div>' +
			'		<div class="window-yx" style="display:none;">' +
			'			<em>已选车型:</em>' +
			'			<div id="ui_car_slt">' +
			'				<div class="window-yxz" data-type="brand" data-id="" data-name="" style="display:none;"><img src="images/maintenance6_07.jpg"><span></span><a href="#" class="del"><img src="images/maintenance6_09.jpg"></a></div>' +
			'				<div class="window-yxz" data-type="series" data-id="" data-name="" style="display:none;"><img src="images/maintenance6_07.jpg"><span></span><a href="#" class="del"><img src="images/maintenance6_09.jpg"></a></div>' +
			'				<div class="window-yxz" data-type="volume" data-id="" data-name="" style="display:none;"><img src="images/maintenance6_07.jpg"><span></span><a href="#" class="del"><img src="images/maintenance6_09.jpg"></a></div>' +
			'				<div class="window-yxz" data-type="model" data-id="" data-name="" style="display:none;"><img src="images/maintenance6_07.jpg"><span></span><a href="#" class="del"><img src="images/maintenance6_09.jpg"></a></div>' +
			'			</div>' +
			'		</div>' +
			'		<div class="window-qc" id="ui_car_brand"><center>正在加载...</center></div>' +
			'		<div class="window-cxxz" id="ui_car_series" style="display:none;"><center>正在加载...</center></div>' +
			'		<div class="window-cxxz01" id="ui_car_volume" style="display:none;"><center>正在加载...</center></div>' +
			'		<div class="window-cxxz01" id="ui_car_model" style="display:none;"><center>正在加载...</center></div>' +
			'		<div class="window-qby" id="ui_car_apply" style="display:none;">请填写真实有效信息，以保证保养服务质量<br><a href="baoyang04.html"><em>确认</em></a></div>' +
			'	</div>' +
			'</div>'
		);
		this.popup = $('#ui_car_popup');
	},

	init: function() {

		this.get('brand', '', function(data) {
			var index = [];
			var str = '';
			$.each(data, function(i, n) {
				index.push(n.index);
				str += '<a href="#" class="item" data-id="' + n.id + '" data-name="' + n.name + '" data-index="' + n.index + '" data-hot="' + n.hot + '"><span class="car_l_w"><img src="' + n.img + '" /></span></a>';
			});
			$('#ui_car_brand').html(str);
			index.sort();
			var unique = [];
			var hash = {};
			$.each(index, function(i, n) {
				if (!hash[n]) {
					hash[n] = true;
					unique.push(n);
				}
			});
			str = '';
			$.each(unique, function(i, n) {
				str += '<li class="item" data-index="' + n + '">' + n + '</li>';

			});
			$('#ui_car_index').html(str);

			this.buildEvents();
		});
	},

	buildEvents: function() {
		
		
		var that = this;

		//字母过滤
		this.popup.on('click', '.window-zm .item', function() {
			var index = $(this).attr('data-index');
			$('#ui_car_brand').find('.item').hide().filter( index ? '[data-index='+index+']' : '[data-hot=1]' ).show();
			return false;
		});
		$('#brand_hot').trigger('click');

		$('#ui_car_brand').mCustomScrollbar();

		//品牌选择
		$('#ui_car_brand').on('click', '.item', function() {
			$('#ui_car_brand').trigger('select', [{id: $(this).attr('data-id'), name: $(this).attr('data-name')}]);
			return false;
		}).bind('select', function(event, data) {
			$('#ui_car_slt').empty();
			that.switchNav('series');
			that.setSltNav('brand', data.id, data.name);
			$('#ui_car_series').mCustomScrollbar('destroy').html('<center>正在加载...</center>');
			that.get('series', {brand:data.id}, function(data) {
				var str = '';
				var currId = $('#ui_car_slt').find('[data-type=series]').attr('data-id');
				$.each(data, function(i, n) {
					str += '<span>' + n.name + '</span>';
					str += '<ul>';
					$.each(n.series, function(i, n) {
						str += '<li class="item' + (n.id == currId ? ' yxcx' : '') + '" data-id="' + n.id + '" data-name="' + n.name + '">' + n.name + '</li>';
					});
					str += '</ul>';
				});
				$('#ui_car_series').html(str).mCustomScrollbar();
			});
		});

		//车系选择
		
		$('#ui_car_series').on('click', '.item', function() {
			$('#ui_car_series').trigger('select', [{id: $(this).attr('data-id'), name: $(this).attr('data-name')}]);
			return false;
		}).bind('select', function(event, data) {
			that.switchNav('volume');
			that.setSltNav('series', data.id, data.name);
			$('#ui_car_volume').mCustomScrollbar('destroy').html('<center>正在加载...</center>');
			that.get('volume', {series:data.id}, function(data) {
				var str = '';
				var currId = $('#ui_car_slt').find('[data-type=volume]').attr('data-id');
				str += '<ul>';
				$.each(data, function(i, n) {
					str += '<li class="item' + (n.id == currId ? ' yxpl' : '') + '" data-id="' + n.id + '" data-name="' + n.name + '">' + n.name + '</li>';
				});
				str += '</ul>';
				$('#ui_car_volume').html(str).mCustomScrollbar();
			});
		});

		//排量选择
		$('#ui_car_volume').on('click', '.item', function() {
			$('#ui_car_volume').trigger('select', [{id: $(this).attr('data-id'), name: $(this).attr('data-name')}]);
			return false;
		}).bind('select', function(event, data) {
			that.switchNav('model');
			that.setSltNav('volume', data.id, data.name);
			$('#ui_car_model').mCustomScrollbar('destroy').html('<center>正在加载...</center>');
			that.get('model', {volume:data.id}, function(data) {
				var str = '';
				str += '<ul>';
				$.each(data, function(i, n) {
					str += '<li class="item' + (i == 0 ? ' yxpl' : '') + '" data-id="' + n.id + '" data-name="' + n.name + '">' + n.name +"<br>" +n.name+ '</li>';
				});
				str += '</ul>';
				$('#ui_car_model').html(str).mCustomScrollbar();
				$('#ui_car_apply').toggle( data && data.length );
			});
		});

		//车型选择
		$('#ui_car_model').on('click', '.item', function() {

			$(this).addClass('yxpl').siblings().removeClass('yxpl');
			return false;
		});

		//移除选项
		$('#ui_car_slt').on('click', '.del', function() {
			var $type = $(this).parent().prev();
			$type.nextAll().remove();
			if ($type.length) {
				var id = $type.attr('data-id');
				var name = $type.attr('data-name');
				var type = $type.attr('data-type');
				$('#ui_car_' + type).trigger('select', [{id: id, name: name}]);
			}
			else {
				that.switchNav('brand');
			}
			return false;
		});

		//确定
		$('#ui_car_apply').on('click', 'a', function() {
			
			var data = {};
			$('#ui_car_slt').children().each(function() {
				var $this = $(this);
				data[$this.attr('data-type')] = {
					id: $this.attr('data-id'),
					name: $this.attr('data-name')
				};
			});
			$model = $('#ui_car_model').find('.yxpl');
			data.model = {
				id: $model.attr('data-id'),
				name: $model.attr('data-name')
			}
			that.popup.hide();
			that.data.onSelect && that.data.onSelect(data);
			window.location.href = baoyang04.html;
			return false;
		});
		
		

		//我的爱车点击加粗
		$("#ui_car_index .item").click(function(){
			$("#ui_car_index .item").css("font-weight","normal");
			$("#ui_car_index .item").css("opacity","0.5");
			$(this).css("font-weight","bold");
			$(this).css("opacity","1");
		});
		
		
		
	},

	switchNav: function(type) {
		this.data.currType = type = type || 'brand';
		$('#ui_car_index').parent().toggle( type == 'brand' );
		$('#ui_car_slt').parent().toggle( type != 'brand' );
		$('#ui_car_brand').toggle( type == 'brand' );
		$('#ui_car_series').toggle( type == 'series' );
		$('#ui_car_volume').toggle( type == 'volume' );
		$('#ui_car_model').toggle( type == 'model' );
		$('#ui_car_apply').hide();
		$('#ui_car_nav').attr('class', 'window-xz' + ({
			'brand': '',
			'series': '01',
			'volume': '02',
			'model': '03'
		}[type] || ''));
	},

	setSltNav: function(type, id, name) {
		//ui_car_slt
		var str = '<div class="window-yxz" data-type="' + type + '" data-id="' + id + '" data-name="' + name + '"><img src="images/maintenance6_07.jpg"><span>' + name + '</span><a href="#" class="del"><img src="images/maintenance6_09.jpg"></a></div>';
		var $type = $('#ui_car_slt').find('[data-type=' + type + ']');
		if ($type.length) {
			$type.replaceWith(str);
		}
		else {
			$('#ui_car_slt').append(str);
		}
	},

	get: function(type, data, callback) {
		var that = this;
		$.ajax({
			type: 'get',
			url: that.url[type],
			data: data,
			timeout: 10000,
			dataType: 'json',
			success: function(data) {
				callback && callback.call(that, data);
			},
			error: function() {
				alert('请使用可以访问本地文件的浏览器(firefox或ie)打开，或者在部署到服务器后查看');
				alert('加载失败，请重新选择！')
			}
		});
	}
};

//在textarea追加内容
$(function(){
	// $(".label_select li").click(function(){
		// $(this).addClass('order-selected');
  	//        var btnVal=$.trim($(this).text());
 	//        var str = $('.status').val() + btnVal;
  	//        $('.status').val(str+'、');

	// });

	// $('.label_select li').on('click', function(){
	// 	$(this).toggleClass('order-selected');
	// 	var str = '';
	// 	$('.label_select .order-selected').each(function(){
	// 		str += $(this).text()+'、';
	// 	})
	// 	$(".status").val(str);
	// })

$('.label_select li').on('click', function(){
    var $status = $('.status'), val = $status.val(), text = $(this).text();
    val = $(this).hasClass('order-selected') ? val.replace(text + '、', '') : val + text + '、';
    $status.val(val);
    $(this).toggleClass('order-selected');
});

$('.label_select_1 li').on('click', function(){
    $(this).addClass('order-selected').siblings().removeClass('order-selected');
});
//个人信息
$(".gender label").click(function(){
	$(this).find('span').addClass('checked');
	$(this).siblings().find('span').removeClass('checked');
});

$(".bi_text_1").click(function(){
	$(this).next(".bi_down_1").slideDown();
});
$(".bi_text_2").click(function(){
	$(this).next(".bi_down_2").slideDown();
});
$(".bi_text_3").click(function(){
	$(this).next(".bi_down_3").slideDown();
});

$(".bi_down_1 span").click(function(){
	$(".bi_text_1 span").text($(this).find('a').text());
	$(this).parent().parent().parent(".bi_down_1").slideUp();
});
$(".bi_down_2 span").click(function(){
	$(".bi_text_2 span").text($(this).find('a').text());
	$(this).parent().parent().parent(".bi_down_2").slideUp();
});
$(".bi_down_3 span").click(function(){
	$(".bi_text_3 span").text($(this).find('a').text());
	$(this).parent().parent().parent(".bi_down_3").slideUp();
});


//首页
    $(document).mouseup(function(e){
      var _con = $('.birthday');   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        $(".bi_down").slideUp();
      }
    });




})

//短信验证
var countdown=60; 
function settime(val) { 
if (countdown == 0) { 
val.removeAttribute("disabled");    
val.value="发送验证码"; 
$(".fa_song").css('background', 'url(../images/registered3_03_1_2.png)');
countdown = 60; 
return false;
} else { 
val.setAttribute("disabled", true); 
val.value="重新发送(" + countdown + ")"; 
$(".fa_song").css('background', 'url(../images/registered3_03_1_1.png)');
countdown--; 

} 
setTimeout(function() { 
settime(val) 
},1000) 

} 


$(function(){

 

})


