
$(document).ready(function() {
  $("form#epic-test").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#question1option1").val());
    var number2 = parseInt($("#question1option2").val());
    var number3 = parseInt($("#question1option3").val());
    var number4 = parseInt($("#question2option1").val());
    var number5 = parseInt($("#question2option3").val());
    var number6 = parseInt($("#question2option3").val());
    var number7 = parseInt($("#question3option1").val());
    var number8 = parseInt($("#question3option2").val());
    var number9 = parseInt($("#question3option3").val());
    var number10 = parseInt($("#question4option1").val());
    var number11 = parseInt($("#question4option2").val());
    var number12 = parseInt($("#question4option3").val());
    var number13 = parseInt($("#question5option1").val());
    var number14 = parseInt($("#question5option2").val());
    var number15 = parseInt($("#question5option3").val());

    if (number1 + number4 + number7 + number10 + number13) {
      $("#answer1").show();
    }
    else if (number2 + number5 + number8 + number11 + number14) {
      $("#answer2").show();
    }
    else if (number3 + number6 + number9 + number12 + number15) {
      $("#answer3").show();
    }
    else {
      console.log("here");
    };
  });
});
