let images = document.querySelectorAll(".about_image");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let index = 0;

let hideNextPrev = function(index) {
  next.classList.toggle("is-hidden", index === images.length - 1);
  previous.classList.toggle("is-hidden", index === 0);
};

let jump = function(to) {
  images[index].classList.add("is-hidden");
  index = to;
  if (index > images.length - 1) {
    index = images.length - 1;
  } else if (index < 0) {
    index = 0;
  }
  images[index].classList.remove("is-hidden");
  hideNextPrev(index);
};

next.addEventListener("click", function() {
  jump(index + 1);
});

previous.addEventListener("click", function() {
  jump(index - 1);
});

hideNextPrev(0);
