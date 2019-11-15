var menuElt = document.querySelector(".menu_list");
var sideBar = document.querySelector(".side_bar");
var hamburgerMenu = document.querySelector("#hamburger_menu");
var buttonHamburger = document.querySelector(".button_hamburger");
var buttonClose = document.getElementsByClassName("close_menu");

sideBar.innerHTML = menuElt.innerHTML;

buttonHamburger.addEventListener("click", function(e) {
  e.preventDefault();
  hamburgerMenu.classList.add("activated");
});

for (var element of buttonClose) {
  element.addEventListener("click", function(e) {
    hamburgerMenu.classList.remove("activated");
  });
}
