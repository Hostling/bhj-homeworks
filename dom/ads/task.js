let spans = document.getElementsByClassName('rotator__case');

setInterval(function() {
	document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
	spans.item(getRandomIndex(spans.length)).classList.add('rotator__case_active');
}, 1000);

function getRandomIndex(max) {
	return Math.floor(Math.random() * Math.floor(max));
}