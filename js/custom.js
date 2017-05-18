jQuery(document).ready(function($){
	
	"use strict";
		
	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;
		
		if( currentWidth <= 319 ){
			$("div.fixed-help-form").animate( { right: -200 } );
			$(".fixed-help-form-icon").click(function(e){
				var $this = $(this);	
				if($this.hasClass('form-open')){
					$("div.fixed-help-form").animate({right: -200},function(){$this.removeClass('form-open'); $this.parents('.fixed-help-form').removeClass('helpform-wrapper-open');});
				}else{
					$("div.fixed-help-form").animate({right: 0},function(){$this.addClass('form-open'); $this.parents('.fixed-help-form').addClass('helpform-wrapper-open');});
				}
				e.preventDefault();
			});
		} else {
			$("div.fixed-help-form").animate( { right: -300 } );
			$(".fixed-help-form-icon").click(function(e){
				var $this = $(this);	
				if($this.hasClass('form-open')){
					$("div.fixed-help-form").animate({right: -300},function(){$this.removeClass('form-open'); $this.parents('.fixed-help-form').removeClass('helpform-wrapper-open');});
				}else{
					$("div.fixed-help-form").animate({right: 0},function(){$this.addClass('form-open'); $this.parents('.fixed-help-form').addClass('helpform-wrapper-open');});
				}
				e.preventDefault();
			});
		}
		
		
     	$('.comment-form').validate();
		$('.qtyplus').click(function(e){
			e.preventDefault();
			var currentVal = parseInt($('input[name="quantity"]').val());
			if (!isNaN(currentVal)) {
				$('input[name="quantity"]').val(currentVal + 1);
			} else {
				$('input[name="quantity"]').val(0);
			}
		});
	
		$(".qtyminus").click(function(e) {
	
			e.preventDefault();
			var currentVal = parseInt($('input[name="quantity"]').val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$('input[name="quantity"]').val(currentVal - 1);
			} else {
				$('input[name="quantity"]').val(0);
			}
		});
	
	
	//Our practices page content toggle
	$("a.dt-sc-toggle-practice").click(function( event ){
		event.preventDefault();
		var $this = $(this);
		$this.parents('.column').find( "div.dt-sc-practice-content" ).slideToggle( "slow", function() {
			$this.toggleClass('expanded');
			if($this.hasClass('expanded')) {
				$this.html(' Collapse <span class="fa fa-angle-double-up"></span>');
			} else {
				$this.html(' Expand <span class="fa fa-angle-double-down"></span>');
			}
		});
	});
	
	$("html").niceScroll({zindex:99999,cursorborder:"1px solid #424242"});
	//STICKY MENU...
	$("#menu-container").sticky({ topSpacing: 0 });
	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		var $menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(event){
		event.preventDefault();
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(400);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(400);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});
  
	/*Menu */
	function megaMenu() {
		var screenWidth = $(document).width(),
		containerWidth = $("#header .container").width(),
		containerMinuScreen = (screenWidth - containerWidth)/2;
		
		if( containerWidth == screenWidth ){
							
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();				
				
				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth ){
					var SwMinuOffset = screenWidth - ParentLeftPosition;
					var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
					marginFromLeftActual = (marginFromLeft) + 25;
					marginLeftFromScreen = "-"+marginFromLeftActual+"px";
					$(this).css('left',marginLeftFromScreen);
			  }
			});		
				
		} else {
		
		
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();
				
				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
				
					var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
					var marginLeftFromContainer = containerMinuScreen + marginFromLeft + 20;
					
					if( MegaMenuChildContainerWidth > containerWidth ){
						
						var MegaMinuContainer	= ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10; 			
						var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
						marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
						$(this).css('left',marginLeftFromContainerVal);
						
					} else {
						
						marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
						$(this).css('left',marginLeftFromContainer);
					
					}
				
				}
			});
		
		}
	}
	
	
	megaMenu();
	$(window).smartresize(function(){
		megaMenu();
	});

	//Menu Hover Start
	function menuHover() {
		$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(
			function(){
				if( $(this).find(".megamenu-child-container").length  ){
					$(this).find(".megamenu-child-container").stop().fadeIn('fast');
				} else {
					$(this).find("> ul.sub-menu").stop().fadeIn('fast');
				}
			},
			function(){
				if( $(this).find(".megamenu-child-container").length ){
					$(this).find(".megamenu-child-container").stop(true, true).hide();
				} else {
					$(this).find('> ul.sub-menu').stop(true, true).hide(); 
				}
			}
		);
	}//Menu Hover End

	if( !isMobile ){
		if( currentWidth > 767 ){
			menuHover();
		}
	}
	
		
	//MAIN MENU...
	$("#main-menu ul li:has(ul)").each(function(){
		$(this).addClass("hasSubmenu");
	});
	
	//GOOGLE MAPS...
	var $map = $('#map');
	if( $map.length ) {
		$map.gMap({
			scrollwheel: false,
			address: 'No: 58 A, East Madison St, Baltimore, MD, USA',
			zoom: 16,
			markers: [ { 'address' : 'No: 58 A, East Madison St, Baltimore, MD, USA' } ]
		});
	}
	 
	//GO TO TOP...
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
	
	//NEWSLETTER AJAX SUBMIT...
	$('form[name="frmnewsletter"]').submit(function () {
		
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('Something went wrong!');
				   },
				  success: function (response) {
					$('#ajax_subscribe_msg').html(response);
					$('#ajax_subscribe_msg').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="frmnewsletter"]').validate({
		rules: { 
			mc_email: { required: true, email: true }
		},
		errorPlacement: function(error, element) { }
	});

	//CONTACT FORM VALIDATION & MAIL SENDING....
	$('form[name="frmcontact"]').submit(function () {
		
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('Something went wrong!');
				   },
				  success: function (response) {
					$('#ajax_contact_msg').html(response);
					$('#ajax_contact_msg').slideDown('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="frmcontact"]').validate({
		rules: { 
			txtname: { required: true },
			txtemail: { required: true, email: true },
			txtsubject: { required: true }
		},
		errorPlacement: function(error, element) { }
	});

	//CONSULTATION REQUEST & MAIL SENDING....
	$('#direct_consult, #phone_consult').click(function() {
			
		var This = $(this).parents('.consultation-form');
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize())+ "&consult_submit="+ $(this).attr("value");
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('Something went wrong!');
				   },
				  success: function (response) {
					$('#ajax_consultation_msg').html(response);
					$('#ajax_consultation_msg').slideDown('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="frmconsultation"]').validate({
		rules: { 
			name: { required: true },
			emailid: { required: true, email: true },
			phone: { required: true }
		},
		errorPlacement: function(error, element) { }
	});

	//HAVE A QUESTION & MAIL SENDING....
	$('form[name="frmquestions"]').submit(function () {
				
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('Something went wrong!');
				   },
				  success: function (response) {
					$('#ajax_questions_msg').html(response);
					$('#ajax_questions_msg').slideDown('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="frmquestions"]').validate({
		rules: { 
			name: { required: true },
			emailid: { required: true, email: true },
			phone: { required: true }
		},
		errorPlacement: function(error, element) { }
	});
	
	//HELP FORM & MAIL SENDING....
	$('form[name="helpform"]').submit(function () {
				
		var This = $(this);
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('Something went wrong!');
				   },
				  success: function (response) {
					$('#ajax_helpform_msg').html(response);
					$('#ajax_helpform_msg').slideDown('slow');
				 }
			});
		}
		return false;
		
    });
	$('form[name="helpform"]').validate({
		rules: { 
			hf_first_name: { required: true },
			hf_last_name: { required: true },
		},
		errorPlacement: function(error, element) { }
	});
	
	//Parallax Sections...
	$('.dt-sc-parallax-section').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible == true) {
				$(this).parallax("50%", 0.3, true);
			} else {
				$(this).css('background-position','');
			}
		});
	});
	
	$("select[name=cause]").change(function(event){
		var total_items = $('.attorney_list .attorney_content').length;
		if($(this).val() == 'all') {
			$('.attorney_list .attorney_content').slideDown();
			$('.attorney_list .result-count').html('Showing ' + total_items + ' of ' + total_items);
		} else {
			var sorted_items = $('.attorney_list .'+$(this).val()).length;
			$('.attorney_list .attorney_content').slideUp();
			$('.attorney_list .'+$(this).val()).slideDown();
			$('.attorney_list .result-count').html('Showing ' + sorted_items + ' of ' + total_items);
		}
	});	
	
});