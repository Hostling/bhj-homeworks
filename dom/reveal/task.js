document.addEventListener('scroll', () => {
	let elem = document.querySelector('.reveal')
	let vpHeight = window.innerHeight;
	let elemTop = elem.getBoundingClientRect().top;

	if(vpHeight < elemTop) {
		if(!elem.classList.contains('reveal_active')){
			elem.classList.add('reveal_active');
		}
	}
})