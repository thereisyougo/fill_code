// QQ, Blizzard, JetBrains
// DogDog
// EasyConnect ELZ@qGa7Vm^b
// Firm VPN Xt@600571
// Epic *FMV#uT%Qe78D0&
setTimeout( completed , 100)

var log = (function() {
	
	return function(msg) {
		Notification.requestPermission(function(permit) {
			new Notification(msg);
		})
	}
})();
// https://login.oracle.com/mysso/signon.jsp
function completed() {
	setTimeout(function() {
		if (location.href.includes('shenzhentong'))
			setTimeout(fillcardnum, 0);
		if (!document.forms.length)
			return;
		if (location.href.includes('mysso/signon'))
			oraclelogin();
		else if (location.href.includes('portal.nuns'))
			hflogin();
		else if (location.href.includes('mail.sunyard'))
			setTimeout(ydmlogin, 200);
		else if (location.href.includes('oa.sunyard'))
			ydlogin();
		else if (location.href.includes(':9002'))
			wllogin();
		else if (location.href.includes('bugfree'))
			buglogin();
		else if (location.href.includes('china-pub'))
			publogin();
	}, 600);
	setTimeout(function() {
		if (location.href.includes('portal.nuns'))
			hfmail();
	}, 600);
}

function val(idSelector, value) {
	if (typeof idSelector === 'string')
		document.querySelector(idSelector).value = value;
	if (typeof idSelector === 'object' && idSelector['nodeType'] === Node.ELEMENT_NODE)
		idSelector.value = value;
}

function $(idSelector) {
	return document.querySelector(idSelector);
}

function fillcardnum() {
	let cardnum = $('#card_num');
	if (cardnum) {
		cardnum.value = '296228930';
	}
	let firmfpmc = $('#firmfpmc');
	if (firmfpmc) {
		val(firmfpmc, '信雅达系统工程股份有限公司');
		val('#firmsbh', '91330000253917765N');
		val('#firmaddre', '杭州江南大道3888号信雅达科技大厦');
		val('#firmtel', '057156686888');
		val('#firmyh', '工行杭州分行营业厅');
		val('#firmyhzh', '1202021109006707624');
		val('#firmphone', '18657123531');
	}
}

function oraclelogin() {
	document.forms[0].ssousername.value = 'xper119@live.com';
	document.forms[0].password.value = '_Ghost119';
	//document.querySelector('form input[type=button]').click();
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
	document.forms[0].login_password.value = 'Summon#{%724%}';
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

function publogin() {
	if (!document.forms[0].zh1) return;
	document.forms[0].elements[0].value = 'thereisyougo';
	document.forms[0].elements[1].value = 'liuxm119';
	document.forms[0].elements[2].checked = true;
	setTimeout(function() {
		document.querySelector('input[type=image]').click();
	}, 1000);
}
