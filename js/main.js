$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// $(window).on('resize scroll', function() {
//     if ($('#about').isInViewport()) {
//       $('#about div').show("slide", { direction: "left" }, 500);
//     } else {
//       $('#about div').hide("slide", { direction: "left" }, 500);
//     }
//     if ($('#intro').isInViewport()) {
//       $('#intro div').show("slide", { direction: "left" }, 500);
//     } else {
//       $('#intro div').hide("slide", { direction: "left" }, 500);
//     }
// });

// $('.box1').first().on('isOnScreen', function(){
//
// });

$(function() {
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
}); // jQuery load
