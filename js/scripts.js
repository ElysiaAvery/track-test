$(document).ready(function() {
  $("form#epic-test").submit(function(event) {
    event.preventDefault();
    var name = $('#message').attr('name');

    alert(name);
    console.log(name);

    var q1Answer = $("input:radio[name=options1]:checked").val();
    var q2Answer = $("input:radio[name=options2]:checked").val();
    var q3Answer = $("input:radio[name=options3]:checked").val();
    var q4Answer = $("input:radio[name=options4]:checked").val();
    var q5Answer = $("input:radio[name=options5]:checked").val();

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
    if(q5Answer === "question5option1"){
      design +=1;
    }
    else if (q5Answer === "question5option2"){
      drupal +=2;
    }
    else if (q5Answer === "question5option3"){
      ruby +=3;
    }

    var result = "";

    if(ruby>drupal && ruby>design){
      result = "<h2>Ruby and Rails might be the best option for you! This track will teach you how to build interactive web apps.</h2>";
    }
    else if(drupal>ruby && drupal>design){
      result = "<h2>PHP and Drupal might be best for you! This path is great if you are detail-oriented and focused on content.</h2>";
    }
    else if(design>ruby && design>drupal){
      result = "<h2>Design and CSS might be best for you! If you enjoy how applications and sites look, look no further!</h2>";
    }
    else {
      result = "<h2>You should read up on all of the programming languages and decide!</h2>";
    }
    $("#results").html(result);
  });
});
