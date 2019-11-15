var elementsMove = document.querySelectorAll(".element_move");

function revealElement() {
  for (var element of elementsMove) {
    var scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 250) {
      element.classList.add("appear");
    }
  }
}

window.addEventListener("scroll", function() {
  revealElement();
});
