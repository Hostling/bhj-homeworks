
let active;

document.addEventListener("click", e => {
  e.preventDefault();

  let tooltip = e.target.getAttribute("title");

  !e.target.classList.contains("has-tooltip") ? false : true;

  if (active) {
    let hintText = active.innerText;
    active.remove();
    active = null;

    if (hintText === e.target.title) return;
  }

  let tooltipDiv = document.createElement("div");
  tooltipDiv.className = "tooltip";
  tooltipDiv.innerText = tooltip;
  document.body.append(tooltipDiv);
  tooltipDiv.classList.add("tooltip_active");

  let coords = e.target.getBoundingClientRect();
  let top = coords.top - tooltipDiv.offsetHeight - 5;
  let left = coords.left + (e.target.offsetWidth - tooltipDiv.offsetWidth) / 2;

  if (top < 0) {
    top = coords.top + tooltipDiv.offsetHeight;
  }
  if (left < 0) {
    left = coords.left;
  }

  tooltipDiv.style.top = `${top}px`;
  tooltipDiv.style.left = `${left}px`;

  active = document.querySelector(".tooltip");

});
