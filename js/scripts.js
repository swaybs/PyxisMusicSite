

// BURGER ICON FUNCTION
function burger(x) {
  x.classList.toggle('change');


}

// OPEN NAV
function openNav() {
  // alert("Not Working")
  document.getElementsByClassName('overlay').style.height = "100%";
}

//CLOSE NAV
function closeNav() {
  document.getElementByID("site-nav-primary").style.height = "0%";
}
