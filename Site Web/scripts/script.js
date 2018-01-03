$(window).scroll(function()
{
  var wheel_scroll = $(this).scrollTop();

  if(wheel_scroll >= 700)
  {
    $("#dummy_animation").css({'animation-play-state' : 'running'});

    if(wheel_scroll >= 1400)
    {
      $("#dummy").css({'animation-play-state' : 'running'});
    }
  }
})
