$(document).ready(function() {
	$("nav a").on("click", function() {
		$("nav a").removeClass("current");
		$(this).addClass("current");
	});


$("button").on("click", function() {
	var pickTheIp = "#" + $("nav a.current").data("ipsum");
	var howManyP = $("input").val();
	$(".ipsum").hide();
	$(pickTheIp)
		.find("p")
		.slice(0, howManyP)
		.show();
	$(pickTheIp).slideDown(400);
	});

$("input").on("focus", function() {
	$("input").val("");
	$(".ipsum").slideUp(1000, function () {
		$("p").hide();
	});
  	});
});