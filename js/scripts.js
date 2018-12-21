



// BURGER ICON FUNCTION
function burger(x) {
  x.classList.toggle('change');

}

// Toggle function for burger button
function navToggle() {
  var overlay = document.getElementById('site-nav-primary');

  if (overlay.style.height === "100%") {
    overlay.style.height = "0%";

  } else {
    overlay.style.height = "100%";
    overlay.style.right = "50%";
  }
}
