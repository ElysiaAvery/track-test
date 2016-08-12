$(document).ready(function() {
  $("form#epic-test").submit(function(event) {
    event.preventDefault();
    var q1Answer = $("input:radio[name=question1]:checked").val();
    var q2Answer = $("input:radio[name=question2]:checked").val();
    var q3Answer = $("input:radio[name=question3]:checked").val();
    var q4Answer = $("input:radio[name=question4]:checked").val();
    var q5Answer = $("inpur:radio[name=question5]:checked").val();

    var ruby = 0;
    var design = 0;
    var drupal = 0;

    if(q1Answer === "question1option1"){
      design +=1;
    }
    else if (q1Answer === "question1option2"){
      drupal +=2;
    }
    else if (q1Answer === "question1option3"){
      ruby +=3;
    }
    if(q2Answer === "question2option1"){
      design +=1;
    }
    else if (q2Answer === "question2option2"){
      drupal +=2;
    }
    else if (q2Answer === "question2option3"){
      ruby +=3;
    }
    if(q3Answer === "question3option1"){
      design +=1;
    }
    else if (q3Answer === "question3option2"){
      drupal +=2;
    }
    else if (q3Answer === "question3option3"){
      ruby +=3;
    }
    if(q4Answer === "question4option1"){
      design +=1;
    }
    else if (q4Answer === "question4option2"){
      drupal +=2;
    }
    else if (q4Answer === "question4option3"){
      ruby +=3;
    }
    if(q4Answer === "question5option1"){
      design +=1;
    }
    else if (q4Answer === "question5option2"){
      drupal +=2;
    }
    else if (q4Answer === "question5option3"){
      ruby +=3;
    }
    var result = "";

    if((ruby>drupal) && (ruby>design)){
      result = "<h2>Ruby</h2>";
    }
    else if ((drupal>ruby) && (drupal>design)){
      result = "<h2>drupal</h2>";
    }
    else if ((design>ruby) && (design>drupal)){
      result = "<h2>design</h2>";
    }
    else {
      result = "<h2>You should read up on all of the programming languages and decide!</h2>";
    }
    $("#results").html(result);
  });
});
