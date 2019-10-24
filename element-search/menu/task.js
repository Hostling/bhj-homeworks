let menuArr = document.getElementsByClassName('menu__link');

for(let menu of Array.from(menuArr)) {
	menu.onclick = () => {
		if(menu.parentElement.querySelector('.menu_sub').classList.contains('menu_active')) {
			console.log('contains');
			menu.parentElement.querySelector('.menu_sub').classList.remove('menu_active');
			return false;
		}
		if(menu.parentElement.querySelector('.menu_sub')) {
			menu.parentElement.querySelector('.menu_sub').classList.add('menu_active');
			return false;
		}
	}
}