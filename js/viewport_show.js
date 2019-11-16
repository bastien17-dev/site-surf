var elementsMove = document.querySelectorAll(".element_move");
var arrowDown = document.querySelector(".arrow-down");

function revealElement() {
  for (var element of elementsMove) {
    var scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 200) {
      element.classList.add("appear");
    }
  }
}

function removeArrow() {
  if (window.scrollY > arrowDown.offsetTop + 100) {
    arrowDown.classList.add("move");
  }
}

window.addEventListener("scroll", function() {
  revealElement();
  removeArrow();
});
