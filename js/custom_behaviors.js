$(document).ready(function() {

	// VARIABLES


	// EVENT HANDLERS
	$('header a').on('click', function(event){
		event.preventDefault();
		var destination = $(this).attr('href');
		$('html, body').stop(true).animate({
			scrollTop: $(destination).offset().top-170
		}, 1500,'easeInOutExpo');
	});

	$(".hide-show-nav").on('click', function(event){
		event.preventDefault();
		openNav()
		// document.getElementById("side-nav").style.width = "250px";
	});
	$(".closebtn").on('click', function(event){
		event.preventDefault();
		closeNav()
	});

	$(".pageName").on('click', function(event){
		event.preventDefault();
		closeNav()
	});
	$(".pageName2").on('click', function(event){
		event.preventDefault();
		closeNav()
	});


	// $('.parallax-window').parallax({imageSrc: '../images/InterludePhoto2.jpg'});
	// FUNCTIONS
	function openNav() {
		document.getElementById("side-nav").style.width = "250px";
	}
	function closeNav() {
		document.getElementById("side-nav").style.width = "0";
	}


	// INITIALIZATION
	// NOTE: Needed to comment out to get slider on modal working
	// $(".modal").colorbox({rel:'modal'});

});
