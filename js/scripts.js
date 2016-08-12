$(document).ready(function() {
  $("form").submit(function() {
    var slide = $("#question1").is(":hidden");

    $("img").slideToggle();
    if(":visible")
      $("#question2").slideToggle("slow") && $("#question3").slideToggle("slow") &&
      $("#question4").slideToggle("slow") &&
      $("#question5").slideToggle("slow");
  });
});
