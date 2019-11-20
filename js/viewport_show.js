var elementsMove = document.querySelectorAll(".element_move");

function revealElement() {
  elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 200) {
      element.classList.add("is-appear");
    }
  });
}

window.addEventListener("scroll", function() {
  revealElement();
});

let titleElt = document.querySelector("header h1");

window.addEventListener("load", function() {
  titleElt.classList.add("is-grown");
});
