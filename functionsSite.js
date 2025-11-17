// Type your JavaScript code here.

$(document).ready(function(){


var tam = $(window).width();

if (tam >= 768 ){

$('#cabecalho').after('<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>');
$('#menuCat .row-fluid').append($('#cabecalho .menu.superior'));

$('.pagina-inicial .mini-banner').prepend(`<div id="miniBannerFullw" class="conteiner"></div>`);
$('.pagina-inicial .mini-banner .modulo.span4').appendTo($('#miniBannerFullw'));


$('.pagina-inicial #listagemProdutos > ul:nth-child(2)').after($('.banner.tarja'));
$('.pagina-busca .listagem > .titulo').appendTo('.pagina-busca .ordenar-listagem.topo');


$('.conteudo-topo').before(
'<div class="cat">'+
'<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'
);

$('.cat').on('click', function(){
$('#menuCat').toggleClass('active');
$('.category').toggleClass('active');
});

$('.conteudo-topo .inferior .span8.busca-mobile').after(
'<div class="login-top">'+
'<a href="../conta/criar?next=conta_index&email=_"><span class="login-txt"><strong>Cadastre-se</strong></span></a>'+
'</div>'
);


$('.conteudo-topo .inferior .span8.busca-mobile').after(
'<div class="atd-top">'+
'<a href="../conta/login"><span class="atd-txt"><strong>Login</strong><span></a>'+
'</div>'
);

$('.carrinho>a>i').addClass('cor-principal');
$('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));


//$('.pagina-produto .produto > .row-fluid .info-principal-produto').prependTo('.pagina-produto .produto');
//$('.pagina-produto .produto > .row-fluid .span6 > .principal').prepend($('.pagina-produto .produto > .info-principal-produto .codigo-produto'));
//$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position1'));
//$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.abas-custom'));
//$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position2'));
//$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.listagem.aproveite-tambem'));

}

if( $('.drop-atd .tel-whatsapp>span').length ){
$('.drop-atd .tel-whatsapp>span').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("Whatsapp:", "");
$(this).text($result);
});
}

if( $('.drop-atd li:nth-child(2)>span').length ){
$('.drop-atd li:nth-child(2)>span').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("Telefone:", "");
$(this).text($result);
});
}

if( $('.drop-atd .tel-skype>a').length ){
$('.drop-atd .tel-skype>a').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("Skype:", "");
$(this).text($result);
});
}

if($('.marcas').length) {

$('#rodape').before(
'<div id="marcas">'+
'<div class="conteiner">'+
'<div class="row-fluid">'+
'<div class="titulo-categoria borda-principal cor-principal">'+
'<strong>Navegue por marcas</strong>'+
'</div>'+
'</div>'+
'</div>'+
'</div>');

$('#marcas .row-fluid').append($('.marcas'));

} else {

}

$('body').append('<a href="#" onclick="topFunction()" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>subir</span></a>');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
$(".back-top").addClass('show');
} else {
$(".back-top").removeClass('show');
}
}

function topFunction() {
$('body').animate({scrollTop: '0'}, 200);
}

$('.carrinho>a span').html('Carrinho');

//$('.pagina-categoria .secao-banners').before($('.breadcrumbs'));
//$('.pagina-categoria .breadcrumbs').append($('.conteudo h1'));

$('.pagina-categoria .ordenar-listagem.topo').append(`
<div class="titulo_categoria"></div>
`);

$('.titulo_categoria').append($('.pagina-categoria .conteudo > h1.titulo'));
$('.titulo_categoria').append($('.coluna .componente .interno .titulo + p'));

if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
$('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
//Recorta o primeiro nome do usuário logado no menu desktop
let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
if(firstname.length > 10 ) {
firstname = firstname.substring(0, 10) + ' ...';
}
document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
$('.login-top ul.dropdown-menu').css("left", "-67px");
}

if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));


}

if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
//  $('.login-top .login-txt').html('<i class="fa fa-user cor-principal"></i>Olá!');


}

if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
}
//Header fixo
$(window).scroll(function(){
if ($(window).scrollTop() > 150){
$('#cabecalho').addClass('scroll');
$('#menuCat').addClass('scroll');
} else {
$('#cabecalho').removeClass('scroll');
$('#menuCat').removeClass('scroll');
}
});



