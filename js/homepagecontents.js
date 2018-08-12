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
      $('#knowaboutoptions').html('<a title="Why Code?"><button class="cats" id="learnWhyCode"><span>Why learn to code</span></button></a><a title="Computers"><button class="cats" id="learnComputers"><span>Cool Code Resources</span></button></a><a title="Projects"><button class="cats" id="learnProjects"><span>How to make things</span></button></a>');
      document.getElementById("homepageoptions1").scrollIntoView({behavior:"smooth", block:"start"});
      $('#learnComputers').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Code and Computer Science Resources');
          $('#learnAboutContent').show().html('<p>How Computers Work Youtube Series:</p><iframe width="560" height="315" src="https://www.youtube.com/embed/OAx_6-wdslM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br><a title="A code education platform created by Google with the intent of getting more girls into code and computer science. Has quite a few interesting projects that all use the block-based language Blockly. While the target audience is preteen girls, there are lots of cool activities on this site for males and females of any age." href="https://www.madewithcode.com/"><button class="cats" ><span>Made W/ Code</span></button></a><a title="Code your own music with Sonic Pi!" href="https://sonic-pi.net/"><button class="cats" ><span>Sonic Pi</span></button></a><a title="A cool online code editor, great for people learning how to code" href="https://thimble.mozilla.org/en-US/"><button class="cats" ><span>Mozilla Thimble</span></button></a><a title="Lots of cool HTML/CSS/JS projects for inspiration. Almost like a social network for sharing and borrowing neat code. href="https://codepen.io/"><button class="cats" ><span>CodePen</span></button></a><a title="Take Intro to Computer Science from Harvard through EdX" href="https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/"><button class="cats" ><span>CS50 Course</span></button></a>');
      });
      $('#learnWhyCode').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Why Should I Learn How To Code?');
          $('#learnAboutContent').show().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/aFF8PYDU0D8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br><b>A Few Reasons To Learn How To Code:</b><br>Create an awesome portfolio<br>Troubleshoot software issues<br>Make music with code<br>Digital storytelling & game design<br>Entreprenuership - put your ideas into action!');
      });
      $('#learnProjects').on('click',function(){
          document.getElementById("parallax2").scrollIntoView({behavior:"smooth", block:"end"});
          $('#learnAbout').show().html('Make Things With Code');
          $('#learnAboutContent').show().html('<a href="https://scratch.mit.edu/studios/4791865/"><button class="cats" ><span>Class Scratch Projects Studio</span></button></a><br><a href="https://github.com/CodeKiheiCharter"><button class="cats" ><span>Github Group</span></button></a><p>Fun projects coming soon!</p>');

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
