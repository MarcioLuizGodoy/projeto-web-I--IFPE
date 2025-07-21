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

function atualizarListaNaTela(lista) {
  const tbody = document.getElementById('listaLivrosRemoverJS');
  tbody.innerHTML = ''; // limpa

  for (let i = 0; i < lista.length; i++) {
    let livro = lista[i];

    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = livro.Id;

    const tdTitulo = document.createElement('td');
    tdTitulo.textContent = livro.Titulo;

    const tdAutor = document.createElement('td');
    tdAutor.textContent = livro.Autor;

    tr.appendChild(tdId);
    tr.appendChild(tdTitulo);
    tr.appendChild(tdAutor);

    tbody.appendChild(tr);
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
