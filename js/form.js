let inputs = document.querySelectorAll(".blur-verif");
let mail = document.querySelector(".key-verif");

let isValid = function(element, condition) {
  if (condition) {
    element.classList.remove("is-not-valid");
    element.classList.add("is-valid");
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-not-valid");
  }
};

inputs.forEach(function(elt) {
  elt.addEventListener("blur", function() {
    isValid(elt, elt.value);
  });
});

mail.addEventListener("keyup", function() {
  isValid(mail, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(mail.value));
});
