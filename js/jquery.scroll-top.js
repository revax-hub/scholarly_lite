jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $("#toTop").addClass("show");
    } else {
      $("#toTop").removeClass("show");
    }
  });

  $("#toTop").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });
});
