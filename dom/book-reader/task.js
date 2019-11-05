let bookText = document.querySelector('.book');
let controls = Array.from(document.getElementsByClassName('font-size'));


controls.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		e.preventDefault();
		document.getElementsByClassName('font-size_active')[0].classList.remove('font-size_active');
		elem.classList.add('font-size_active');
		if(document.getElementsByClassName('book_fs-big')[0]) {
			document.getElementsByClassName('book_fs-big')[0].classList.remove('book_fs-big');
		} else if(document.getElementsByClassName('book_fs-small')[0]) {
			document.getElementsByClassName('book_fs-small')[0].classList.remove('book_fs-small');
		}

		if(elem.dataset.size == 'small') {
			bookText.classList.add('book_fs-small');
		} else if (elem.dataset.size == 'big') {
			bookText.classList.add('book_fs-big');
		}
	});
});
