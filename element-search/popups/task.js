let modalMain = document.getElementById('modal_main');
let modalCloseMain = document.getElementsByClassName('modal__close')[0];
let modalCloseSuccess = document.getElementsByClassName('modal__close')[2];
let showSuccess = document.getElementsByClassName('show-success')[0];
let modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');
modalCloseMain.onclick = () => modalMain.closest('*').classList.remove('modal_active');
showSuccess.onclick = () => {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
	modalCloseSuccess.onclick = () => modalSuccess.closest('*').classList.remove('modal_active');
}