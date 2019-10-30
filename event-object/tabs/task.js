let tabs = document.getElementsByClassName('tab');
let tabsContent = document.getElementsByClassName('tab__content');

for(let i = 0;i < tabs.length;i++) {
	tabs[i].addEventListener('click', (e) => {
		document.getElementsByClassName('tab_active')[0].classList.remove('tab_active');
		document.getElementsByClassName('tab__content_active')[0].classList.remove('tab__content_active');
		e.target.classList.add('tab_active');
		tabsContent.item(i).classList.add('tab__content_active');
	})
}