$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question1").val());
    var question4 = parseInt($("#question2").val());
    var question5 = parseInt($("#question1").val());
    var counter = question1 + question2 + question3 + question4 + question5;
    if (counter === 1 && counter < 6) {
      $("#answer1").show();
    } else if (counter === 6 && counter < 11) {
      $("#answer2").show();
    } else if (counter === 11 && counter < 16) {
      $("#answer3").show();
    }

  });
});
