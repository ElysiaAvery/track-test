$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var question1option1 = parseInt($("#question1option1").val());
    var question1option2 = parseInt($("#question1option2").val());
    var question1option3 = parseInt($("#question1option3").val());
    var question2option1 = parseInt($("#question2option1").val());
    var question2option2 = parseInt($("#question2option2").val());
    var question2option3 = parseInt($("#question2option3").val());
    var question3option1 = parseInt($("#question3option1").val());
    var question3option2 = parseInt($("#question3option2").val());
    var question3option3 = parseInt($("#question3option3").val());
    var question4option1 = parseInt($("#question4option1").val());
    var question4option2 = parseInt($("#question4option2").val());
    var question4option3 = parseInt($("#question4option3").val());
    var question5option1 = parseInt($("#question5option1").val());
    var question5option2 = parseInt($("#question5option2").val());
    var question5option3 = parseInt($("#question5option3").val());
    
    if (question1option1 + question2option1 + question3option1 + question4option1 + question5option1) {
      $("#answer").text("It looks like you should pursue a track of Ruby and Rails!");
    }
    else if (question1option2 + question2option2 + question3option2 + question4option2 + question5option2) {
      $("#answer").text("You should consider the CSS and Design track!");
    }
    else if (question1option3 + question2option3 + question3option3 + question4option3 + question5option3) {
      $("#answer").text("The Java and Android tracks sound perfect for you!");
    }

  });
});
