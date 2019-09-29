$(document).ready(function () {
  $("#shopdrop").hide();
  $(".text2").hide();
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
            $(".nav").css("background-color", "rgb(207,160,114)");
            $(".nav").css("box-shadow" ,"1px 1px 3px black");

          } else {
            $(".nav").css("background-color", "rgba(0,0,0, 0.1)");
            $(".nav").css("box-shadow" ,"0px 0px 0px black");
          }
    if($(document).scrollTop() > 500){
      $("#shopdrop").slideDown();
      $(".text2").slideDown();
      $(".pos").slideDown();
    }
      else{
   $("#shopdrop").slideUp();
   $(".text2").slideUp();
      }

  });
  $("#clickme").click(function(){
    $(".options").toggle();
    $(".nav").css("background-color", "rgba(207,160,114,0.6)");
  });
});
