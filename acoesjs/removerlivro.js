

let listaLivros = [];

// Carrega os livros do JSON assim que o script inicia
carregarLivros();

function carregarLivros() {
  fetch('livros.json')
    .then(res => res.json())
    .then(dados => {
      listaLivros = dados;
      atualizarListaNaTela(listaLivros);
    })
    .catch(erro => {
      console.error('Erro ao carregar JSON:', erro);
    });
}

// Atualiza a lista exibida na tela
function atualizarListaNaTela(lista) {
  const ul = document.getElementById('listaLivrosRemoverJS');
  ul.innerHTML = '';

  lista.forEach(livro => {
    const li = document.createElement('li');
    li.textContent = `ID: ${livro.Id} | Título: ${livro.Titulo} | Autor: ${livro.Autor}`;
    ul.appendChild(li);
  });
}


// Exibe mensagem temporária de sucesso
function mostrarMensagem(mensagem) {
  const divMsg = document.getElementById('mensagemRemocao');
  divMsg.textContent = mensagem;

  setTimeout(() => {
    divMsg.textContent = '';
  }, 3000); // limpa após 3 segundos
}

// Lógica para interceptar o envio do formulário
const form = document.getElementById('idremoverlivrosjs');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede recarregar a página

  const idInput = document.getElementById('idLivro').value.trim();
  const nomeInput = document.getElementById('nomeLivro').value.trim().toLowerCase();

    const tamanhoAntes = listaLivros.length;


  // Filtra a lista com base nos critérios digitados
  let novaLista = listaLivros.filter(livro => {
    const idOk = idInput === '' || livro.Id !== parseInt(idInput);
    const nomeOk = nomeInput === '' || livro.Titulo.toLowerCase() !== nomeInput;
    return idOk && nomeOk;
  });

  if (novaLista.length < listaLivros.length) {
    mostrarMensagem('Livro removido com sucesso!');
  }

  listaLivros = novaLista;
  atualizarListaNaTela(listaLivros);

  // Limpa os campos do formulário
  form.reset();
});
