let checkboxes = Array.from(document.querySelectorAll('input.interest__check'));

checkboxes.forEach((chB) => {
  chB.addEventListener('change', (e) => {
    //Проверяем если ли списке подпункты
    if(chB.closest('ul li ul')) {
      //Если подпунктов нет - смотрим соседние элементы
      let state = 0;
      //0 = все не выбраны
      //1 = выбран один элементы
      //2 = выбраны оба

      chB.closest('ul li ul').querySelectorAll('input.interest__check').forEach(elem => {
        elem.checked === true ? state++ : false;
      });
      //Ищем родительский чекбокс
      let parentChB = chB.closest('ul li ul').parentNode.querySelector('label input');
      switch(state) {
        case 0:
          parentChB.checked = false;
          break;
        case 1:
          parentChB.checked = true;
          break;
        case 2:
          parentChB.checked = true;
          break;
      }
    } else {
      if(!chB.checked) {
        chB.parentNode.parentNode.querySelectorAll('input.interest__check').forEach(elem => {
          elem.checked = false;
        });
      } else {
        chB.parentNode.parentNode.querySelectorAll('input.interest__check').forEach(elem => {
          elem.checked = true;
        });
      }
    }
  })
})
