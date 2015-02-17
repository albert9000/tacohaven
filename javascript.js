function resizeWindow(){
	var windowWidth = $(window).width();
	var windowRatio = windowWidth * .47;
    $('#fart').height(windowRatio);
}

$(window).resize(resizeWindow);

$(document).ready(resizeWindow);

$(window).trigger('resize');