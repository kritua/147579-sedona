var buttonChoose = document.querySelector('#choose');
var elem = document.querySelector('.hotel-choose');

buttonChoose.onclick = function() {
	if (elem.style.display == 'block') {
		elem.style.display = 'none';
	} else {
		elem.style.display = 'block';
	}
};
