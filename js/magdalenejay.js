$(document).ready(function() {

    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbareffect').addClass('solid');
      } else {
          $('.navbareffect').removeClass('solid');
      }
    });
});