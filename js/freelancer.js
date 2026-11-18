});// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

	/*============================================
	Filter Projects
	==============================================*/
	$('#filter-works a').click(function(e){
		e.preventDefault();

		$('#filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('#projects-container').masonry('reload');
		});
	});

	/*============================================
	Project Preview
	==============================================*/
	$('.project-item').click(function(e){
		e.preventDefault();

		var elem = $(this),
			title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">', 
			elemDataCont = elem.find('.project-description');

			slides = elem.find('.project-description').data('images').split(',');

		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
		}
		
		slidesHtml = slidesHtml + '</ul>';
		

		$('#project-modal').on('show.bs.modal', function () {
			$(this).find('#hdr-title').text(title);
			$(this).find('#sdbr-title').text(title);
			$(this).find('#project-content').html(descr);
			$(this).find('.screen').addClass('flexslider').html(slidesHtml);
			
			if(elemDataCont.data('category')){
				$(this).find('#sdbr-category').show().text(elemDataCont.data('category'))
			}else{$(this).find('#sdbr-category').hide();}
			
			if(elemDataCont.data('date')){
				$(this).find('#sdbr-date').show().text(elemDataCont.data('date'))
			}else{$(this).find('#sdbr-date').hide();}
			
			if(elemDataCont.data('client')){
				$(this).find('#sdbr-client').show().text(elemDataCont.data('client'))
			}else{$(this).find('#sdbr-client').hide();}
			
			if(elemDataCont.data('link')){
				var extLink = elemDataCont.data('link').split(',');
				$(this).find('#sdbr-link').show().find('a').text(extLink[0]).attr('href',extLink[1]);
			}else{$(this).find('#sdbr-link').hide();}
			
			if(elemDataCont.data('descr')){
				$(this).find('#sdbr-descr').show().text(elemDataCont.data('descr'))
			}else{$(this).find('#sdbr-descr').hide();}
			
			setTimeout(function(){
				$('.screen.flexslider').flexslider({
					prevText: '<i class="fa fa-angle-left"></i>',
					nextText: '<i class="fa fa-angle-right"></i>',
					slideshowSpeed: 3000,
					animation: 'fade',
					controlNav: false,
					pauseOnAction: false, 
					pauseOnHover: true,
					start: function(){
						$('#project-modal .screen')
						.addClass('done')
						.prev('.loader').fadeOut();
					}
				});
			},1000);
		}).modal();
		
	});

	$('#project-modal').on('hidden.bs.modal', function () {
		$(this).find('.loader').show();
		$(this).find('.screen')
			.removeClass('flexslider')
			.removeClass('done')
			.html('')
			.flexslider('destroy');
	});
	
	/*============================================
	Project Video Preview
	==============================================*/
	$('.project-item-v').click(function(e){
		e.preventDefault();

		var elem = $(this),
			title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">', 
			elemDataCont = elem.find('.project-description');

			slides = elem.find('.project-description').data('images').split(',');

		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<li><iframe src='+slides[i]+'></iframe></li>';
		}
		
		slidesHtml = slidesHtml + '</ul>';
		

		$('#project-modal').on('show.bs.modal', function () {
			$(this).find('#hdr-title').text(title);
			$(this).find('#sdbr-title').text(title);
			$(this).find('#project-content').html(descr);
			$(this).find('.screen').addClass('flexslider').html(slidesHtml);
			
			if(elemDataCont.data('category')){
				$(this).find('#sdbr-category').show().text(elemDataCont.data('category'))
			}else{$(this).find('#sdbr-category').hide();}
			
			if(elemDataCont.data('date')){
				$(this).find('#sdbr-date').show().text(elemDataCont.data('date'))
			}else{$(this).find('#sdbr-date').hide();}
			
			if(elemDataCont.data('client')){
				$(this).find('#sdbr-client').show().text(elemDataCont.data('client'))
			}else{$(this).find('#sdbr-client').hide();}
			
			if(elemDataCont.data('link')){
				var extLink = elemDataCont.data('link').split(',');
				$(this).find('#sdbr-link').show().find('a').text(extLink[0]).attr('href',extLink[1]);
			}else{$(this).find('#sdbr-link').hide();}
			
			if(elemDataCont.data('descr')){
				$(this).find('#sdbr-descr').show().text(elemDataCont.data('descr'))
			}else{$(this).find('#sdbr-descr').hide();}
			
			setTimeout(function(){
				$('.screen.flexslider').flexslider({
					prevText: '<i class="fa fa-angle-left"></i>',
					nextText: '<i class="fa fa-angle-right"></i>',
					slideshowSpeed: 3000,
					animation: 'fade',
					controlNav: false,
					pauseOnAction: false, 
					pauseOnHover: true,
					video: true,
					start: function(){
						$('#project-modal .screen')
						.addClass('done')
						.prev('.loader').fadeOut();
					}
				});
			},1000);
		}).modal();
		
	});

	$('#project-modal').on('hidden.bs.modal', function () {
		$(this).find('.loader').show();
		$(this).find('.screen')
			.removeClass('flexslider')
			.removeClass('done')
			.html('')
			.flexslider('destroy');
	});	

	
		/*============================================
	Project thumbs - Masonry
	==============================================*/
	$(window).load(function(){

		$('#projects-container').css({visibility:'visible'});

		$('#projects-container').masonry({
			itemSelector: '.project-item:not(.filtered)',
			columnWidth:320,
			isFitWidth: true,
			isResizable: true,
			isAnimated: !Modernizr.csstransitions,
			gutterWidth: 25
		});
	});
	
		
		/*==========================================
	Project thumbs - Masonry
	==============================================*/



