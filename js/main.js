 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	// Loading page
	var loaderPage = function() {
		$(".site-loader").fadeOut("slow");
	};
	loaderPage();
	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
				autoplay: true,
		    margin: 20,
		    nav: false,
		    dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 1
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}

		if ( $('.slide-one-item').length > 0 ) {
			$('.slide-one-item').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    pauseOnHover: false,
		    nav: true,
		    animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
		    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		  });
	  }


	  if ( $('.nonloop-block-4').length > 0 ) {
		  $('.nonloop-block-4').owlCarousel({
		    center: true,
		    items:1,
		    loop:false,
		    margin:10,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	          items:1
	        }
		    }
			});
		}

	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		if ( $('#date-countdown').length > 0 ) {
			$('#date-countdown').countdown('2020/10/10', function(event) {
			  var $this = $(this).html(event.strftime(''
			    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
			    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
			    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
			    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
			    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
			});
		}
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	

});



document.addEventListener('DOMContentLoaded', function () {
    const swiperConfigs = document.querySelectorAll('.swiper-config');
    swiperConfigs.forEach(config => {
      const swiperEl = config.closest('.swiper');
      new Swiper(swiperEl, JSON.parse(config.innerHTML));
    });
  });







  document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".nav-link");
	const description = document.getElementById("description");
	const descriptionImage = document.getElementById("description-image");
  
	const departmentData = {
	  cardiology: {
		title: "Cardiology",
		content:
		  "Cardiology is a branch of medicine that deals with disorders of the heart and blood vessels. Our experts provide world-class treatments for heart health.",
		image: "assets/img/departments-1.jpg",
	  },
	  neurology: {
		title: "Neurology",
		content:
		  "Neurology focuses on disorders of the nervous system. Our department offers advanced diagnostic and therapeutic solutions.",
		image: "assets/img/departments-2.jpg",
	  },
	  hepatology: {
		title: "Hepatology",
		content:
		  "Hepatology is the branch of medicine that deals with the study, prevention, and management of liver-related diseases.",
		image: "assets/img/departments-3.jpg",
	  },
	  pediatrics: {
		title: "Pediatrics",
		content:
		  "Pediatrics specializes in the care of infants, children, and adolescents. We provide comprehensive pediatric services for your child’s health.",
		image: "assets/img/departments-4.jpg",
	  },
	  eyecare: {
		title: "Eye Care",
		content:
		  "Eye Care focuses on vision and eye health. Our department offers a wide range of treatments, from basic check-ups to advanced surgeries.",
		image: "assets/img/departments-5.jpg",
	  },
	};
  
	navLinks.forEach((link) => {
	  link.addEventListener("click", function (event) {
		event.preventDefault();
  
		const id = link.getAttribute("data-id");
		const data = departmentData[id];
  
		if (data) {
		  description.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
		  descriptionImage.style.display = "block";
		  descriptionImage.src = data.image;
		}
	  });
	});
  });
  


// Blog Slider JavaScript
const slider = document.querySelector('.blog-slider');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentIndex = 0;
const cards = document.querySelectorAll('.blog-card');
const totalCards = cards.length;
const cardsPerSlide = window.innerWidth >= 768 ? 3 : 1;

// Function to update slider position
function updateSliderPosition() {
  const slideWidth = slider.offsetWidth / cardsPerSlide;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event Listeners for Navigation
prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSliderPosition();
});

nextButton.addEventListener('click', () => {
  const maxIndex = Math.ceil(totalCards / cardsPerSlide) - 1;
  currentIndex = Math.min(currentIndex + 1, maxIndex);
  updateSliderPosition();
});

// Resize Event to Recalculate
window.addEventListener('resize', () => {
  updateSliderPosition();
});
