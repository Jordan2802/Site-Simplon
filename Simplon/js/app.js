$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.slider').slider();
  $('#trigger').click(function() {
    $('#overlay').fadeIn(300);
  });
  $('#close').click(function() {
    $('#overlay').fadeOut(300);
  });
  $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'bottom',
    hoverEnabled: false
  });
});
