var slider={
	init: function(){
		var l = $('ul li').length;
		slider.random(l);
		slider.button();
	},
	button: function(){
		$('figure img').bind('click', function(){
			slider.nextt();
		});
		$(document).keydown(function(e){
			if(e.keyCode == 37){
				slider.prev();
			}else if(e.keyCode == 39){
				slider.nextt();
			}	
		});
	},
	random: function(length){
		var r = Math.floor(Math.random()*length+1);
		console.log('ran: '+r);
		$('ul li:nth-child('+r+')').addClass('active');
		$('.active img').load(function(){ $(this).fadeIn('slow') });
	},
	nextt: function(){
		var nextt = $('li.active').next();
		nextt.length==0 ? nextt = $('li:first') : nextt;
		$('.active img').hide().parent('li').removeClass('active');
		nextt.addClass('active').children('img').show();
	},
	prev: function(){
		var prev = $('li.active').prev();
		prev.length==0 ? prev=$('li:last') : prev;
		$('.active img').hide().parent('li').removeClass('active');
		prev.addClass('active').children('img').show();
	}
};
slider.init();