//登录
var signUserName = $('#signUserName')
var signPassWord = $('#signPassWord')
var signBtn = $('#sign-btn')
var resignUserName = 'zp'
var resignPassWord = '987654321'

console.log(resignUserName)
console.log(resignPassWord)

function checksignUserName() {
	var userNamestr = signUserName.val();
	var pattern = new RegExp(/^[a-zA-Z0-9]{6,16}$/);
	var result = pattern.test(userNamestr);
	return(signUserName.val() == resignUserName)
//	return result;
}

function checksignPassWord() {
	var passwordstr = signPassWord.val();
	var pattern = new RegExp(/^[^\u2E80-\u9FFF]{6,16}$/);
	var result = pattern.test(passwordstr);
	return(signPassWord.val() == resignPassWord)
//	return result;
}

signBtn.click(function() {
	if(!checksignPassWord()) {
		alert("用户名或密码不正确！");
	}else if(!checksignPassWord()) {
		alert("用户名或密码不正确！");
	}else {
		alert("登陆成功！");
		window.location.href = "PersonalMain.html";
	}
})