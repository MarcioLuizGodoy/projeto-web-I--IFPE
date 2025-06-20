


let listaLivros = [];
let idParaRemoverGlobal = 0;

// Função principal para carregar os livros do JSON
function carregarLivros() {
  fetch('livros.json')
    .then(tratarRespostaJson)
    .then(processarDadosRecebidos)
    .catch(tratarErroFetch);
}

// Função que converte a resposta para  Objeto JS
function tratarRespostaJson(resposta) {
  return resposta.json();
}

// Função que salva os dados na variável global e atualiza a tela
function processarDadosRecebidos(dados) {
  listaLivros = dados;
  atualizarListaNaTela(listaLivros);
}

// Função que trata erros ao carregar o JSON
function tratarErroFetch(erro) {
  console.error('Erro ao carregar JSON:', erro);
}

// Função para remover um livro da lista com base no ID
function removerLivroPorId(id) {
  idParaRemoverGlobal = id;
  listaLivros = listaLivros.filter(filtrarLivroDiferenteDoIdSelecionado);
  atualizarListaNaTela(listaLivros);
}

// Função usada no filter para manter apenas os livros com ID diferente
function filtrarLivroDiferenteDoIdSelecionado(livro) {
  return livro.id !== idParaRemoverGlobal;
}

// Função chamada quando o botão "Remover" é clicado
function aoClicarEmRemover(idLivro) {
  removerLivroPorId(idLivro);
}

// Função que cria a função de clique para o botão de remover
function criarCallbackParaBotaoRemover(idLivro) {
  return function cliqueNoBotaoRemover() {
    aoClicarEmRemover(idLivro);
  };
}

// Função que atualiza a lista de livros na tela
function atualizarListaNaTela(lista) {
  const ul = document.getElementById('listaLivros');
  ul.innerHTML = '';

  let contador = 0;
  while (contador < lista.length) {
    const livro = lista[contador];

    const li = document.createElement('li');
    li.textContent = 'ID: ' + livro.id + ' | Título: ' + livro.titulo + ' | Autor: ' + livro.autor;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = criarCallbackParaBotaoRemover(livro.id);

    li.appendChild(botaoRemover);
    ul.appendChild(li);

    contador = contador + 1;
  }
}

// Inicia o carregamento assim que o script for executado
carregarLivros();
