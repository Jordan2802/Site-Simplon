$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
  });


  document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.fixed-action-btn');
     var instances = M.FloatingActionButton.init(elems, {
       direction: 'bottom',
       hoverEnabled: false
     });
   });
