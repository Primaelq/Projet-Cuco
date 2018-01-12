$(document).ready(function()
{
  $(".chapter").click(function()
  {
    $(".chapter").css({"visibility" : "hidden"});
    $("#main_frame").attr('src', "chapters/" + this.id + ".html");

    $("#floating_frame").css({"animation-name" : "fade-in-bottom"});
    $("#floating_frame").css({"visibility" : "visible"});
  });

  $("#close_button").click(function()
  {
    $(".chapter").css({"visibility" : "visible"});
    $("#floating_frame").css({"animation-name" : "fade-out-bottom"});
    setTimeout(function ()
    {
      $("#floating_frame").css({"visibility" : "hidden"});
      $("#conclusion_panel").css({"visibility" : "hidden"});
    }, 800);
  });

  $("#sources_button").click(function()
  {
    $("#sources_panel").css({"animation-name" : "fade-in-bottom"});
    $("#sources_panel").css({"visibility" : "visible"});
  });

  $("#conclusion").click(function()
  {
    $("#conclusion_panel").css({"animation-name" : "fade-in-bottom"});
    $("#conclusion_panel").css({"visibility" : "visible"});
  });

  $("#close_button_source").click(function()
  {
    $("#sources_panel").css({"animation-name" : "fade-out-bottom"});
    setTimeout(function ()
    {
      $("#sources_panel").css({"visibility" : "hidden"});
    }, 800);
  });

  $("#close_button_conclusion").click(function()
  {
    $("#conclusion_panel").css({"animation-name" : "fade-out-bottom"});
    setTimeout(function ()
    {
      $("#conclusion_panel").css({"visibility" : "hidden"});
    }, 800);
  });
});

// Animations Trigger Spots
var chapters_trigger = 76;

$(window).scroll(function()
{
  var wheel_scroll = $(window).scrollTop() / ($(document).height() - $(window).height()) * 100;

  if(wheel_scroll >= chapters_trigger)
  {
    animate_chapters(4, 200, 1);
  }
});

function animate_chapters(i, delay, index)
{
  setTimeout(function ()
  {
    var id = "#chapter_" + index;
    $(id).css({'animation-play-state' : 'running'});

    if(--i)
    {
      index++;
      animate_chapters(i, delay, index);
    }

  }, delay);
}
