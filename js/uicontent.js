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
    $('#syntaxlinks').show();
    $('.helptext').show();
    $('.helptexttitle').html("Click on a helpsheet to download it.");
    $('.helptexttext').html("Why do we use Syntax Helpsheets? Programming isn't about the syntax or the exact commands you type into the text editor or IDE. ");
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

  }

  });
});

//Previous and Next arrows functionality
var welcometext=("Welcome to CodeKCS. Over the course of these four weeks, you will learn the basics of code from a creative perspective. We don't expect you to become a code wizard in four weeks - we don't even");
$(function(){
  $('.lessoncontent').html(welcometext)
  $('#previous').on('click',function(){


});
});
