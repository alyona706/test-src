;(($)=> {
	'use strict';

	$('a[href*="#"]').on('click', function() {
		event.preventDefault();
		$('body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);
	});
	
	$('.mg-post__header').on('click', function() {
		if ( $(this).parent('.mg-post').hasClass('opened') ) {
			$(this).parent('.mg-post').removeClass('opened');
			$(this).siblings('p').slideUp();
		} else {
			$('.mg-post').removeClass('opened');
			$('.mg-post__header').siblings('p').slideUp();
			$(this).parent('.mg-post').addClass('opened');
			$(this).siblings('p').slideDown();
		}
	});

	$(window).on('load', function() { 
		$('.mg-banner-slider').slick({
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	});

})(jQuery);