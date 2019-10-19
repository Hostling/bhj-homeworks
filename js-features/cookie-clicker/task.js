let counter = document.getElementById('clicker__counter');

window.cookie.onclick = function() {
	
	counter.textContent++;
	cookie.width == 200 ? cookie.width = 180 : cookie.width = 200;
	a();
}

function speed() {
	let now = new Date();
	return function() {
		let previousClick = new Date();
		window.clicker__speed.textContent = Math.floor((1/((previousClick - now)*0.001))*100)/100;
		now = previousClick;
	}
}

let a = speed();