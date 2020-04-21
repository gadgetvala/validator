const inputBar = document.querySelector('.inputbar');
const inputbarOnly = document.querySelector('#inputbar-only');
//Alphabet group
const onlyAlphabet = document.querySelector('#onlyAlphabet');
const capitalize = document.querySelector('#capitalize');
const allCaps = document.querySelector('#allCaps');
const spaceBetween = document.querySelector('#spaceBetween');
//Number group
const isNumberic = document.querySelector('#isNumberic');
const startWith0 = document.querySelector('#startWith0');
const lessThan100 = document.querySelector('#lessThan100');
const lessThan10 = document.querySelector('#lessThan10');
//Symbol group
const onlySpecialChar = document.querySelector('#onlySpecialChar');
const startWithSpecial = document.querySelector('#startWithSpecial');
const endWith = document.querySelector('#endWith');
const emailValidation = document.querySelector('#emailvalidation');

inputbarOnly.addEventListener('change', () => {
	//Alphabet group
	if (onlyAlphabet.checked) {
		if (/^[a-zA-Z]+$/.test(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (capitalize.checked) {
		if (inputbarOnly.value[0] !== inputbarOnly.value[0].toUpperCase()) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
	if (lessThan100.checked) {
		if (inputbarOnly.value !== inputbarOnly.value.toUpperCase()) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
	if (spaceBetween.checked) {
		if (!/ /.test(inputbarOnly.value)) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}

	//Number Group
	if (isNumberic.checked) {
		if (/^[0-9]+$/.test(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (startWith0.checked) {
		if (!/0.*$/.test(inputbarOnly.value[0])) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
	if (lessThan100.checked) {
		let total = inputbarOnly.value;
		if (total >= 100) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
	if (lessThan10.checked) {
		let total = inputbarOnly.value;
		if (total >= 10) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}

	//Symbol group
	if (onlySpecialChar.checked) {
		if (/^[^a-zA-Z0-9]+$/.test(inputbarOnly.value)) {
			inputBar.className = 'inputbar';
		} else {
			inputBar.className += ' wrong';
		}
	}
	if (startWithSpecial.checked) {
		if (!/^[^a-zA-Z0-9]+$/.test(inputbarOnly.value[0])) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
	if (endWith.checked) {
		let len = inputbarOnly.value.length;
		console.log(inputbarOnly.value[len - 1]);
		if (!/^[^a-zA-Z0-9]+$/.test(inputbarOnly.value[len - 1])) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
	if (emailValidation.checked) {
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputbarOnly.value)) {
			inputBar.className += ' wrong';
		} else {
			inputBar.className = 'inputbar';
		}
	}
});
