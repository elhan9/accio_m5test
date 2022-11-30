window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav-menu");

var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}