$(document).ready(function() {
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
$('.ryu').mouseenter(function(event) {
	console.log(event)
	$('.ryu-still').hide();
	$('.ryu-throwing').hide();
	$('.ryu-cool').hide();
	$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
				}
			);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	});
$(document).keydown(function() {
	$('.ryu-still').hide();
	$('.ryu-throwing').hide();
	$('.ryu-ready').hide();
	$('.ryu-cool').show();
	})
.keyup(function(){
 	$(".ryu-cool").hide();
 	$(".ryu-ready").hide();
 	$(".ryu-throwing").hide();
 	$(".ryu-still").show();
 });
});














