(function ($) {
	'use strict';

	var CONFIG = {
		classeDaCategoria: 'categoria-24443218',
		imagens: {
			hero: 'https://cdn.awsli.com.br/1041/1041512/arquivos/bg-hero.png',
			capaPadrao:
				'https://cdn.awsli.com.br/1041/1041512/arquivos/cover-gta.png',
			capaUltimate:
				'https://cdn.awsli.com.br/1041/1041512/arquivos/cover-gta-ultimate.png',
			historia: 'https://cdn.awsli.com.br/1041/1041512/arquivos/section-2.png',
			final: 'https://cdn.awsli.com.br/1041/1041512/arquivos/section-4.png',
			logoGta: 'https://cdn.awsli.com.br/1041/1041512/arquivos/logo-gta.png',
			psnBranco:
				'https://cdn.awsli.com.br/1041/1041512/arquivos/psn-logo-white.svg',
			psnPreto:
				'https://cdn.awsli.com.br/1041/1041512/arquivos/psn-logo-black.svg',
			xboxBranco:
				'https://cdn.awsli.com.br/1041/1041512/arquivos/xbox-logo-white.svg',
			xboxPreto:
				'https://cdn.awsli.com.br/1041/1041512/arquivos/xbox-logo-black.svg',
		},
		produtos: {
			ps5: {
				padrao: {
					nome: 'Edição padrão',
					meta: 'Playstation 5 • Código digital',
					preco: 'R$ 434,90',
					parcela: 'em até 2x de R$ 217,45 sem juros',
					url: 'https://www.thkeys.com.br/r/jdrycu',
				},
				ultimate: {
					nome: 'Edição Ultimate',
					meta: 'Playstation 5 • Código digital',
					preco: 'R$ 529,90',
					parcela: 'em até 2x de R$ 264,95 sem juros',
					url: 'https://www.thkeys.com.br/r/tjmrxs',
				},
			},
			xbox: {
				padrao: {
					nome: 'Edição padrão',
					meta: 'Xbox Series X|S • Código digital',
					preco: 'R$ 439,90',
					parcela: 'em até 2x de R$ 219,95 sem juros',
					url: 'https://www.thkeys.com.br/r/ljtray',
				},
				ultimate: {
					nome: 'Edição Ultimate',
					meta: 'Xbox Series X|S • Código digital',
					preco: 'R$ 539,90',
					parcela: 'em até 2x de R$ 269,95 sem juros',
					url: 'https://www.thkeys.com.br/r/jfmnny',
				},
			},
		},
	};

	var html =
		'' +
		'<main id="thGta" class="thgta">' +
		'<div class="thgta-promo"><div class="thgta-container"><span>PRÉ-VENDA ABERTA — LANÇAMENTO EM 19.11.2026</span><a href="#thgta-comprar">GARANTA O SEU</a></div></div>' +
		'<section class="thgta-hero" style="--hero:url(' +
		CONFIG.imagens.hero +
		')">' +
		'<div class="thgta-hero-inner">' +
		'<div class="thgta-cover"><img class="js-hero-cover" src="' +
		CONFIG.imagens.capaPadrao +
		'" alt="Grand Theft Auto VI"></div>' +
		'<div class="thgta-buy" id="thgta-comprar">' +
		'<div class="thgta-buy-head"><i></i><strong>Pré-venda</strong><img src="' +
		CONFIG.imagens.logoGta +
		'" alt="GTA VI"></div>' +
		'<div class="thgta-label">Escolha o seu console</div>' +
		'<div class="thgta-choice" data-type="plataforma">' +
		'<button class="active" data-value="ps5"><span><small>PLAYSTATION</small><b>PS5</b></span><img class="thgta-console-logo" style="display:block;width:26px;height:20px;object-fit:contain;flex:0 0 auto" src="' +
		CONFIG.imagens.psnPreto +
		'" alt="PlayStation"></button>' +
		'<button data-value="xbox"><span><small>MICROSOFT</small><b>XBOX X|S</b></span><img class="thgta-console-logo" style="display:block;width:20px;height:20px;object-fit:contain;flex:0 0 auto" src="' +
		CONFIG.imagens.xboxBranco +
		'" alt="Xbox"></button>' +
		'</div>' +
		'<div class="thgta-label thgta-label-version">Escolha a versão<small>Disponibilidade imediata no lançamento</small></div>' +
		'<div class="thgta-choice thgta-editions" data-type="edicao"><button class="active" data-value="padrao"><b>Edição padrão</b></button><button data-value="ultimate"><b>Edição Ultimate</b></button></div>' +
		'<div class="thgta-summary"><img class="js-cover" src="' +
		CONFIG.imagens.capaPadrao +
		'" alt=""><span><small>GTA VI</small><b class="js-name">Edição padrão</b><em class="js-meta">Playstation 5 • Código digital</em></span><strong class="js-price-small">R$ 434,90</strong></div>' +
		'<div class="thgta-price"><strong class="js-price">R$ 434,90</strong><span class="js-installment">em até 2x de R$ 217,45 sem juros</span></div>' +
		'<a class="thgta-button js-buy" href="https://www.thkeys.com.br/r/jdrycu"><span>Garantir pré-venda</span><b>→</b></a>' +
		'<p class="thgta-safe">⌁ Compra segura e produto 100% original</p>' +
		'</div>' +
		'</div>' +
		'</section>' +
		'<section class="thgta-benefits"><div class="thgta-container">' +
		benefit('01', 'PRODUTO ORIGINAL', 'Códigos oficiais e seguros') +
		benefit('02', 'COMPRA PROTEGIDA', 'Pagamento 100% seguro') +
		benefit('03', 'SUPORTE ESPECIALIZADO', 'Atendimento quando precisar') +
		benefit('04', 'ATÉ 2X SEM JUROS', 'Mais liberdade para comprar') +
		'</div></section>' +
		'<section class="thgta-story" style="--story:url(' +
		CONFIG.imagens.historia +
		')"><div class="thgta-container">' +
		'<div class="thgta-story-copy"><div class="thgta-overline">BEM-VINDO À LEONIDA</div><h1>O lado mais sombrio do lugar <mark>mais ensolarado</mark> da américa.</h1><p>Jason e Lucia sempre souberam que o jogo estaria contra eles. Quando uma ação fácil dá errado, os dois se veem envolvidos em uma conspiração que se estende por todo o estado — e precisam confiar um no outro para sair vivos.</p></div>' +
		'<div class="thgta-story-card"><img src="' +
		CONFIG.imagens.logoGta +
		'" alt="GTA VI"><span>LANÇAMENTO EM 19 DE NOVEMBRO DE 2026</span><a href="#thgta-comprar">Escolher minha edição <b>↑</b></a></div>' +
		'</div></section>' +
		'<section class="thgta-info"><div class="thgta-container">' +
		'<div class="thgta-title"><div class="thgta-overline">SIMPLES, RÁPIDO E SEGURO</div><h2>Da THKEYS<br><mark>direto para o seu console.</mark></h2></div>' +
		'<div class="thgta-steps">' +
		step(
			'01',
			'ESCOLHA SUA EDIÇÃO',
			'Selecione sua plataforma e a versão ideal para a sua aventura.'
		) +
		step(
			'02',
			'FINALIZE COM SEGURANÇA',
			'Pague em um ambiente protegido e acompanhe seu pedido.'
		) +
		step(
			'03',
			'RECEBA SEU CÓDIGO',
			'O código digital é enviado ao seu e-mail após a liberação do produto.'
		) +
		step(
			'04',
			'ATIVE E ENTRE EM LEONIDA',
			'Resgate no console, faça o download e comece a jogar.'
		) +
		'</div>' +
		'<div class="thgta-faq-grid"><div class="thgta-faq-intro"><div class="thgta-overline">PERGUNTAS FREQUENTES</div><h2>Antes de partir<br>para Vice City.</h2><p>Não encontrou o que precisava? O time da THKEYS está pronto para ajudar.</p></div>' +
		'<div class="thgta-faq">' +
		faq(
			'Quando GTA VI será lançado?',
			'O lançamento oficial está previsto para 19 de novembro de 2026, para PlayStation 5 e Xbox Series X|S.',
			true
		) +
		faq(
			'O produto é original?',
			'Sim. Todos os códigos comercializados pela THKEYS são originais e oficiais.'
		) +
		faq(
			'Como recebo o meu jogo?',
			'Você recebe o código digital no e-mail cadastrado após a liberação do produto.'
		) +
		faq(
			'Funciona no PS4 ou Xbox One?',
			'Não. GTA VI está disponível para PlayStation 5 e Xbox Series X|S.'
		) +
		faq(
			'Qual é a diferença da Ultimate Edition?',
			'A Ultimate Edition inclui conteúdos e benefícios adicionais indicados na página do produto.'
		) +
		'</div></div>' +
		'</div></section>' +
		'<section class="thgta-final" style="--final:url(' +
		CONFIG.imagens.final +
		')"><div class="thgta-final-box"><span>19 DE NOVEMBRO DE 2026</span><h2>VICE CITY NÃO<br>VAI <mark>ESPERAR.</mark></h2><p>Garanta sua pré-venda agora e prepare-se para o lançamento mais esperado da história.</p><a href="#thgta-comprar">Escolher minha edição <b>↑</b></a></div></section>' +
		'</main>';

	function benefit(n, t, d) {
		return (
			'<article><b>' +
			n +
			'</b><span><strong>' +
			t +
			'</strong><small>' +
			d +
			'</small></span></article>'
		);
	}
	function step(n, t, d) {
		return (
			'<article><b>' +
			n +
			'</b><span><strong>' +
			t +
			'</strong><p>' +
			d +
			'</p></span></article>'
		);
	}
	function faq(q, a, open) {
		return (
			'<article class="' +
			(open ? 'open' : '') +
			'"><button type="button"><span>' +
			q +
			'</span><i></i></button><div>' +
			a +
			'</div></article>'
		);
	}

	$(function () {
		if (!$('body').hasClass(CONFIG.classeDaCategoria)) return;
		var $corpo = $('#corpo');
		if (!$corpo.length) return;
		$corpo.empty().removeClass('conteiner').html(html);
		$('body').addClass('thgta-page');

		var state = { plataforma: 'ps5', edicao: 'padrao' };
		function updateProduct() {
			var product = CONFIG.produtos[state.plataforma][state.edicao];
			var cover =
				state.edicao === 'ultimate'
					? CONFIG.imagens.capaUltimate
					: CONFIG.imagens.capaPadrao;
			$('.js-name').text(product.nome);
			$('.js-meta').text(product.meta);
			$('.js-price,.js-price-small').text(product.preco);
			$('.js-installment').text(product.parcela);
			$('.js-cover,.js-hero-cover').attr('src', cover);
			$('.js-buy').attr('href', product.url);
			$('.thgta-choice[data-type="plataforma"] button').each(function () {
				var $console = $(this);
				var isActive = $console.hasClass('active');
				var isPsn = $console.data('value') === 'ps5';
				$console
					.find('.thgta-console-logo')
					.attr(
						'src',
						isPsn
							? isActive
								? CONFIG.imagens.psnPreto
								: CONFIG.imagens.psnBranco
							: isActive
								? CONFIG.imagens.xboxPreto
								: CONFIG.imagens.xboxBranco
					);
			});
		}
		$('.thgta-choice button').on('click', function () {
			var $button = $(this);
			state[$button.parent().data('type')] = $button.data('value');
			$button.addClass('active').siblings().removeClass('active');
			updateProduct();
		});
		$('.thgta-faq button').on('click', function () {
			var $article = $(this).parent();
			if ($article.hasClass('open')) {
				$article
					.removeClass('open')
					.children('div')
					.stop(true, true)
					.slideUp(180);
				return;
			}
			$article.addClass('open').children('div').stop(true, true).slideDown(180);
			$article
				.siblings('.open')
				.removeClass('open')
				.children('div')
				.stop(true, true)
				.slideUp(180);
		});
		$('.thgta a[href^="#"]').on('click', function (event) {
			var $target = $($(this).attr('href'));
			if (!$target.length) return;
			event.preventDefault();
			$('html,body')
				.stop()
				.animate({ scrollTop: $target.offset().top - 24 }, 500);
		});
	});
})(window.jQuery);
