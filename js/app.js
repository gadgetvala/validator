const inputBar = document.querySelector('.inputbar');
const inputbarOnly = document.querySelector('#inputbar-only');
//Alphabet group
const isAlpha = document.querySelector('#isAlpha');
const isUppercase = document.querySelector('#isUppercase');
const islowercase = document.querySelector('#islowercase');
const isAlphanumeric = document.querySelector('#isAlphanumeric');
//Number group
const isNumber = document.querySelector('#isNumber');
const isHexColor = document.querySelector('#isHexColor');
const isHexadecimal = document.querySelector('#isHexadecimal');
const isEmail = document.querySelector('#isEmail');
//Symbol group
const isIpAdd = document.querySelector('#isIpAdd');
const isMACAddress = document.querySelector('#isMACAddress');
const isMD5 = document.querySelector('#isMD5');
const isSHA1 = document.querySelector('#isSHA1');

inputbarOnly.addEventListener('change', () => {
	//Alphabet group
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

	//Number Group
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

	//Symbol group
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
});

function isValidIpAdd(ipaddress) {
	if (
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
			ipaddress
		)
	) {
		return true;
	}
	return false;
}

function isValidMACAddress(macaddress) {
	if (/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(macaddress)) {
		return true;
	}
	return false;
}

function isValidMD5(MD5) {
	if (/^[a-fA-F0-9]{32}$/.test(MD5)) {
		return true;
	}
	return false;
}

function isValidSHA1(SHA1) {
	if (/^[a-fA-F0-9]{40}$/.test(SHA1)) {
		return true;
	} else {
		return false;
	}
}

function isValidEmail(email) {
	if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
		return true;
	} else {
		return false;
	}
}

function isValidAlpha(alpha) {
	if (/^[a-zA-Z]+$/.test(alpha)) {
		return true;
	} else {
		return false;
	}
}

function isValidUppercase(alpha) {
	if (/^[A-Z]+$/.test(alpha)) {
		return true;
	}
	return false;
}

function isValidlowercase(alpha) {
	if (/^[a-z]+$/.test(alpha)) {
		return true;
	}
	return false;
}

function isvalidAlphanumeric(alpha) {
	if (/^[a-zA-Z0-9_]*$/.test(alpha)) {
		return true;
	}
	return false;
}

function isValidNumber(num) {
	if (/^[0-9]+$/.test(num)) {
		return true;
	}
	return false;
}

function isValidHexColor(code) {
	if (/^#(?:[0-9a-f]{3}){1,2}$/i.test(code)) {
		return true;
	}
	return false;
}

function isValidHexadecimal(code) {
	if (/0[xX][0-9a-fA-F]+/.test(code)) {
		return true;
	}
	return false;
}
