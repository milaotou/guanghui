$(function() {

	//文本框
	$('#login_wrap').find(':text').setDefault();
	
	//tab切换
	$('#login_tab').on('click', 'li', function() {
		$('#form_login, #form_reg').hide();
		$(this).addClass('zcbt').siblings().removeClass('zcbt');
		$( $(this).attr('ref') ).show();
	});

	//注册条款
	$('#reg_term').click(function() {
		$('#reg_term_popup').show();
		$('#reg_term_content').mCustomScrollbar();
		return false;
	});
	
		
	//注册 用户注册条款
	$("#Provision").click(function(){
		$(".registered-tktc").fadeIn();
		$(".ups-bj").fadeIn();		
		})
	$(".shut-down ,.ups-bj").click(function(){		
		$(".registered-tktc").fadeOut();
		$(".ups-bj").fadeOut();		
		})
	
	// $(".readBtn a").click(function(){
	// 	$(".readBtn a").addClass("curr");
	// 	})


//默认checked事件
    $('.xztk').click(function(){
        if($('input[name="check"]').prop("checked"))
        {
            $(".readBtn a").addClass('curr');
        }
        else
        {
            $(".readBtn a").removeClass('curr');
        }
		
		
		

		
		
		
    });

        // $('.readBtn a').toggle(function(){
        //   alert(11111);
        //     $('input[name="check"]').prop("checked", true);
        //     

        // },function(){
        //     $('input[name="check"]').prop("checked", false); 
        //     $(this).removeClass('curr');
        // })

$(".readBtn a").click(function(){
    if($(".readBtn a").hasClass("curr")){
        $('input[name="check"]').prop("checked", false); 
        $(this).removeClass('curr')
    }
    else
    {
    $('input[name="check"]').prop("checked", true);
    $(this).addClass('curr');

    }
})

});

//短信验证
var countdown=60; 
function settime(val) { 
if (countdown == 0) { 
val.removeAttribute("disabled");    
val.value="发送验证码"; 
$(".fa_song").css('background', 'url(../images/registered3_03.png)');
countdown = 60; 
return false;
} else { 
val.setAttribute("disabled", true); 
val.value="重新发送(" + countdown + ")"; 
$(".fa_song").css('background', 'url(../images/registered3_03_1.png)');
countdown--; 

} 
setTimeout(function() { 
settime(val) 
},1000) 

} 


//验证手机号
function checkSubmitMobil(){ 
	   $("#mobil").click(function(){
				 $(".registered-sjh .p1_1").fadeOut();
				})

       // if($("#mobil").val()==""){ 
       //      $(".registered-sjh .p1").fadeIn();
       //      $("#mobil").focus(); 
       //      return false; 
       // } 	  

       if(!$("#mobil").val().match(/^1[3|4|5|8][0-9]\d{4,8}$/) || $("#mobil").val().length != 11){ 
            $(".registered-sjh .p1_1").fadeIn();
            $("#mobil").focus(); 
            return false; 
       } 
       else{
       // $(".reg-prompt").fadeOut();
		 $(".registered-sjh .p1_1").fadeOut();
       }
        if($(".pass_a1").val()==""){
       	$(".pass_a1").focus(function(){
            	 $(".registered-sjh .p1_2").fadeOut();
        }); 
       		$(".registered-sjh .p1_2").fadeIn();

            return false; 
       } else{
		 $(".registered-sjh .p1_2").fadeOut();
       }
       
	   
	   location.href = "../index.html";
	   return false; 
        }

	$(function() {

		$("#mobi2").click(function(){
			
				 $(".registered-sjh02 .p2").fadeOut();
				})
		$(".pass_a").click(function(){
			
				 $(".registered-sjh02 .p3").fadeOut();
				})
		$(".yz_m").click(function(){
			
			 $(".registered-sryz input.yz_m").css({"color":"#606060"})
		})
		$(".registered-zctk02 input").click(function(){
			
			$(".fou").fadeOut();
		})
		
		
		
		
		$("#mobi2").blur(function(){
			 $("#11").click(function(){
				 $(".registered-sjh02 .p2").fadeOut();
				})

       if($("#mobi2").val()==""){ 
            $(".registered-sjh02 .p2").fadeIn();
            return false; 
       } 
	  

       if(!$("#mobi2").val().match(/^1[3|4|5|8][0-9]\d{4,8}$/)){ 
            $(".registered-sjh02 .p2").fadeIn();
            return false; 
       } 
	   
	   }) 

		 
	   $(".fa_song").click(function(){
	
	$(".registered-sryz .p1").fadeIn();
	})
	   
	   
		})

	function checkSubmitMobi2(){ 


       // if($("#mobil").val()==""){ 
       //      $(".registered-sjh .p1").fadeIn();
       //      $("#mobil").focus(); 
       //      return false; 
       // } 	  

       if(!$("#mobi2").val().match(/^1[3|4|5|8][0-9]\d{4,8}$/) || $("#mobi2").val().length != 11){ 
            $(".registered-sjh02 .p2").fadeIn();
            $("#mobi2").focus(); 
            return false; 
       } 
       else{
		 $(".registered-sjh02 .p2").fadeOut();
       }
       if($(".pass_a").val()==""){
       	$(".pass_a").focus(function(){
            	 $(".registered-sjh02 .p3").fadeOut();
        }); 
       		$(".registered-sjh02 .p3").fadeIn();

            return false; 
       } else{
		 $(".registered-sjh02 .p3").fadeOut();
       }
       if($(".yz_m").val()==""){
        	$(".yz_m").focus(function(){
            	 $(".yz_m").css({"color":"#606060"})
            }); 
       		$(".yz_m").css({"color":"#f00"});
            return false; 
       } else{
		 $(".yz_m").css({"color":"#606060"})
       }
         if(!$(".registered-zctk02 input[type='checkbox']").is(':checked')){
        	$(".fou").fadeIn();
       		
            return false; 
       } 
       else{
		$(".fou").fadeOut();
       }
     location.href = "denglu01.html";
	   return false; 
	   
	   
        }