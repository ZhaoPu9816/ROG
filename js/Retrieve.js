//验证电话
var phone = $('#phone')
var tostep2 = $('.to-step2')

function checkphone() {
	var phonestr = phone.val();
	var pattern = new RegExp(/^1[3-8][0-9]{9}$/);
	var result = pattern.test(phonestr);
	return result;
}

tostep2.click(function() {
	if(!checkphone()) {
		alert("电话号码不符合规范！");
	} else {
		alert("设置新密码");
		$('.retriece1').hide()
		$('.retriece2').show()
		$('.step1').css({
			"border": "5px solid rgba(245,245,245,0.5)",
			"background-color": "rgba(190,190,190,0.8)"
		})	
		$('.step-text1').css("color","black")
		$('.step2').css({
			"border": "5px solid rgba(245,245,245,0.5)",
			"background-color": "rgba(255,45,82,0.8)"
		})
		$('.step-text2').css("color","#FF2D52")
	}
})

//设置新密码
var password = $('#passWord')
var repassword = $('#repassWord')
var tostep3 = $('.to-step3')

function checkpassword() {
	var passwordstr = password.val();
	var pattern = new RegExp(/^[^\u2E80-\u9FFF]{6,16}$/);
	var result = pattern.test(passwordstr);
	return result;
}

function checkrepassword() {
	return(password.val() == repassword.val());
}

tostep3.click(function() {
	if(!checkpassword()) {
		alert("密码不符合规范！");
	}else if(!checkrepassword()) {
		alert("两次密码不一致！");
	}else {
		alert("新密码设置成功");
		$('.retriece2').hide()
		$('.retriece3').show()
		$('.step2').css({
			"border": "5px solid rgba(245,245,245,0.5)",
			"background-color": "rgba(190,190,190,0.8)"
		})	
		$('.step-text2').css("color","black")
		$('.step3').css({
			"border": "5px solid rgba(245,245,245,0.5)",
			"background-color": "rgba(255,45,82,0.8)"
		})
		$('.step-text3').css("color","#FF2D52")
	}
})

//$('.to-step2').click(function() {
//	$('.retriece1').hide()
//	$('.retriece2').show()
//	$('.step1').css({
//		"border": "5px solid rgba(245,245,245,0.5)",
//		"background-color": "rgba(190,190,190,0.8)"
//	})	
//	$('.step-text1').css("color","black")
//	$('.step2').css({
//		"border": "5px solid rgba(245,245,245,0.5)",
//		"background-color": "rgba(255,45,82,0.8)"
//	})
//	$('.step-text2').css("color","#FF2D52")
//})

//$('.to-step3').click(function() {
//	$('.retriece2').hide()
//	$('.retriece3').show()
//	$('.step2').css({
//		"border": "5px solid rgba(245,245,245,0.5)",
//		"background-color": "rgba(190,190,190,0.8)"
//	})	
//	$('.step-text2').css("color","black")
//	$('.step3').css({
//		"border": "5px solid rgba(245,245,245,0.5)",
//		"background-color": "rgba(255,45,82,0.8)"
//	})
//	$('.step-text3').css("color","#FF2D52")
//})
