let taskArea = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");
let add = document.getElementById("tasks__add");

let addTask = () => {
  taskList.innerHTML += `<div class="task">
    <div class="task__title">
      ${taskArea.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
  taskArea.value = '';
};

taskArea.addEventListener("keydown", e => {
  if (e.key == 'Enter' && taskArea.value !== "") {
    e.preventDefault();
    addTask();
  }
});

taskList.addEventListener("click", e => {
  let target = e.target;
  if (target.classList.contains("task__remove")) {
    target.closest(".task").remove();
  }
});

add.addEventListener("click", e => {
  e.preventDefault();
  if (taskArea.value !== "") {
    addTask();
  }
});
