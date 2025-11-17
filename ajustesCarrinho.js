setTimeout(function(){
    
    function paginaCarrinho(){
    document.querySelectorAll('.caixa-sombreada .tabela-carrinho tr .precos-wrap').forEach(function(item){
    
      var valorteste = $(item).find('strong.preco-promocional').html().trim().split('R$ ')[1];
    
      var valorProduto = parseFloat(valorteste.replace(",", "."));
      var desconto = valorProduto * 0.10 ;
      var result = (valorProduto - desconto).toFixed(2);
    $(item).find('.preco-produto .preco-promocional').text('R$ ' + result.replace(".", ","));
      
    });

    var valorDesconto = $('.descontos.avista strong:first-child').text();
    $('.tabela-carrinho .subtotal strong').text(valorDesconto);
    
    }
    
    function modalCarrinho(){
        document.querySelectorAll('.painel .carrinho .carrinho-interno .precos-wrap').forEach(function(item){

          var valorteste = $(item).find('strong.preco-promocional').html().trim().split('R$ ')[1];
        
          var valorProduto = parseFloat(valorteste.replace(",", "."));
          var desconto = valorProduto * 0.10 ;
          var result = (valorProduto - desconto).toFixed(2);
        $(item).find('.preco-produto .preco-promocional').text('R$ ' + result.replace(".", ","));
        
        });
        
        var valorTotal2 =$('.painel .carrinho .carrinho-interno .carrino-total strong').html().trim().split('R$ ')[1];;
        var valorTotalConvertido = parseFloat(valorTotal2.replace(",", "."));
        var descontoTotal = valorTotalConvertido * 0.10 ;
        var valorResult = (valorTotalConvertido - descontoTotal).toFixed(2);
         $('.painel .carrinho .carrinho-interno .carrino-total strong').text('R$ ' + valorResult.replace(".", ","));
    }
    
    

paginaCarrinho();
modalCarrinho();

},100)

