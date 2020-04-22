const inputBar = document.querySelector('.inputbar');
const inputbarOnly = document.querySelector('#inputbar-only');
const checkboxList = document.querySelectorAll('input[type=checkbox]');
const isAlpha = document.querySelector('#isAlpha');
const isUppercase = document.querySelector('#isUppercase');
const islowercase = document.querySelector('#islowercase');
const isAlphanumeric = document.querySelector('#isAlphanumeric');
const isNumber = document.querySelector('#isNumber');
const isHexColor = document.querySelector('#isHexColor');
const isHexadecimal = document.querySelector('#isHexadecimal');
const isEmail = document.querySelector('#isEmail');
const isIpAdd = document.querySelector('#isIpAdd');
const isMACAddress = document.querySelector('#isMACAddress');
const isMD5 = document.querySelector('#isMD5');
const isSHA1 = document.querySelector('#isSHA1');


// inputbarOnly.addEventListener('change', () => {
// 	checkInput();
// });

function checkInput(){
	if (isAlpha.checked) {
		if (isValidAlpha(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isUppercase.checked) {
		if (isValidUppercase(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (islowercase.checked) {
		if (isValidlowercase(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isAlphanumeric.checked) {
		if (isvalidAlphanumeric(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}

	if (isNumber.checked) {
		if (isValidNumber(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isHexColor.checked) {
		if (isValidHexColor(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isHexadecimal.checked) {
		if (isValidHexadecimal(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isEmail.checked) {
		if (isValidEmail(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isIpAdd.checked) {
		if (isValidIpAdd(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isMACAddress.checked) {
		if (isValidMACAddress(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isMD5.checked) {
		if (isValidMD5(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (isSHA1.checked) {
		if (isValidSHA1(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
};
function isValidIpAdd(ipaddress) {
	return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
		ipaddress
	)
		? true
		: false;
}

function isValidMACAddress(macaddress) {
	return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(macaddress) ? true : false;
}

function isValidMD5(MD5) {
	return /^[a-fA-F0-9]{32}$/.test(MD5) ? true : false;
}

function isValidSHA1(SHA1) {
	return /^[a-fA-F0-9]{40}$/.test(SHA1) ? true : false;
}

function isValidEmail(email) {
	return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) ? true : false;
}

function isValidAlpha(alpha) {
	return /^[a-zA-Z]+$/.test(alpha) ? true : false;
}

function isValidUppercase(alpha) {
	return /^[A-Z]+$/.test(alpha) ? true : false;
}

function isValidlowercase(alpha) {
	return /^[a-z]+$/.test(alpha) ? true : false;
}

function isvalidAlphanumeric(alpha) {
	return /^[a-zA-Z0-9_]*$/.test(alpha) ? true : false;
}

function isValidNumber(num) {
	return /^[0-9]+$/.test(num) ? true : false;
}

function isValidHexColor(code) {
	return /^#(?:[0-9a-f]{3}){1,2}$/i.test(code) ? true : false;
}

function isValidHexadecimal(code) {
	return /0[xX][0-9a-fA-F]+/.test(code) ? true : false;
}

function turnOff(data) {
	checkboxList.forEach((el) => {
		if (el.id == data) {
			el.checked = true;
		} else {
			el.checked = false;
		}
	});
}
