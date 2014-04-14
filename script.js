$(document).ready(function() {


$('form').submit(function(e){
    e.preventDefault();
	
});
$('form input[type=radio]').click(function() {
    $('input[type=submit]').prop('disabled',false);

});

i = 1;

$('#q1 input[type=submit]').click(function() {
      
      $('#q1').addClass('hidden');
	  $('#q2').removeClass('hidden');
	  getAnswer(i);
	  
  });
  

  $('#q2 input[type=submit]').click(function() {
      
      $('#q2').addClass('hidden');
	  $('#q3').removeClass('hidden');
	  i=2;
	  getAnswer(i);
	  
	  
  });
  
  $('#q3 input[type=submit]').click(function() {
      $('#q3').addClass('hidden');
	  $('#q4').removeClass('hidden');
	  i=3;
	  getAnswer(i);
	  
  });
  
  }); //end document.ready