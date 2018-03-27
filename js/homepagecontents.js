//The hidden navbar, to navigate between lessons
$(function (){
    document.getElementById("socialHeader").scrollIntoView({block:"end"});
  $('#homepageoptions1').hide();
  $('#homepageoptions2').hide();
  $('#parallax2').hide();
  $('#parallax3').hide();

  $('#learn').on('click',function(){
    $('#learnAbout').hide();
      $('#homepageoptions1').show();
      $('#parallax2').show();
      $('#whattolearn').html('code');
      $('#knowaboutoptions').html('<a title="Why Code?"><button class="cats" id="learnWhyCode"><span>Why learn to code</span></button></a><a title="Computers"><button class="cats" id="learnComputers"><span>How computers use it</span></button></a><a title="Projects"><button class="cats" id="learnProjects"><span>How to make things</span></button></a>');
      document.getElementById("homepageoptions1").scrollIntoView({behavior:"smooth", block:"start"});
      $('#learnComputers').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('How Do Computers Use Code?');
      });
      $('#learnWhyCode').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Why Should I Learn How To Code?');
      });
      $('#learnProjects').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Make Things With Code');
      });
});

$('#inquire').on('click',function(){
  $('#learnAbout').hide();
    $('#homepageoptions1').show();
    $('#parallax2').show();
    $('#whattolearn').html('CodeKCS');
    document.getElementById("homepageoptions1").scrollIntoView({behavior:"smooth", block:"start"});
    $('#knowaboutoptions').html('<a title="The CodeKCS Project"><button class="cats" id="learnCodeKCS"><span>The CodeKCS Project</span></button></a><a title="Curriculum"><button class="cats" id="learnCurriculum"><span>The Class Curriculum</span></button></a><a title="CodeKCS Club"><button class="cats" id="learnCodeKCSClub"><span>The KCS Code Club</span></button></a>');

});


});
