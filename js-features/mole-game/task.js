let holes = document.getElementsByClassName('hole');

for(let sel of holes) {
	sel.onclick = () => shot(sel);
}

function shot(hole) {
	hole.className.includes('hole_has-mole') ? dead.textContent++ : lost.textContent++;

	if(dead.textContent == 10) {
		alert('Вы победили!');
		resetGame();
	} else if(lost.textContent == 5) {
		alert('Вы проиграли!');
		resetGame();
	}
}

function resetGame() {
	dead.textContent = 0;
	lost.textContent = 0;
}
