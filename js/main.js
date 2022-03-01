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

Splitting();


//jquery slide in picture
$(window).on('resize scroll', function() {
    if ($('#about').isInViewport()) {
        $('.drawing').first().css('right', '50px');
    } else {
        $('.drawing').first().css('right', '-2000px');
    }
    // jquery title animation
    if ($(document).scrollTop() > 200){
      $(".heading").first().addClass("textanim");
    }

    if ($('.rules').first().isInViewport()) {
        $('.rules').addClass("text-appear");
    } else {

    }
        // $('.drawing').first().css('right', '-2000px');

});





// cursor
$(document).on('mousemove', function(e){
    $('#cursor').css({
       left:  e.clientX,
       top:   e.clientY
    });
    $('#cursor2').css({
       left:  e.clientX,
       top:   e.clientY
    });
});


//glitch





// video playpause
function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}

// And you would kick this off where appropriate with:
playPauseVideo();
