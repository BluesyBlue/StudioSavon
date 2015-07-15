$(document).ready(function() {
	
	// The function applying the offset for anchors
	function offsetAnchor() {
		if(location.hash.length !== 0) {
			window.scrollTo(window.scrollX, window.scrollY - 100);
		}
	}

	// This will capture hash changes while on the page
	$(window).on("hashchange", function () {
		offsetAnchor();
	});

	// This is here so that when you enter the page with a hash,
	// it can provide the offset in that case too. Having a timeout
	// seems necessary to allow the browser to jump to the anchor first.
	window.setTimeout(function() {
		offsetAnchor();
	}, 1); // The delay of 1 is arbitrary and may not always work right
	
	// Hide and show fixed navigation on scroll
	function scrollNav(){
		var headerSize;
		if ($('header.splash').length == 0) {
			headerSize=250;
		} else {
			headerSize=$('header.splash').height();
			headerSize=headerSize+54;
		}
		var win=$(window);
		var scrolled=win.scrollTop();
		if ($.browser.msie){
			if (scrolled>headerSize){
				$('.fixed-bar').fadeIn();
			} else {
				$('.fixed-bar').fadeOut();
			}
		}
		else{
			if (scrolled>headerSize-40){
				$('.fixed-bar').removeClass('fadeOutUp').show().addClass('fadeInDown');
			} else {
				$('.fixed-bar').removeClass('fadeInDown').addClass('fadeOutUp').one('webkitAnimationEnd animationend', function(){
					//$(this).hide();
				});
			}
		}

		if (scrolled>680){
			$('.about .capabilities').addClass('animate');
		}
		
	}
	$(window).scroll(function(){
		scrollNav();
	});
	
	// scroll body to top on click
	$('a#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	// Hover images animation
	$('.link-img').hover(function() {
		$(this).toggleClass('pulse');
	});

	// Scroll to right category in "Palvelut"
	$("#click").click(function (){
		//$(this).animate(function(){
			$('html, body').animate({
				scrollTop: $("#1").offset().top
			}, 2000);
		//});
	});
	
	// Palvelut -list expander
	$(".palvelut-list").click(function () {
		$header = $(this);
		$content = $header.siblings(".list-content");
		$arrow = $header.children();
		
		$content.slideToggle(500, function () {
			if ($content.is(":visible")) {
				$arrow.removeClass('list-whiteArrow-down');
				$arrow.addClass('list-whiteArrow-up');
				$header.addClass('active');
			}
			else {
				$arrow.removeClass('list-whiteArrow-up')
				$arrow.addClass('list-whiteArrow-down');
				$header.removeClass('active');
			}
		});
	});
	
	
});