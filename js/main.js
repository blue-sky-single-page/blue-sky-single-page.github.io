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

/*============PAGINATION AJAX .LOAD START=====================================================*/
$('#button-features').click(function(){
	$('#features-main').load('index.html #features-main', function(){
		$(this).hide().fadeIn(900);
	});
	return false;// return false - shall avoid the page scroll to top as default action of 'a' click
});//end .click #button-features
$('#button-brands').click(function(){
	$('#features-main').load('features1.html #brands', function(){
		$(this).hide().fadeIn(900);
	});
	return false;// return false - shall avoid the page scroll to top as default action of 'a' click
});//end .click #button-brands$('#button-brands #button-innovations').removeClass('active');
$('#button-innovations').click(function(){
	$('#features-main').load('features2.html #innovations', function(){
		$(this).hide().fadeIn(900);
	});
	return false;// return false - shall avoid the page scroll to top as default action of 'a' click
});//end .click #button-innovations	

/*============PAGINATION AJAX .LOAD END=====================================================*/
}); //end ready

