jQuery.noConflict();
jQuery(document).ready(function($) {
	
	"use strict";
  
	//SKILL BARS...
	animateSkillBars();
	$(window).scroll(function(){ 
		animateSkillBars(); 
	});
  
	//TABS...
	if($('ul.tabs').length > 0) {
		$('ul.tabs').tabs('> .dt-sc-tabs_content');
	}
	
	if($('ul.dt-sc-tabs-frame').length > 0){
		$('ul.dt-sc-tabs-frame').tabs('> .dt-sc-tabs-frame-content');
	}
	
	if($('ul.tabs').length > 0) {
		$('ul.tabs').tabs('> .dt-sc-tabs_content');
	}
	
	if($('ul.dt-sc-tabs').length > 0){
		$('ul.dt-sc-tabs').tabs('> .dt-sc-tabs-content');
	}
  
	if($('.dt-sc-tabs-vertical-frame').length > 0){
	
		$('.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content');
		
		$('.dt-sc-tabs-vertical-frame').each(function(){
			$(this).find("li:first").addClass('first').addClass('current');
			$(this).find("li:last").addClass('last');
		});
		
		$('.dt-sc-tabs-vertical-frame li').click(function(){
			$(this).parent().children().removeClass('current');
			$(this).addClass('current');
		});
		
	}
  
	//Custom tab jquery works...
	if($('.tabs-framed').length > 0){
	
		$('.custom-tabs-frame').tabs('> .custom-tabs-content').parent();
		
		$('.custom-tabs-frame').each(function(){
			$(this).find("li:first").addClass('first').addClass('current');
			$(this).find("li:last").addClass('last');
		});
		
		$('.custom-tabs-frame li').click(function(){
			$(this).parent().children().removeClass('current');
			$(this).addClass('current');
		});
	
	}
  
	/*Toggle shortcode*/
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	jQuery('.dt-sc-toggle-frame-set').each(function(){
		var $this = jQuery(this),
		$toggle = $this.find('.dt-sc-toggle-accordion');
		
		$toggle.click(function(){
			if( jQuery(this).next().is(':hidden') ) {
				$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
				jQuery(this).toggleClass('active').next().slideDown();
			}
			return false;
		});
		
		//Activate First Item always
		$this.find('.dt-sc-toggle-accordion:first').addClass("active");
		$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});/* Toggle Shortcode end*/
  
  
	$(window).load(function() {  
	
		//ATTORNEY CAROUSEL...
		if($(".dt-sc-attorney-carousel-wrapper").length) {
			$('.dt-sc-attorney-carousel').carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				prev: '.attorney-prev',
				next: '.attorney-next',
				height: 'variable',
				scroll: 1,				
				items: {
					width: 230,
					height: 'variable',
					visible: {
						min: 1,
						max: 4
					}
				}
			});
		}
		
	});
  
});

function animateSkillBars(){
	"use strict";
	
	var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
	jQuery('.dt-sc-progress'+applyViewPort).each(function(){
		var progressBar = jQuery(this),
		progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
		
		progressBar.find('.dt-sc-bar').css('background-color', progressBar.find('.dt-sc-bar').attr('data-bg-color'));
		
		if (!progressBar.hasClass('animated')) {
			progressBar.addClass('animated');
			progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
		}
	});
}

(function ($) {
    "use strict";
	
    $(".dt-sc-counter").each(function () {
        $(this).bind('inview', function (event, visible) {
            var $this = $(this),
			$counter = ($this.data("counter") !== undefined) ? $this.data("counter") : "3000";

            if (visible === true && !$this.hasClass('dc-already-counted')) {
				$this.find('.dt-sc-counter-number').countTo({
					from: 0,
					to: $counter,
					speed: 6000,
					refreshInterval: 100
				});
				$this.addClass('dc-already-counted');
            }
			
        });
    });

})(jQuery);