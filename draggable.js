var activeEl;
document.addEventListener("DOMContentLoaded", function() {
  var draggableEls = document.querySelectorAll(".window-toolbar");
  console.log(draggableEls);
  for(var i = 0; i < draggableEls.length; i++) {
    makeDraggable(draggableEls[i]);
  }
})

function makeDraggable(el) {
  console.log("registered");
  el.addEventListener('mousedown', mouseDown, false);
  window.addEventListener("mouseup", mouseUp, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
  var active = document.querySelector(".active")
  if(active)
    active.classList.remove("active");
  activeEl = e.target;
  while(activeEl != document.body && !activeEl.classList.contains("window")) {
    activeEl = activeEl.parentElement;
  }
  activeEl.classList.add("active");
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e) {
  if(!activeEl) return;
  console.log(e);
  activeEl.style.position = "absolute";
  activeEl.style.top = e.clientY + 'px';
  activeEl.style.left = (e.clientX - (activeEl.clientWidth / 2)) + 'px';
}