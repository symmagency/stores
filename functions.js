$(document).ready(function(){

if (window.__thkeysUiInitialized) {
return;
}
window.__thkeysUiInitialized = true;

var $windowEl = $(window);
var $body = $('body');
var $cabecalho = $('#cabecalho');
var $conteudoTopo = $('.conteudo-topo');
var $rodape = $('#rodape');
var $menuSuperior = $('.menu.superior');
var $menuNivelUm = $menuSuperior.find('.nivel-um');
var $listagemProdutos = $('#listagemProdutos');
var $menuCat = $();

var tam = $windowEl.width();
var isDesktop = tam >= 768;
var isMobile = tam <= 767;

function runDeferred(task) {
if ('requestIdleCallback' in window) {
requestIdleCallback(task);
} else {
setTimeout(task, 0);
}
}

function replaceLabelText($elements, label) {
if (!$elements.length) {
return;
}
$elements.text(function (_, text) {
return text.replace(label, '');
});
}

function personalizeLoginGreeting($toggle) {
if (!$toggle.length) {
return;
}
var usernameText = $toggle.text();
var index = usernameText.indexOf(',');
if (index === -1) {
return;
}
var firstname = usernameText.substring(index + 2).split(' ').slice(0, -1)[0] || '';
if(firstname.length > 10 ) {
firstname = firstname.substring(0, 10) + ' ...';
}
$toggle.text(`Olá, ${firstname}`);
}

if (isDesktop ){
runDeferred(function(){

$cabecalho.after('<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>');
$menuCat = $('#menuCat');
$menuCat.find('.row-fluid').append($menuSuperior);

if (!$('.pagina-inicial .mini-banner #miniBannerFullw').length) {
$('.pagina-inicial .mini-banner').prepend('<div id="miniBannerFullw" class="conteiner"></div>');
$('.pagina-inicial .mini-banner .modulo.span4').appendTo($('#miniBannerFullw'));
}


$('.pagina-inicial #listagemProdutos > ul:nth-child(2)').after($('.banner.tarja'));
$('.pagina-busca .listagem > .titulo').appendTo('.pagina-busca .ordenar-listagem.topo');


$('.conteudo-topo').before(
'<div class="cat">'+
'<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'
);

$('.cat').on('click', function(){
$menuCat.toggleClass('active');
$('.category').toggleClass('active');
});

var $desktopBuscaMobile = $conteudoTopo.find('.inferior .span8.busca-mobile');
$desktopBuscaMobile.after(
'<div class="login-top">'+
'<a href="../conta/criar?next=conta_index&email=_"><span class="login-txt"><strong>Cadastre-se</strong></span></a>'+
'</div>'
);


$desktopBuscaMobile.after(
'<div class="atd-top">'+
'<a href="../conta/login"><span class="atd-txt"><strong>Login</strong></span></a>'+
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

});
}

replaceLabelText($('.drop-atd .tel-whatsapp>span'), 'Whatsapp:');
replaceLabelText($('.drop-atd li:nth-child(2)>span'), 'Telefone:');
replaceLabelText($('.drop-atd .tel-skype>a'), 'Skype:');

if($('.marcas').length) {

$rodape.before(
'<div id="marcas">'+
'<div class="conteiner">'+
'<div class="row-fluid">'+
'<div class="titulo-categoria borda-principal cor-principal">'+
'<strong>Navegue por marcas</strong>'+
'</div>'+
'</div>'+
'</div>'+
'</div>');

var $marcasWrapper = $('#marcas');
$marcasWrapper.find('.row-fluid').append($('.marcas'));

} else {

}

$body.append('<a href="#" onclick="topFunction()" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>subir</span></a>');

$windowEl.on('scroll', scrollFunction);
scrollFunction();

function scrollFunction() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
$(".back-top").addClass('show');
} else {
$(".back-top").removeClass('show');
}
}

function topFunction() {
$body.animate({scrollTop: '0'}, 200);
}

$('.carrinho>a span').html('Carrinho');

//$('.pagina-categoria .secao-banners').before($('.breadcrumbs'));
//$('.pagina-categoria .breadcrumbs').append($('.conteudo h1'));

$('.pagina-categoria .ordenar-listagem.topo').append(`
<div class="titulo_categoria"></div>
`);

$('.titulo_categoria').append($('.pagina-categoria .conteudo > h1.titulo'));
$('.titulo_categoria').append($('.coluna .componente .interno .titulo + p'));

var $primaryDesktopBtnGroup = $conteudoTopo.find('.superior .span8 .btn-group:first-child');
var isPrimaryBtnGroupVisible = $primaryDesktopBtnGroup.is(':visible');
if (isPrimaryBtnGroupVisible) {
$('.login-txt').replaceWith($primaryDesktopBtnGroup);
var $primaryDropdown = $primaryDesktopBtnGroup.find('.dropdown-menu').first();
if ($primaryDropdown.length) {
$('.login-top ul.drop-login').replaceWith($primaryDropdown);
$primaryDropdown.css("left", "-67px");
}
personalizeLoginGreeting($('.login-top .btn-group .dropdown-toggle'));
}

var $alternateDesktopBtnGroup = $conteudoTopo.first().find('> .superior > .span12 > .btn-group:first-child');
if ($alternateDesktopBtnGroup.is(':visible')) {
var $alternateDropdown = $alternateDesktopBtnGroup.find('.dropdown-menu').first();
if ($alternateDropdown.length) {
$('.login-top ul.drop-login').replaceWith($alternateDropdown);
}
}
//Header fixo
$windowEl.on('scroll.thkeysHeader', function(){
if ($windowEl.scrollTop() > 150){
$cabecalho.addClass('scroll');
$menuCat.addClass('scroll');
} else {
$cabecalho.removeClass('scroll');
$menuCat.removeClass('scroll');
}
});



$('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
$rodape.find('.span12.visible-phone > ul > li').clone().appendTo($rodape.find('.redes-sociais'));

//inputs login
$('.cadastro-logar .form-horizontal .controls #id_email').attr("placeholder", "E-mail");
$('.cadastro-logar .form-horizontal .controls #id_senha').attr("placeholder", "Senha");
$('.cadastro-logar>.span6:nth-child(2) #id_email').attr("placeholder", "Digite o email que deseja cadastrar:");
//$('.produto .principal .codigo-produto').appendTo('.produto .nome-produto');
//$('.produto .info-principal-produto .nome-produto').append($('.produto-compartilhar .lista-favoritos'));

//$('.parcelas-produto .accordion .accordion-group:first-child .accordion-body').removeClass('in');
$('.produto .acoes-produto .desconto-a-vista').before('<span class="bandeira_promo_principal">-10% OFF NO PIX</span>');
$('.pagina-produto .produto .span6 > .principal').append('<span class="aviso_produto">* Todos os produtos do nosso site são códigos 100% originais, enviados por e-mail.</span>');

$rodape.children('div:last-child').find('.row-fluid > div:last-child a img').attr('src','https://cdn.awsli.com.br/1041/1041512/arquivos/loja-integrada.svg');
$rodape.find('.span4.selos > ul > li:first-child img').attr('src','https://cdn.awsli.com.br/1041/1041512/arquivos/selo-protegido.png');
$rodape.children('div:last-child').find('.row-fluid > div:last-child a').before('<a href="https://wa.me/551152863976" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/1041/1041512/arquivos/desenvolvido-symm.svg" alt="Symm.agency" width="120px" height="35px"></a>');
$rodape.children('div:last-child').find('.row-fluid > div:first-child').removeClass('span9 span6 atendimento').addClass('assinatura').attr('style', '');
$rodape.children('div:last-child').find('.row-fluid > div:last-child').attr('style', '').addClass('assinatura-rodape');


if( $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').length ){
$('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').each(function () {
var $this = $(this).text();
var $result = $(this).text().replace("% Desconto", "");
$(this).text($result);
});
}

if (isMobile ){
runDeferred(function(){

var $cabecalhoLogo = $cabecalho.find('.conteiner .logo');
var $cabecalhoContainer = $cabecalho.children('.conteiner');
var $cabecalhoRowFluid = $cabecalhoContainer.children('.row-fluid');
var $cabecalhoSpan3Fundo = $cabecalhoRowFluid.children('.span3').children('.fundo-principal');
var $cabecalhoSpan6Fundo = $cabecalhoRowFluid.children('.span6').children('.fundo-principal');

$cabecalhoLogo.before(
'<div class="cat cor-principal">'+
'<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'
);

$('.vitrine-3323786').before($('.banner.tarja'));


$menuNivelUm.prepend(
'<li class="cab-nav">'+
'<a class="close-nav-full"></a>'+
'<div class="close-nav">'+
'<span class="category cor-principal"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
'</div>'+
'<ul class="cab-nav-menu"></ul>'+
'<div class="acc-nav">'+
'</div>'+
'</li>'
);
if ($('.btn-group').length){
$menuNivelUm.find('.cab-nav .cab-nav-menu').prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
}
if ($cabecalho.find('.atalhos-mobile .icon-signout').is(':visible')) {
//$('#cabecalho .atalhos-mobile .icon-signout').appendTo($('#cabecalho .acc-nav'));
}


$menuNivelUm.find('.cab-nav .acc-nav').append($cabecalho.find('a.icon-user'));
$cabecalho.find('.cab-nav a').addClass('cor-principal');

$('.cat').click(
function() {
$menuNivelUm.toggleClass('active');
}
);

$cabecalho.find('.close-nav').click(
function() {
$menuNivelUm.toggleClass('active');
}
);

$menuNivelUm.find('.cab-nav .close-nav-full').click(
function() {
$menuNivelUm.toggleClass('active');
}
);

$('.produto .conteiner-imagem').before($('.produto .span6> .principal .info-principal-produto'));
$('.atalhos-mobile li.fundo-principal').addClass('cor-principal borda-principal');
$('.atalhos-mobile li.fundo-principal a').addClass('cor-principal');
$cabecalhoLogo.after($('.atalhos-mobile li.fundo-principal'));

$cabecalhoSpan3Fundo.before(
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

$cabecalhoSpan6Fundo.before(
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

$cabecalhoSpan3Fundo.append($('.conteudo-topo .inferior .span4.hidden-phone .carrinho>a strong'));


$('.busca_topo').click(function(){
$('.conteudo-topo').toggleClass("active");
});

$conteudoTopo.before($menuSuperior);
});
}

runDeferred(function(){
$('.ordenar-listagem.topo').after($('.banner.vitrine'));

setTimeout(function(){
var $menuUserName = $('.btn-group .menu-user-name');
var isLogged = ($.trim($menuUserName.text()) !== "");

if(isLogged){
var $desktopBtnGroup = $conteudoTopo.find('.superior .span8 .btn-group:first-child');
var $alternateBtnGroup = $conteudoTopo.first().find('> .superior > .span12 > .btn-group:first-child');
if ($desktopBtnGroup.length) {
$('.login-conta a').replaceWith($desktopBtnGroup);
}
var $desktopDropdownLogged = $desktopBtnGroup.find('.dropdown-menu').first();
if ($desktopDropdownLogged.length) {
$('.login-top ul.drop-login').replaceWith($desktopDropdownLogged);
}
$('.login-top .login-txt').html('Olá!');
var $alternateDropdownLogged = $alternateBtnGroup.find('.dropdown-menu').first();
if ($alternateDropdownLogged.length) {
$('.login-top ul.drop-login').replaceWith($alternateDropdownLogged);
}
}


if(isLogged){
var nomeUsuario = $('span.menu-user-name').text();
$menuNivelUm.prepend('<li class="logado-sair"><a href="/conta/logout"><i class="signin-icon"></i><span>Sair</span></a></li>');
$menuNivelUm.prepend('<li class="logado"><a href="/conta/index"><i class="fa-solid fa-user"></i><span>Olá, ' + nomeUsuario + '</span></a></li>');

$('li.signin-menu-superior, li.signup-menu-superior').css('display','none');

var $loginBtnGroup = $conteudoTopo.find('.superior .span8 .btn-group:first-child');
if ($loginBtnGroup.length) {
$('.login-txt').replaceWith($loginBtnGroup);
}
personalizeLoginGreeting($('.login-top .btn-group .dropdown-toggle'));
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

//só desktop
if (isDesktop ){
runDeferred(function(){

$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position1'));
$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.abas-custom'));
$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.pagina-produto #buy-together-position2'));
$('.pagina-produto #corpo .produto > .row-fluid:nth-child(2) > .span6:first-child').append($('.listagem.aproveite-tambem'));

});
}

if (!$('.produtos_hz').length && $listagemProdutos.length) {
runDeferred(function(){
// Defina os dados dos produtos em uma variável JavaScript
var produtosPopulares = [
    {
        url: "https://www.thkeys.com.br/playstation-plus-essential-1-mes-assinatura-brasil-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn.png",
        posicao: "1º",
        titulo: "Playstation Plus Essential 1 Mês Assinatura Brasil - Código Digital",
        preco: "R$ 59,80 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/xbox-game-pass-ultimate-brasil-1-mes-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/game-pass.png",
        posicao: "2º",
        titulo: "Xbox Game Pass Ultimate Brasil 1 Mês - Código Digital",
        preco: "R$ 57,90 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/playstation-store-r35-reais-brasil-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn-store.png",
        posicao: "3º",
        titulo: "Playstation Store R$35 Reais - Código Digital",
        preco: "R$ 34,82 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/elden-ring-nightreign-pc-codigo-digital-",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/elden.png",
        posicao: "4º",
        titulo: "ELDEN RING NIGHTREIGN - PC Código Digital",
        preco: "R$ 174,90 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/cartao-da-app-store-r20-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_apple.png",
        posicao: "5º",
        titulo: "Cartão da App Store R$20 Reais - Código Digital",
        preco: "R$ 24,00 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/grand-theft-auto-v-premium-online-edition-rockstar-pc-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/gta-5.png",
        posicao: "6º",
        titulo: "Grand Theft Auto V: Premium Online Edition GTA V (Rockstar) - PC Código Digital",
        preco: "R$ 69,90 no pix",
        desconto: "-40%"
    },
    {
        url: "https://www.thkeys.com.br/xbox-live-r35-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/xbox-35.png",
        posicao: "7º",
        titulo: "Cartão Presente Xbox 35 Reais Brasil - Código Digital",
        preco: "R$ 34,69 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/playstation-store-r100-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn-store.png",
        posicao: "8º",
        titulo: "Playstation Store R$100 Reais - Código Digital",
        preco: "R$ 98,51 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/playstation-store-r300-reais-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/p_psn-store.png",
        posicao: "9º",
        titulo: "Playstation Store R$300 Reais - Código Digital",
        preco: "R$ 284,21 no pix",
        desconto: "-10%"
    },
    {
        url: "https://www.thkeys.com.br/mortal-kombat-11-standard-edition-pc-codigo-digital",
        img: "https://cdn.awsli.com.br/1041/1041512/arquivos/mk11.png",
        posicao: "10º",
        titulo: "Mortal Kombat 11 - PC Codigo Digital",
        preco: "R$ 24,90 no pix",
        desconto: "-10%"
    }
];

// Construa o HTML com jQuery usando os dados das variáveis
var $produtosHz = $(`
    <div class="produtos_hz">
        <div class="conteiner">
            <div class="row-fluid">
                <a href="#" class="titulo-categoria borda-principal cor-principal">
                    <strong>Mais populares</strong>
                </a>
                <ul class="produtos_list"></ul>
            </div>
        </div>
    </div>
`);

$.each(produtosPopulares, function(index, produto) {
    var $li = $(`
        <li class="produto_item">
            <a href="${produto.url}" target="_blank"></a>
            <img src="${produto.img}" alt="">
            <div class="append_title">
                <div class="position">
                    <span>${produto.posicao}</span>
                    <img src="" alt="">
                </div>
                <span>${produto.titulo}</span>
            </div>
            <div class="produto_preco">
                <strong>${produto.preco}</strong>
                <span>${produto.desconto}</span>
            </div>
        </li>
    `);
    $produtosHz.find('.produtos_list').append($li);
});

// Insira a block de produtos após o elemento #listagemProdutos
$listagemProdutos.after($produtosHz);
});
}

runDeferred(function(){
if (!$('#explore').length && $('.pagina-inicial .secao-banners').length) {
$('.pagina-inicial .secao-banners').after(`

    <div id="explore">
    
    <div class="conteiner">
    <h2 class="titulo_explore">
    Explore por plataforma
    </h2>
    
    <div class="row-fluid">
    <div class="append_items">    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/gift-xbox">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-xbox.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/app-store-19852754">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_itunes.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/gift-playstation">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-playstation.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/pc-">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-steam.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/buscar?q=FC+POINTS">
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/explore_fc.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/buscar?q=fortnite">
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/explore_fortinite.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/garena-free-fire-diamantes">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_freefire.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/buscar?q=playstation+plus+brasil">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_plus.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/nintendo">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-nintendo.png" alt="">
    </a>
    </li>
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/roblox?sort=%2Bpreco">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore-roblox.png" alt="">
    </a>
    </li>        
    
    <li class="explore_item">
    <a href="https://www.thkeys.com.br/google-play">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/explore_googleplay.png" alt="">
    </a>
    </li>
    
    </div>
    </div>
    </div>
    
    </div>
    
    `);
}
    
var $vitrineTrailer = $listagemProdutos.find('.vitrine-3332079');
if (!$('.videoTrailer').length && $vitrineTrailer.length) {
    $vitrineTrailer.before(`
    
    <div class="videoTrailer">
    <div class="trailer_banner">
    <a target="_blank" href="https://www.youtube.com/watch?v=O6MdexNSy3o&t=1s"><i></i> Assista ao trailer</a>
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/the-last-of-us-youtube.jpg" alt="">
    </div>
    <div class="jogo_banner">
    <a href="https://www.thkeys.com.br/the-last-of-us-part-ii-remastered-pc-codigo-digital">
    <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/the-last-of-us-2-remastered-pc.png" alt="">
    <div class="append_preco_btn">
    <div class="preco"> R$ 189,90 <span>no pix</span></div>
    <button class="btn">Comprar agora <i></i></button>
    </div>
    </a>
    </div>
    </div>
    `);
}
    
    $rodape.find('.institucional').after($('.span4.selos'));
    $('.span4.selos ul > li:first-child').after(`
    <li> <img alt="Loja Oficial Mercado Livre" src="https://cdn.awsli.com.br/1041/1041512/arquivos/oficial-ml.png" width="135" height="43px" /> </li>
    <li> <img alt="Google Safe Browsing" src="https://cdn.awsli.com.br/1041/1041512/arquivos/google-s-b.png"/ width="127" height="38px"> </li>
    `);
    
    //redes sociais no rodape
    var $rodapeRedesSociais = $rodape.find('.redes-sociais');
    $('.links-rodape-paginas').after($rodapeRedesSociais);
    if (!$('#telefoneRodape').length) {
    $rodapeRedesSociais.append(`
    <div id="telefoneRodape">
    <div class="tel_rp">
    <p>WhatsApp</p>
    <a href="#"><i class="fa-whatsapp"></i>(11) 5286-3976</a>
    </div>
    <div class="envio_rp">
    <p>Formas de envio</p>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/envio_digital.svg" alt="Envio Digital" width="127" height="24px">
    </li>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/envio_digital_vip.svg" alt="Envio Digital VIP" width="154" height="24px">
    </li>
    </div>
    <div class="pagamento_rp">
    <p>Formas de pagamento</p>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/boleto.svg" alt="Boleto Bancário">
    </li>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/cartao.svg" alt="Cartão de crédito">
    </li>
    <li>
    <img src="https://cdn.awsli.com.br/2679/2679412/arquivos/pix.svg" alt="Pix">
    </li>
    </div>
    </div>
    `);
    }
    
    $('.mini-banner .modulo.span4:first-child').after(`
    <div id="porPreco">
    <div class="titulo_porpreco">
    <h2>Já sabe quanto vai gastar?</h2>
    <p>Encontre produtos por faixa de preço</p>
    </div>
    
    <div class="precos">
    <div class="preco_linha">
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/10">R$ 10</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/20">R$ 20</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/30">R$ 30</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/50">R$ 50</a>
    </li>
    </div>
    
    <div class="preco_linha">
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/100">R$ 100</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/150">R$ 150</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/200">R$ 200</a>
    </li>
    <li class="porpreco_item">
    <a href="https://www.thkeys.com.br/250">R$ 250</a>
    </li>
    </div>
    </div>
    </div>
    `);
    
    var $listagemProdutosFifth = $listagemProdutos.children('ul:nth-child(5)');
    if ($('#miniBannerFullw').length && $listagemProdutosFifth.length) {
    $listagemProdutosFifth.after($('#miniBannerFullw'));
    }
    $rodape.find('.institucional .links-rodape-paginas ul').append(`<li><a href="https://blog.thkeys.com.br/" target="_blank">Blog</a></li>`);

    if (!$('#explore_by-cat').length && $('.pagina-inicial .vitrine-3323787').length) {
    $('.pagina-inicial .vitrine-3323787').before(`

        <div id="explore_by-cat">
        
        <div class="conteiner">
        <h2 class="titulo_explore">
        Explore por gênero
        </h2>
        
        <div class="row-fluid">
        <div class="append_items">  
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/acao-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-acao.svg" alt="">
        <span>Ação</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/aventura-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-aventura.svg" alt="">
        <span>Aventura</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/coop-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-coop.svg" alt="">
        <span>Co-op</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/corrida-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-corrida.svg" alt="">
        <span>Corrida</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/esporte-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-esporte.svg" alt="">
        <span>Esporte</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/estrategia-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-estrategia.svg" alt="">
        <span>Estratégia</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/fps-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-fps.svg" alt="">
        <span>FPS</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/hack-slash-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-slash.svg" alt="">
        <span>Hack & Slash</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/indie-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-indie.svg" alt="">
        <span>Indie</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/luta-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-luta.svg" alt="">
        <span>Luta</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/mmo-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-mmo.svg" alt="">
        <span>MMO</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/rpg-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-rpg.svg" alt="">
        <span>RPG</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/simulacao-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-simulacao.svg" alt="">
        <span>Simulação</span>
        </a>
        </li>
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/soulslike-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-soulslike.svg" alt="">
        <span>Soulslike</span>
        </a>
        </li>
        
        
        <li class="explore_i_cat">
        <a href="https://www.thkeys.com.br/terror-pc">
        <img src="https://cdn.awsli.com.br/1041/1041512/arquivos/icon-c-terror.svg" alt="">
        <span>Terror</span>
        </a>
        </li>
        
        
        </div>
        </div>
        </div>
        
        </div>
        
        `);
    }
});

}); 