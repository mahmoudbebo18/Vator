$(document).ready(function () {
  $(".Show-more span").click(function () {
    $(".hide").slideDown();
    $(this).fadeOut();
  });

  // create smooth scroll

  $(".navbar-nav .nav-link").click(function () {
    //$(this).parent().addClass("act").siblings().removeClass("act");
    $("body, html").animate(
      {
        // scrollTop = divId.offset().top
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          $(".navbar").innerHeight(),
      },
      400
    );
  });

  // async active class on scrolling
  $(window).scroll(function () {
    //sync nav links with sections
    $(".async").each(function () {
      if (
        $(window).scrollTop() >=
        $(this).offset().top - ($(".navbar").innerHeight() + 1)
      ) {
        var bebo = $(this).attr("id");
        $(".navbar-nav .nav-item").removeClass("active");
        $('.navbar-nav .nav-item a[data-target = "' + bebo + '"]')
          .parent()
          .addClass("active");
      }
    });
  });

  //scroll to top 

  var scrolling = $(".scrollToTop");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      scrolling.slideDown();
    } else {
      scrolling.slideUp();
    }
  });
  $(".scrollToTop").click(function () {
    "use strict";
    $("html,body").animate({ scrollTop: 0 }, 800);
  });
});
