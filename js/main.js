$(document).ready(function(){	
	/* Intro Section: By doing this, we hide the <ul> element that contains the sign-in buttons and show the sign in form.  */
		$('#sign-btn').on('click', function(e){
		$(e.currentTarget).closest('ul').hide();
		$('form#signin').fadeIn('fast');
	});//end on

/* SCROLL-TO-TOP PAGE ARROW: ----------------------------------------------------------
		 firstly, shall define the current window scroll position with method .scrollTop() then,
		 when the arrow shall appear visible - fadeIn/fadeOut after  scrolling down of 500px , with the delay of 300ms */
		var scrolDown_px = 500;
			var delayShow_ms = 300;
			$(window).scroll(function(){
				if ($(this).scrollTop() > scrolDown_px) {
					$('.back-to-top').fadeIn(delayShow_ms);
				}else{
					$('.back-to-top').fadeOut(delayShow_ms);
				}
			});//end scroll
			/*second, shal make click-event returning back to the 
		top of the window with jquery function .animate()*/
		$('.back-to-top a').click(function(event){
			event.preventDefault();
			$('html, body').animate(
				{scrollTop:0},
				delayShow_ms
				);
			return false;
		});//end click

		$('[data-toggle="tooltip"]').tooltip();
/*-----------------------------------------------------------------------------------------*/
}); //end ready

