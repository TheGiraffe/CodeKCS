//The hidden navbar, to navigate between lessons
$(function (){
  $('#homepageoptions1').hide();
  $('#homepageoptions2').hide();
  $('#parallax2').hide();
  $('#parallax3').hide();
  $('#learn').on('click',function(){
      $('#homepageoptions1').show();
      $('#parallax2').show();
      $('#whattolearn').html('code');
      document.getElementById("homepageoptions1").scrollIntoView({behavior:"smooth", block:"start"});
});
$('#learnComputers').on('click',function(){
    document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
});
});
