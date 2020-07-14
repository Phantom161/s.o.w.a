$(document).ready(function () {

	$('.team-slider').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/SVG/left-arrow.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/SVG/right-arrow.svg" alt=""></img>',
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

});