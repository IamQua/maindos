console.log("OUTPUT WILL APPEAR BELOW\n\n")

$('.myDiv').css('background-color', 'greenyellow');

$('.myDiv').css({
   'font-size': '24px',
   'font-weight': 'bold'
 });

 const bgColor = $('.myOtherDiv').css('background-color')

 $('.cool-img1').attr('src', 'https://picsum.photos/600/600')

 $('.cool-img2').attr({
  'src': 'https://picsum.photos/600/600?random=2',
  'alt': 'A random image'
});

$('.cool-img2').attr('src')
$("h1").text("Hello, jQuery!").css("background-color", "pinkred")
$('.myOtherDiv2').append('<p>Hello World!</p>')
$('.myOtherDiv3').remove()
$('.myOtherDiv4').empty()