$('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
$('#rodape .span12.visible-phone > ul > li').clone().appendTo('#rodape .redes-sociais');

//inputs login
$('.cadastro-logar .form-horizontal .controls #id_email').attr("placeholder", "E-mail");
$('.cadastro-logar .form-horizontal .controls #id_senha').attr("placeholder", "Senha");
$('.cadastro-logar>.span6:nth-child(2) #id_email').attr("placeholder", "Digite o email que deseja cadastrar:");
//$('.produto .principal .codigo-produto').appendTo('.produto .nome-produto');
//$('.produto .info-principal-produto .nome-produto').append($('.produto-compartilhar .lista-favoritos'));

//$('.parcelas-produto .accordion .accordion-group:first-child .accordion-body').removeClass('in');
$('.produto .acoes-produto .desconto-a-vista').before('<span class="bandeira_promo_principal">-10% OFF NO PIX</span>');
$('.pagina-produto .produto .span6 > .principal').append('<span class="aviso_produto">* Todos os produtos do nosso site são códigos 100% originais, enviados por e-mail.</span>');

$('#rodape > div:last-child .row-fluid > div:last-child a img').attr('src','https://cdn.awsli.com.br/1041/1041512/arquivos/loja-integrada.svg');
$('#rodape .span4.selos > ul > li:first-child img').attr('src','https://cdn.awsli.com.br/1041/1041512/arquivos/selo-protegido.png');
$('#rodape > div:last-child .row-fluid > div:last-child a').before('<a href="https://wa.me/551152863976" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/1041/1041512/arquivos/desenvolvido-symm.svg" alt="Symm.agency" width="120px" height="35px"></a>');
$('#rodape > div:last-child .row-fluid > div:first-child').removeClass('span9 span6 atendimento').addClass('assinatura').attr('style', '');
$('#rodape > div:last-child .row-fluid > div:last-child').attr('style', '').addClass('assinatura-rodape');


if( $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').length ){
$('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("% Desconto", "");
$(this).text($result);
});
}

if (tam <= 767 ){

$('#cabecalho .conteiner .logo').before(
'<div class="cat cor-principal">'+
'<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'
);

$('.vitrine-3323786').before($('.banner.tarja'));


$('#cabecalho .menu.superior .nivel-um').prepend(
'<div class="cab-nav">'+
'<a class="close-nav-full"></a>'+
'<div class="close-nav">'+
'<span class="category cor-principal"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'+
'<div class="acc-nav">'+
'</div>'+
'</div>'
);
if ($('.btn-group').length){
$('.menu.superior .nivel-um .cab-nav').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
}
if ($('#cabecalho .atalhos-mobile .icon-signout').is(':visible')) {
//$('#cabecalho .atalhos-mobile .icon-signout').appendTo($('#cabecalho .acc-nav'));
}


$('.menu.superior .nivel-um .cab-nav .acc-nav').append($('#cabecalho a.icon-user'));
$('#cabecalho .cab-nav a').addClass('cor-principal');

$('.cat').click(
function() {
$('.menu.superior .nivel-um').toggleClass('active');
}
);

$('#cabecalho .close-nav').click(
function() {
$('.menu.superior .nivel-um').toggleClass('active');
}
);

$('.menu.superior .nivel-um .cab-nav .close-nav-full').click(
function() {
$('.menu.superior .nivel-um').toggleClass('active');
}
);

$('.produto .conteiner-imagem').before($('.produto .span6> .principal .info-principal-produto'));
$('.atalhos-mobile li.fundo-principal').addClass('cor-principal borda-principal');
$('.atalhos-mobile li.fundo-principal a').addClass('cor-principal');
$('#cabecalho .conteiner .logo').after($('.atalhos-mobile li.fundo-principal'));

$('#cabecalho>.conteiner>.row-fluid>.span3 > .fundo-principal').before(
`<div class="busca_topo">
<a >
Busca
</a>
</div>
<div class="login-top">
<a href="../conta/index">
Login
</a>
</div>`
);

$('#cabecalho>.conteiner>.row-fluid>.span6 > .fundo-principal').before(
`<div class="busca_topo">
<a >
Busca
</a>
</div>
<div class="login-top">
<a href="../conta/index">
Login
</a>
</div>`
);

$('#cabecalho>.conteiner>.row-fluid>.span3 > .fundo-principal').append($('.conteudo-topo .inferior .span4.hidden-phone .carrinho>a strong'));


$('.busca_topo').click(function(){
$('.conteudo-topo').toggleClass("active");
});

$('.conteudo-topo').before($('.menu.superior'));
}

$('.ordenar-listagem.topo').after($('.banner.vitrine'));

setTimeout(function(){
let isLogged = ($('.btn-group .menu-user-name').text() !== "")? true : false;

if(isLogged == true){
$('.login-conta a').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
$('.login-top .login-txt').html('Olá!');
$('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));


}


if(isLogged == true){
var nomeUsuario = $('span.menu-user-name').text();
$('.menu.superior .nivel-um').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
$('.menu.superior .nivel-um').prepend('<li class="logado"><a href="/conta/index"><i class="fa-solid fa-user"></i><span>Olá, ' + nomeUsuario + '</span></a></li>');

$('li.signin-menu-superior, li.signup-menu-superior').css('display','none');

$('.login-txt').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
//Recorta o primeiro nome do usuário logado no menu desktop
let usenameText = $('.login-top .btn-group .dropdown-toggle').text();
let index = $('.login-top .btn-group .dropdown-toggle').text().indexOf(',');
let firstname = usenameText.substring(index + 2).split(' ').slice(0, -1)[0];
if(firstname.length > 10 ) {
firstname = firstname.substring(0, 10) + ' ...';
}
document.querySelector('.login-top .btn-group .dropdown-toggle').textContent = `Olá, ${firstname}`;
$('.login-top ul.dropdown-menu').css("left", "-67px");

}
},500)

$('.titulo_categoria').append(`

<button class="button_vermais" >Ver mais</button>

`);

$('.button_vermais').click(function(){
$('.titulo_categoria p').toggleClass('open');
$('.button_vermais').toggleClass('ver_menos');
});

});

