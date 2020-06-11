$('.slider').slick({
	mobileFirst: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,


	 responsive: [{

      breakpoint: 400,
      settings: {
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
      }
      
    }, {

      breakpoint: 767,
      settings: {
          infinite: false,
		  slidesToShow: 2,
		  slidesToScroll: 2,

      	}

    }, {

      breakpoint: 1420,
	  settings: 'unslick'

     }]

});