$(document).ready(function() {
	$("#append-button").click(function(){
	
		$('#edits-container').css({ opacity: 1 });
		
	    $('#edits-container').imagesLoaded(function(){
      		$('#edits-container').masonry({
        			itemSelector:'.edits-item:not(.filtered)',
       				columnWidth: 320,
        			isFitWidth: true,
        			isResizable: true,
					isAnimated: !Modernizr.csstransitions,
					gutterWidth: 25
      			});
    		});
 		});		
});
    
	/*============================================
	Filter Projects
	==============================================*/
	$('#filter-works a').click(function(e){
		e.preventDefault();

		$('#filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.edits-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('#edits-container').masonry('reload');
		});
	});
	
		/*============================================
	Scrolling Animations
	==============================================*/
	$('.scrollimation').waypoint(function(){
		$(this).addClass('in');
	},{offset:function(){
			var h = $(window).height();
			var elemh = $(this).outerHeight();
			if ( elemh > h*0.3){
				return h*0.7;
			}else{
				return h - elemh;
			}
		}
	});
	
	
	$('.test-popup-link').magnificPopup({ 
  type: 'iframe',

	iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title"></div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
  
  
});

$('.open-popup-link').magnificPopup({
	type:'inline',
	mainClass: 'mfp-fade',
	midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

	$('.test-popup-image').magnificPopup({ 
  type: 'image'
}); 

// Can also be used with $(document).ready()
$(function() {
  $('.simpleslider').flexslider({
    animationLoop: true,
    controlNav: false,
	prevText: '<i class="fa fa-angle-left"></i>',
	nextText: '<i class="fa fa-angle-right"></i>',
	slideshowSpeed: 3000,
	animation: 'fade',
	pauseOnAction: false, 
	pauseOnHover: true,
  })
});

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#honorable-woman").fitVids();
});
  
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#life-stories").fitVids();
});

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#let-fury").fitVids();
});

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#angels-cup").fitVids();
});

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#hidden-kingdoms").fitVids();
});

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#merlin-bluray").fitVids();
});

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#sherlock-boxset").fitVids();
});