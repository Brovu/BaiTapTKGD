$(document).ready(function () {
  $(".show-name").hide();
  $(".show-class").hide();
  $("#name").hover(function () {
    $(".show-name").toggle(500);
  });
  $("#class").hover(function () {
    $(".show-class").toggle(500);
  });
  $(".banner-describe1, .banner-describe2, .banner-describe3").hide();
  $(".content__right-extra-banner1").hover(function () {
    $(".banner-describe1").fadeToggle();
    $(".content__right-extra-banner1").toggleClass("overlay");
  });
  $(".content__right-extra-banner2").hover(function () {
    $(".banner-describe2").fadeToggle();
    $(".content__right-extra-banner2").toggleClass("overlay");
  });
  $(".content__right-extra-banner3").hover(function () {
    $(".banner-describe3").fadeToggle();
    $(".content__right-extra-banner3").toggleClass("overlay");
  });
});
