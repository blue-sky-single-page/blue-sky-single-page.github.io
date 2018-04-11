$(document).ready(function(){
	
	/*By doing this, we hide the <ul> element that contains the sign buttons and show the sign in form.  */
			$('#sign-btn').on('click', function(e){
		$(e.currentTarget).closest('ul').hide();
		$('form#signin').fadeIn('fast');
	});//end on


	}); //end ready

