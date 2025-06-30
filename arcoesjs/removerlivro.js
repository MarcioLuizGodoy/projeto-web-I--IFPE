let listaLivros = [];

function converter(response){
  return response.json();
}

function receberObj (dadosResponse){
  listaLivros = dadosResponse;
  return dadosResponse;
}

function carregarLivros() {
    fetch('livros.json')
    .then(converter)
    .then(receberObj)
    .then (atualizarListaNaTela);
  }

function atualizarListaNaTela (lista) {
  const ul = document.getElementById('listaLivrosRemoverJS');
  ul.innerHTML =  ''; 
  for( let i =0; i< lista.length; i ++) {
  let livro = lista[i];
  const li = document.createElement('li');
  li.textContent = `ID: ${livro.Id} | Título: ${livro.Titulo} | Autor: ${livro.Autor}`;
  ul.appendChild(li);
  }
 }

const form = document.getElementById('idremoverlivrosjs');
form.addEventListener('submit',removerLivro);

function removerLivro (evento){ 
  evento.preventDefault(); 
  const idInput = document.getElementById('idLivro').value.trim();
  const nomeImput = document.getElementById('nomeLivro').value.trim().toLowerCase();

  for( let i =0; i<listaLivros.length; i++){
    if( listaLivros[i].Id == idInput || listaLivros[i].Titulo.toLowerCase() == nomeImput ){
      listaLivros.splice(i,1);
      break;    
      }
  }
  atualizarListaNaTela(listaLivros);
};

carregarLivros();
