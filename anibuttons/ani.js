//  Write your code here
$('SELECTOR').on('EVENT TYPE', function() {
    /* DO SOMETHING */
  })
  
  $('.myButton').on('click', function() {
    alert('Button clicked!')
  })
  
  
  $('.myDiv').on('mouseover', function() {
    // 'this' is the element that triggered the mouseover event
    $(this).css('background-color', 'yellowgreen')
  })
  $(document).on('keydown', function(event) {
    if (event.key === 'Backspace') {
     console.log('Backspace key was pressed')
    } else {
      console.log(event.key)
    }
  })
  
  $('input[type="text"]').on('focus', function() {
    console.log('Input was focused')
  })
  
  
  $('input[type="text"]').on('blur', function() {
    console.log('Input was blurred')
  })
  
  $('input[type="text"]').on('input', function(e) {
    console.log('Input event: ', e.target.value)
  })
  
  $('input[type="text"]').off('input')
  
  $('input[type="text"]').on('change', function(e) {
    console.log('Change event: ', e.target.value)
  })
  $('form').on('submit', function(event) {
    event.preventDefault();
    // Do something when the form is submitted
    console.log('Submit event target: ', event.target.value)
  })
  $('#fade-in-button').on('click', function() {
    $('#fade-in-element').fadeIn(10000)
  })
  $('#fade-out-button').on('click', function() {
    $('#fade-out-element').fadeOut(1000)
  })
  $('#fade-toggle-button').on('click', function() {
    $('#fade-toggle-element').fadeToggle(1000)
  })
  $('#show-button').on('click', function() {
    $('#show-hide-element').show(1000)
  })
  $('#hide-button').on('click', function() {
    $('#show-hide-element').hide(1000)
  })
  $('#slide-up-button').on('click', function() {
    $('#slide-up-element').slideUp(1000)
  })
  $('#slide-down-button').on('click', function() {
    $('#slide-down-element').slideDown(1000)
  })
  $('#slide-toggle-button').on('click', function() {
    $('#slide-toggle-element').slideToggle(1000)
  })
  $('#animate-button').on('click', function() {
    $('#animate-element').animate({
      width: '200px',
      height: '200px',
      opacity: 0.5,
    }, 1000)
  })
  