/* 
    JavaScript NÃO É JAVA
    VARIÁVEIS (Qualquer Linguagem de programação)
        - Um pedacinho da memória do computador que você separa
        para guardar o que VOCÊ QUISER

    Função - Um pedacinho de código que só executa quando é chamado.

    console.log() = 
        Ferramenta do JS que, tudo que colocar ali dentro aparece na tela
    
    Algoritmo = Receita de bolo
    [x] Descobrir quando eu clico no botão
    [x] Assim que o botão for clicado 
    [x] Qual a imagem que deve ser trocada
    [x] Trocar a imagem principal
    [] Trocar a cor de fundo

    documento = .html
    querySelector = seleciona o que eu quiser no .html
    
*/

let imagem = document.querySelector(".copao")
let fundo = document.querySelector(".circulo")

function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaFundo(cor){
    fundo.style.background = cor
}
