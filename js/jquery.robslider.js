/*
    Document   : robslider.js
    Created on : 1/09/2012
    Author     : Rafael Ortega Bueno
    Description:
        Purpose of the stylesheet follows.
*/

(function($){


    $.fn.robSlider = function(options){

    	var obj = $(this);


	options = $.extend({
		//tamanho das imagens do banner.
		img_largura:992,
		img_altura:265,
		//margem dos botões next e prev
		margem_np:30,
		//altura dos botões next e prev
		altura_bt:72,
		//largura dos botões next e prev
		largura_bt:25

	},options);

	$(window).load(function(){
		$('.banner_carregando').remove();
		$('.clickbanner').click(function(){
            		clearInterval(sliders);
            		carregaImagemBanner($('.'+$(this).attr('id')));
            		daumRole(obj);
        	});

		$('.banner_prev').click(function(){
		    clearInterval(sliders);
		    el = obj.find('.active');
		    var $prev = el.prev().length ? el.prev() : obj.children().last();
		    carregaImagemBanner($prev);
		    daumRole(obj);
		});

		$('.banner_next').click(function(){
		    clearInterval(sliders);
		    el = obj.find('.active');
		    var $next = el.next().length ? el.next() : obj.children().first();
		    carregaImagemBanner($next);
		    daumRole(obj);
		});
	});

	obj.each(function(){
		qtd_img = obj.find('img').length;
		if(!qtd_img){
			obj.prepend('<b style="color:red">H&aacute; algo errado com seu html.</b><br>').prepend('<h2>Não há imagens cadastradas!</h2>');
			return false;
		}
		obj.parent().append('<div class="banner_carregando">Carregando...</div>');
		obj.children().css('display','none').width(options.img_largura).height(options.img_altura);
		obj.width(options.img_largura);
		obj.height(options.img_altura);
		if(qtd_img == 1){
			obj.children().fadeIn(600);
			return false;
		}


		criaControles(obj);
		carregaImagemBanner(obj.children().first());
		daumRole(obj);

	});


	function criaControles(el){




		var margemTopo = parseInt((options.img_altura / 2 ) - (options.altura_bt / 2));
		var largura = options.img_largura;

		var menubanner = '<span class="banner_bts_bottom">';
		var count = 0;
		el.children().each(function(){
		    //$(this).css('display','none');
		    $(this).addClass('bannerimg_'+count);
		    menubanner += '<a href="javascript:void(0);" class="clickbanner" id="bannerimg_'+count+'">&nbsp;</a>';

		    count++;
		});
		menubanner += '<div style="clear:both"></div></span>';


		el.parent().prepend('<div id="menu-banner" style="position:absolute;z-index:800;margin-top:'+(options.img_altura-30)+'px">'+menubanner+'</div>');
		el.parent().prepend('<div style="position:absolute;z-index:900; margin-top: '+margemTopo+'px; margin-left:'+options.margem_np+'px; cursor:pointer" class="banner_prev"></div>');
		el.parent().prepend('<div style="position:absolute;z-index:900; margin-top: '+margemTopo+'px; margin-left:'+(largura - options.margem_np - options.largura_bt)+'px; cursor:pointer" class="banner_next"></div>');


		margem = parseInt($('.clickbanner').css('margin-left').replace('px',''));
		bts_total = $('.banner_bts_bottom').width() * count;

		$('#menu-banner').css('padding-left',parseInt((options.img_largura - bts_total) / 2 - margem)+'px');
    	}


	    function carregaImagemBanner(img){

		$('#menu-banner').find('.active').removeClass('active');

		$('#menu-banner').find('#'+img.attr('class').replace(' active','')).addClass('active');

		img.parent().find('.active').css('display','none').removeClass('active');
		img.addClass('active').fadeIn(600);

	    }


    function daumRole(obj){
	    sliders = setInterval( function (){


		    elemento = obj.find('.active');

		    var $next = elemento.next().length ? elemento.next() : elemento.parent().children().first();



		    elemento.removeClass('active').css('display','none');
		    $next.addClass('active').fadeIn(600);
		    $('#menu-banner').find('.active').removeClass('active');

		    $('#menu-banner').find('#'+$next.attr('class').replace(' active','')).addClass('active');



		}, 5000 );
	    }



    }







})(jQuery);
