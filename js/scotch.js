/*
 * https://scotch.io/demos/body-class-menus-fullscreen-fancy-1
 */
$(function() {
	$('.toggle-nav').click(function() {
		if ($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');
			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 500);
		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
		}
		return false;
	});
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		if ($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');
			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 500);
		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
		}
	}
});
