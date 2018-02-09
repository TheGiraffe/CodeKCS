//The hidden navbar, to navigate between lessons
$(function (){
  $('#hiddennav').hide();
$('#codekcstitle').on('click',function(){

if($('#hiddennav').is(":visible")){
    $('#hiddennav').hide();
}else{
  $('#hiddennav').show();
}

});

});
//Dropdown menus for the visible navbar

//Syntax Helpsheet Dropdown
$(function(){
  $('#syntaxlinks').hide();
  $('.helptext').hide();
  $('#hiddennav').css("margin-top","-30px");

$('#syntaxhelp').on('click',function(){
  if($('#syntaxlinks').is(":visible")){
      $('#syntaxlinks').hide();
      $('.helptext').hide();
      $('#hiddennav').css("margin-top","-30px");
  }else{
      $('.hiddenoptions').hide()
    $('#syntaxlinks').show();
    $('.helptext').show();
    $('.helptexttitle').html("Click on a helpsheet to download it.");
    $('.helptexttext').html("Why do we use Syntax Helpsheets? Programming isn't about the syntax or the exact commands you type into the text editor or IDE. Your brain should be focused on how the code functions, as opposed to memorizing how the syntax looks. So please use these helpsheets to guide your programming, if necessary.");
    $('#hiddennav').css("margin-top","0px");
  }

});
});

$(function(){

  $('.hiddenoptions').hide()
  $('#projectsbutton').on('click',function(){
  if($('.hiddenoptions').is(":visible")){
  $('.hiddenoptions').hide()
  }else{
  $('.hiddenoptions').show()
  $('#syntaxlinks').hide();
  $('.helptext').hide();
  $('#hiddennav').css("margin-top","-30px");
  }

  });
});


//Previous and Next arrows functionality
var welcometext=("CodeKCS is a project-based curriculum for learning code. The idea here is that students often learn best through doing things themselves and by working on projects that mean something to them. There is also a mentorship aspect of this course. The idea of the self-taught programmer is inherently flawed, because mentors are a valuable part of the process of learning code. Mentors can prevent students from making inefficient mistakes and can pass along lots of advice to make the learning curve smoother. Through this course, students will be provided with guidance and frequent check-ins with the teacher to make sure they’re getting the most out of the curriculum. Should the students wish to further pursue programming after the end of the course, the teacher can get them in contact with more experienced mentors that can continue to guide them in this hobby or future career.<br>It is important to note that the purpose of this course is not to turn every student into an aspiring professional programmer or a future STEM major. It is simply to introduce the students to a potentially helpful skill that they can choose to use in the future to add to their existing interests.Coding at this level is like any skill such as writing, drawing, or running. You can have any of those skills as hobbies, but writing for fun every now and then does not mean you have to become a professional author someday. There are varying levels of commitment and detail to any hobby or skill. Hopefully this course will help you acquire a basic level of skill in programming that you can further build upon in the future if you wish.");
$(function(){
  $('.lessoncontent').html(welcometext)
  $('#previous').on('click',function(){


});
});
