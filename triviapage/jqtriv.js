var colors = ["red","yellow", "green", "blue",];
$("h1").click(
  function() { 
    var i = $(this).data("color") || 0;   
    $(this).animate({
      color: colors[i]
    }, 1000);
   
    i = (i + 1) % colors.length;
    $(this).data("color", i);
  }
);



$(document).ready(function() { 
  var angle = 0; 
  var speed = 1; 
  var increment = .00333;
 
  var rotateBackground = function() {
    angle += increment; 
    $("#pictwist").css("transform", "rotate(" + angle + "deg)");
  };
 
  setInterval(rotateBackground, speed);
});