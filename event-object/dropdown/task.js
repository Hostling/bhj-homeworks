let list = document.getElementsByClassName('dropdown')[0];

let links = document.getElementsByClassName('dropdown__item');

list.addEventListener('click', foldUnfold);


for(let link of links) {
	link.addEventListener('click', function(e){
		e.preventDefault();
		list.querySelector('div.dropdown__value').textContent = link.querySelector('a.dropdown__link').textContent;
		foldUnfold();
	});
	link.addEventListener('click', foldUnfold);
}

function foldUnfold() {
	if(document.querySelector('ul.dropdown__list_active')) {
		document.querySelector('ul.dropdown__list_active').classList.remove('dropdown__list_active');
	} else {
		document.querySelector('ul.dropdown__list').classList.add('dropdown__list_active');
	}
}