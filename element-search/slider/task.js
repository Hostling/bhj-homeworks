let next = document.getElementsByClassName('slider__arrow_next')[0];
let prev = document.getElementsByClassName('slider__arrow_prev')[0];

function setNext() {
	let images = document.getElementsByClassName('slider__item');
	for(let i = 0;i < images.length;i++){
		if(images[i].classList.contains('slider__item_active')){
			images[i].classList.remove('slider__item_active');
			let numOfNext = i + 1;
			if(numOfNext == images.length){
				numOfNext = 0;
			}
			images[numOfNext].classList.add('slider__item_active');
			break;
		}
	}
}

function setPrev() {
	let images = document.getElementsByClassName('slider__item');
	for(let i = 0;i < images.length;i++){
		if(images[i].classList.contains('slider__item_active')){
			images[i].classList.remove('slider__item_active');
			let numOfNext = i - 1;
			if(i == 0){
				numOfNext = images.length - 1;
			}
			images[numOfNext].classList.add('slider__item_active');
			break;
		}
	}
}

next.onclick = setNext;
prev.onclick = setPrev;