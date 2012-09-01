Este é meu primeiro plugin, talvez seja um dos piores plugins de slider, porém muito simples de se customizar e de uma performance razoável.

#Como Utilizar:

* Faça o import do jQuery no seu projeto;
* Faça o import do jquery.robslider.js no seu projeto;
* Faça a chamada para o robslider.css para seu projeto;
* Dentro do bloco de códigos, escolha qualquer id ou classe de div que contenha imagens como filhas:
`$(document).ready(function(){
	$('.seuseletor').robSlider();
});`

* Podemos configurar algumas coisas:
`$('.banner').robSlider({
		//tamanho das imagens do banner.
		img_largura:992,
		img_altura:265,
		//margem dos botões next e prev
		margem_np:30,
		//altura dos botões next e prev
		altura_bt:72,afa
		//largura dos botões next e prev
		largura_bt:25
	});`
