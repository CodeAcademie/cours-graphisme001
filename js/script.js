// SCROLL DE 100VH AVEC LE BOUTON FIXE
   $('.button').keydown(function(){
       $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
   });


$("body").addClass("thin");
// If user has Javascript disabled, the thick scrollbar is shown
$("body").mouseover(function(){
  $(this).removeClass("thin");
});
$("body").mouseover(function(){
  $(this).addClass("thin");
});
$("body").scroll(function () {
  $("body").addClass("thin");
});

// Using http://css-tricks.com/custom-scrollbars-in-webkit/ for basic custom scrollbars