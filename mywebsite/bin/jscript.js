$(document).ready(function() {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	
	$('.top-nav').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	
	$('.nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	
	$('.submit').on('click', function (event){	
		var name = $('.name').val()
		var email = $('.email').val()
		var subject = $('.subject').val()
	});
	
	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});	
});