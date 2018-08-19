// Function burger menu
(function(){
	var burger = document.querySelector('.burger-container'),
		miniNavigation  = document.querySelector('.mini-navigation');

	burger.onclick = function() {
		miniNavigation.classList.toggle('menu-opened');
	}
}());

// Smooth scrolling
$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});