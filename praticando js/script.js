const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");


btnTroca.addEventListener ('click',() => {

nomeSaida.textContent = nomeEntrada.value;
    
})

btnTroca.addEventListener ('mouseenter',() => {

nomeSaida.style.color = " #7FFFD4"
    
})


btnTroca.addEventListener ('mouseout',() => {

nomeSaida.style.color = " #1B4965"
    
})
 
//Trocando a cor da caixa

const btnRosa = document.getElementById("btn_rosa");
const btnPreto = document.getElementById("btn_preto");
const btnVermelho = document.getElementById("btn_vermelho");
const caixa = document.getElementById("caixa");

btnRosa.addEventListener('click', () => {
    caixa.style.backgroundColor = "pink";
});

btnPreto.addEventListener('click', () => {
    caixa.style.backgroundColor = "black";
});

btnVermelho.addEventListener('click', () => {
    caixa.style.backgroundColor = "red";
});
 
const valorReal = document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener('click', () => {
    contador -- ;
    valorReal.textContent = contador
});

document.getElementById("btn_mais").addEventListener('click', () => {
    contador ++ ;
    valorReal.textContent = contador
});
    
const nomeLivro = document.getElementById("nome_livros");
const listaLivros = document.getElementById("lista_livros");

document.getElementById("adiciona_livros").addEventListener('click', () => {
    const novoLivro = document.createElement("li");
    novoLivro.textContent = nomeLivro.value
    listaLivros.appendChild(novoLivro);

});