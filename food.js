$(document).ready(function(){


$('.calculate').slideDown(1000);
$('.eat').slideDown(1500);
$('.repeat').slideDown(2000);
$('.button').slideToggle(2500);

$('#slidein').hover(function(){
	$('#cardbutton').slideDown(2000);
	$('#textcard1').slideDown(1500);
})


$('#slidein2').hover(function(){
	$('#cardbutton2').slideDown(2000);
     $('#textcard2').slideDown(1500);
})

/*$('#nav').hover(function(){
	$('#navbarcontainer').removeClass('container');
	$(this).addClass('navhovered');
}, function(){
	$('#navbarcontainer').addClass('container');
	$(this).removeClass('navhovered');
})*/

});
