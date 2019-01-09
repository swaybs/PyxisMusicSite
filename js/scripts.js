



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

// Flashing function



fadeloop('.name-part.p', 1500, 500, true)
fadeloop('.name-part.y', 900, 300, true)
fadeloop('.name-part.x', 1000, 3200, true)
fadeloop('.name-part.i', 800, 2200, true)
fadeloop('.name-part.s', 200, 1400, true)

function fadeloop(el,timeout,timein,loop){
    var $el = $(el),intId,fn = function(){
         $el.fadeOut(timeout).fadeIn(timein);
    };
    fn();
    if(loop){
        intId = setInterval(fn,timeout+timein+100);
        return intId;
    }
    return false;
}

window.onscroll = function() {scrollOut()};


$(window).ready(function() {
  $('.name-home', this).css('width', '70%');
})
// Loop from 0% width to 100% width

// $('document').ready(function(){
//   $('.name-home').css('width', '0%');
// })

// jQuery FadeIn one after the other

// $('document').ready(function(){
//   $('.name-part').css('display', 'none');
//   $('.name-part.p').delay(500).addClass('flipInX').fadeIn(500);
//   $('.name-part.y').delay(500).addClass('flipInX').fadeIn(1000);
//   $('.name-part.x').delay(500).addClass('flipInX').fadeIn(1500);
//   $('.name-part.i').delay(500).addClass('flipInX').fadeIn(2000);
//   $('.name-part.s').delay(500).addClass('flipInX').fadeIn(2500);
//
// })
