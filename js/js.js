// JavaScript Document
$( function(){
	var dur=300;
	$('#scroll_down').mouseenter(function(){		
		$(this).fadeTo(dur,0.7);
	}).mouseleave(function(){		
		$(this).fadeTo(dur,1);
	}).click(function(){		
		$("html, body").animate({ 
			scrollTop: screen.height+"px" 
		},500);
	});
});