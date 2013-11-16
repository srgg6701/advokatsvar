// JavaScript Document
function getUrlParams(){
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
	args = {},
	items = qs.length ? qs.split("&") : [],
	item = null,
	name = null,
	value = null,
	i = 0,
	len = items.length;
	for (i=0; i < len; i++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
}
$(function(){
	var bg=false;
	var urlParams=getUrlParams();
	if(bg=urlParams.debug){ 
		/* 	значения для bg:
			1 - подложка для верхней части страницы
			2 - для нижней
		 */
		//document.write('>');
		$('#css_screen').after('<link media="screen" href="stylesheets/debug.css" rel="stylesheet" type="text/css">');
		$('#bg_container').css('background','none');
		$('body').css({
			background:'url(_sources/pg_test'+bg+'.png) 172px 0 no-repeat fixed'
		});	
		$('#content').css('opacity',0.5);
		$('#top').css('opacity',0.5);
	}
});
