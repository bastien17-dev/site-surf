var elementsMove = document.querySelectorAll(".element_move");
var arrowDown = document.querySelector(".arrow-down");

function revealElement() {
  elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 200) {
      element.classList.add("is-appear");
    }
  });
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
