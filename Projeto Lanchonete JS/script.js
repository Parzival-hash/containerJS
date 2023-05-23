function adicionarPedido(num){
    var numero = document.querySelector("#Pedidos").innerHTML;
    document.querySelector("#Pedidos").innerHTML = numero + num + "<br>";;

  }



let cardapio = {
  100: { nome: "Cachorro Quente", preco: 1.20 },
  101: { nome: "Bauru Simples", preco: 1.3 },
  102: { nome: "Bauru com Ovo", preco: 1.5},
  103: { nome: "Hamburguer", preco: 1.2},
  104: { nome: "cheeseburguer", preco: 1.3},
  105: { nome: "Refrigerante", preco: 1},
}

console.log(cardapio[100].nome)



function adicionarCardapio(evt, num) {

  let nome2 = prompt("Digite o nome do produto:"); 
  let valor = prompt("Digite o valor do produto:"); 
  let codigo = prompt("Digite o codigo do produto:");

  let botao = `
  <button type="button" id="descricaoCardapio" onclick="adicionarPedido('${nome2}')">Adicionar</button>
  `


    let nomeDiv = document.querySelector(".containerLanches");
    let valorDiv = document.querySelector(".containerPreco");
    let Valorcodigo = document.querySelector(".containerCodigo");


    let novoNome = document.createElement("h1");
    novoNome.textContent = nome2;
    novoNome.classList.add("descricaoCardapio");
    nomeDiv.appendChild(novoNome);

    let novoValor = document.createElement("h1");
    novoValor.textContent = "R$" + valor;
    novoValor.classList.add("descricaoCardapio"); 
    valorDiv.appendChild(novoValor);

    let NovoCodigo = document.createElement("h1");
    NovoCodigo.textContent = codigo;
    NovoCodigo.classList.add("descricaoCardapio"); 
    Valorcodigo.appendChild(NovoCodigo);

    let novBotao = document.createElement("button");
    novBotao.classList.add("descricaoCardapio");
    document.querySelector(".containerAdicionar.containerP1").innerHTML += botao
    console.log(botao)


    cardapio[codigo] = {nome: nome2, preco: valor};

  console.log(cardapio);
  }

