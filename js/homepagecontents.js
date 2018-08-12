//The hidden navbar, to navigate between lessons
$(function (){
    document.getElementById("socialHeader").scrollIntoView({block:"end"});
  $('#homepageoptions1').hide();
  $('#homepageoptions2').hide();
  $('#parallax2').hide();
  $('#parallax3').hide();

  $('#learn').on('click',function(){
    $('#learnAbout').hide();
    $('#learnAboutContent').hide();
      $('#homepageoptions1').show();
      $('#parallax2').show();
      $('#whattolearn').html('code');
      $('#knowaboutoptions').html('<a title="Why Code?"><button class="cats" id="learnWhyCode"><span>Why learn to code</span></button></a><a title="Computers"><button class="cats" id="learnComputers"><span>How computers use it</span></button></a><a title="Projects"><button class="cats" id="learnProjects"><span>How to make things</span></button></a>');
      document.getElementById("homepageoptions1").scrollIntoView({behavior:"smooth", block:"start"});
      $('#learnComputers').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('How Do Computers Use Code?');
          $('#learnAboutContent').show().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/OAx_6-wdslM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
      });
      $('#learnWhyCode').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Why Should I Learn How To Code?');
          $('#learnAboutContent').show().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/aFF8PYDU0D8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
      });
      $('#learnProjects').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Make Things With Code');
          $('#learnAboutContent').show().html('Lots of Fun Projects Coming Soon!');

      });
});

$('#inquire').on('click',function(){
  $('#learnAbout').hide();
    $('#homepageoptions1').show();
    $('#parallax2').show();
    $('#whattolearn').html('CodeKCS');
    document.getElementById("homepageoptions1").scrollIntoView({behavior:"smooth", block:"start"});
    $('#knowaboutoptions').html('<a title="The CodeKCS Project"><button class="cats" id="learnCodeKCS"><span>The CodeKCS Project</span></button></a><a title="Curriculum"><button class="cats" id="learnCurriculum"><span>The Class Curriculum</span></button></a><a title="CodeKCS Club"><button class="cats" id="learnCodeKCSClub"><span>The KCS Code Club</span></button></a>');
    $('#learnCodeKCS').on('click',function(){
        document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
        $('#learnAbout').show().html('Intro to the CodeKCS Project');
        $('#learnAboutContent').show().html('<p>Check out this interview video made by Han Davis for the Akaku Ybeam program.It is a good introduction and background to the Code Kihei Charter project.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/p5lorCKeFW0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><p><a href="http://seniorprojects.sophiaisfabulous.com/seniorproject.html">Click here</a> to learn more about the process of designing the project. <a href="https://thegiraffe.github.io/seniorprojectjournal/">Senior Project Journal</a></p>');
    });
    $('#learnCurriculum').on('click',function(){
        document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
        $('#learnAbout').show().html('The Class Curriculum');
        $('#learnAboutContent').show().html('<p>This section is being updated with more curriculum ideas. For right now, here are some materials from the class:</p><a href="files/curriculumdocs/CodeKCSDay0.pdf"><button class="cats"><span>Scratch Assignment</span></button></a><br><a href="files/curriculumdocs/CodeKCSLesson2.pdf"><button class="cats"><span>HTML+CSS+Git</span></button></a><br><a href="files/Syllabus.pdf"><button class="cats"><span>Original Syllabus</span></button></a><br><a href="files/Pathways.pdf"><button class="cats"><span>Pathways idea from original brainstorming</span></button></a>');
    });
    $('#learnCodeKCSClub').on('click',function(){
        document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
        $('#learnAbout').show().html('The KCS Code Club');
        $('#learnAboutContent').show().html('Starts Thursday April 5! Lab II, after school. Join us! :)');

    });
});


});
