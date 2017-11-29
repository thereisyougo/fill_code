setTimeout( completed , 100)

var log = (function() {
	var counter = 0;
	
	return function(msg) {
		Notification.requestPermission(function(permit) {
			new Notification(msg);
		})
	}
})();

function completed() {
	setTimeout(function() {
		if (!document.forms.length)
			return;
		if (location.href.includes('portal.nuns'))
			hflogin();
		else if (location.href.includes('mail.sunyard'))
			setTimeout(ydmlogin, 200);
		else if (location.href.includes('oa.sunyard'))
			ydlogin();
		else if (location.href.includes(':9002'))
			wllogin();
		else if (location.href.includes('bugfree'))
			buglogin();
	}, 600);
	setTimeout(function() {
		if (location.href.includes('portal.nuns'))
			hfmail();
	}, 600);
}

function hflogin() {
	if (document.forms[0].userId) {
		document.forms[0].userId.value = 'w_liuxiaoming';
		document.forms[0].password.value = 'Abcd1234';
		document.forms[0].checkCode.select();
		document.forms[0].checkCode.focus();
		function subform(e) {
			//log(e.target.value);
			if (e.target.value.length === 4) {
				document.querySelector('#loginBtn').click();
				e.target.removeEventListener('keyup', subform);
			}
		}
		document.forms[0].checkCode.addEventListener('keyup', subform);
	} 
}
function hfmail() {
	if (location.href.includes('homeForCommon')) {

		setTimeout(function() {
			document.querySelector('.liebiao a').click();	
		}, 50);
	}
}

function ydlogin() {
	if (!document.forms[0].login_username) return;
	document.forms[0].login_username.value = 'xiaom.liu';
	document.forms[0].login_password.value = 'Xiaom.Liu6888';
	document.forms[0]['login.VerifyCode'].select();
	document.forms[0]['login.VerifyCode'].focus();
	function subform(e) {
		console.info(e.target.value);
		if (e.target.value.length === 4) {
			document.getElementById('login_button').click();
			e.target.removeEventListener('keyup', subform);
		}
	}
	document.forms[0]['login.VerifyCode'].addEventListener('keyup', subform);
}

function ydmlogin() {
	//document.body.innerHTML += '<input type="text" value="' + (typeof document.forms[0]) + '">';
	if (!document.forms[0].qquin) return;
	document.forms[0].qquin.value = 'xiaom.liu';
	document.forms[0].pp.value = 'Ghost119';
	document.forms[0].ss.checked = true;

}

function wllogin() {
	if (!document.forms[0].j_username) return;
	document.forms[0].j_username.value = 'weblogic';
	document.forms[0].j_password.value = 'qq123456';
	document.forms[0].submit();
}

function buglogin() {
	if (!document.forms[0].TestUserName) return;
	document.forms[0].innerHTML += '<a id="btn" href="javascript:xajax_xCheckUserLogin(xajax.getFormValues(\'LoginForm\'))"></a>';
	document.forms[0].TestUserName.value = 'liuxiaoming1';
	document.forms[0].TestUserPWD.value = '111111';
	document.getElementById('btn').click();
}

