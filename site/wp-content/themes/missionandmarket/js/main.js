(function ($) {
	"use strict";
	$(document).ready(function() {
		
		
	//------------------------------------//
	//Mobile Full Screen Navigation//
	//------------------------------------//
	$('#toggle').click(function() {
	 $(this).toggleClass('active');
	 $('#overlay').toggleClass('open');
	 $('body').toggleClass('overflow-hidden');
	});
	
	
	
	//------------------------------------//
  //Header Animation//
  //------------------------------------//
  $(window).scroll(function(){
    $("header .scroll-container").css("opacity", 1 - $(window).scrollTop() / 50);
    $("header .quick-info-container").css("opacity", 1 - $(window).scrollTop() / 150); 
    $("header .cycle-slideshow-container").css("opacity", 1 - $(window).scrollTop() / 500);
    $("header .animation-container").css("opacity", 1 - $(window).scrollTop() / 500); 
  });
		
	
	//------------------------------------//
	//Scroll Animations//
	//------------------------------------//
	var $animation_elements = $('.fadeIn, .moveUp, .half-div, .cycle-slideshow, .line-box, .menu-links-container ul, .menu-items li');
		var $window = $(window);
		
		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);
		 
		  $.each($animation_elements, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);
		 
		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		      $element.addClass('in-view');
		    } 
		  });
		}
		
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
	
	
	
	//------------------------------------//
  //Scroll to Top//
  //------------------------------------//
  jQuery(document).ready(function($){
		// browser window scroll (in pixels) after which the "back to top" link is shown
		var offset = 300,
			//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
			offset_opacity = 1200,
			//duration of the top scrolling animation (in ms)
			scroll_top_duration = 700,
			//grab the "back to top" link
			$back_to_top = $('.scroll-top');
	
		//hide or show the "back to top" link
		$(window).scroll(function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('scroll-visible') : $back_to_top.removeClass('scroll-visible scroll-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('scroll-fade-out');
			}
		});
	
		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});
	
	});
	
	
	//------------------------------------//
	//Anime//
	//------------------------------------//
	// Mission + Market Text
		$('.h1-animation').each(function(){
		  $(this).html($(this).text().replace(/([^\x00-\x180]|\w)/g, "<span class='letter'>$&</span>"));
		});
		
		anime.timeline({loop: false})
		  .add({
		    targets: '.h1-animation .letter',
		    translateY: [150,0],
		    easing: "easeOutExpo",
		    duration: 1400,
		    delay: function(el, i) {
		      return 40 * i;
		    }
		  })
		  
	
	// Mission + Market Text
		$('.scroll').each(function(){
		  $(this).html($(this).text().replace(/([^\x00-\x180]|\w)/g, "<span class='scroll-letter'>$&</span>"));
		});
		
		anime.timeline({loop: true})
		  .add({
		    targets: '.scroll-letter',
		    opacity: [0.2,1],
		    easing: "easeOutExpo",
		    duration: 1700,
		    delay: function(el, i) {
		      return 200 * i;
		    }
		  })	
		  
		  
	//------------------------------------//
  //Date Picker//
  //------------------------------------//
	$(document).ready(function() {
			 $('.datepicker').datepicker({
				     autoclose: true,
				}).on('changeDate', function (ev) {
				     $(this).datepicker('hide');
				});
    });		    
		  
			
	
	
	
	});
}(jQuery));	