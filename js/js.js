// JavaScript Document
$( function(){
	var dur=300;
	$('#scroll_down').mouseenter(function(){		
		$(this).fadeTo(dur,0.7);
	}).mouseleave(function(){		
		$(this).fadeTo(dur,1);
	}).click(function(){		
		$("html, body").animate({ 
			scrollTop: $('#stuff').offset().top 
		},500);
	});
	var changeLinkColor=function(obj,color){
		$(obj).css('color',color);
	};
	$('#content .wide menu li a')
		.mouseenter(function(){changeLinkColor(this,'#5FB00C')})
		.mouseleave(function(){changeLinkColor(this,'inherit')});
});