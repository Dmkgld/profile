$(function () {
	$("p").click(function () {
		$(this).fadeOut();
	});
	$("div").dblclick(function () {
		$(this.p).fadeIn();
	});
});

