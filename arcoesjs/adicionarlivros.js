
let arrayObjetoConvertido;

function converter(response){
    return response.json();
}
function receber(objRecebido){
arrayObjetoConvertido = objRecebido;
}
function carregarLivros(){
return fetch('livros.json')
.then(converter).then(receber);

}


const form = document.getElementById('idadicionarlivrosjs');
    form.addEventListener('submit', criarAdicionarNovoLivro);


function criarAdicionarNovoLivro(evento){
evento.preventDefault();
const id = document.getElementById('idLivro').value;
const titulo = document.getElementById('tituloLivro').value;
const autor = document.getElementById('autorLivro').value;
const genero = document.getElementById('generoLivro').value;
const preco = document.getElementById('precoLivro').value;
const quantidade = document.getElementById('quantidadeLivro').value;
        const novoLivro = {
        Id: Number(id),
        Titulo: titulo,
        Autor:autor,
        Genero: genero,
        Preco: Number(preco),
        Quantidade: Number(quantidade)
        };

        arrayObjetoConvertido.push(novoLivro);
        mostrarLivro();

}

function mostrarLivro(){
    const ul = document.getElementById('atualizarLivros');
    ul.innerHTML = '';

    for( let i = 0; i<arrayObjetoConvertido.length; i ++){
        const objLivro = arrayObjetoConvertido[i];
        const li = document.createElement('li');
        li.textContent =  `ID: ${objLivro.Id} | Título: ${objLivro.Titulo} | Autor: ${objLivro.Autor}| Genero: ${objLivro.Genero} | Preco: ${objLivro.Preco} | Quantidade: ${objLivro.Quantidade}`;
        ul.appendChild(li);
        }
}

carregarLivros();






/*

function atualizarListaNaTela(listaNova) {
  const ul = document.getElementById('atualizarLivros');
  ul.innerHTML = ''; 

  listaNova.forEach(function(objLivro) {
    const li = document.createElement('li');
    li.textContent = `ID: ${objLivro.Id} | Título: ${objLivro.Titulo} | Autor: ${objLivro.Autor}
     | Genero: ${objLivro.Genero} | Preco: ${objLivro.Preco} | Quantidade: ${objLivro.Quantidade}`;   
    ul.appendChild(li);
  });
}

const form = document.getElementById('idadicionarlivrosjs');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

const id = document.getElementById('idLivro').value;
const titulo = document.getElementById('tituloLivro').value;
const autor = document.getElementById('autorLivro').value;
const genero = document.getElementById('generoLivro').value;
const preco = document.getElementById('precoLivro').value;
const quantidade = document.getElementById('quantidadeLivro').value;

    const novoLivro = {
        Id: Number(id),
        Titulo: titulo,
        Autor:autor,
        Genero: genero,
        Preco: Number(preco),
        Quantidade: Number(quantidade)
};

  fetch('livros.json')  


  .then(function converterParaObjeto(respostaRequisicao) {
    return respostaRequisicao.json();
  })

  .then(function adicionarNovoLivro(listaNovaDeLivro) {
    listaNovaDeLivro.push(novoLivro);
    
    atualizarListaNaTela(listaNovaDeLivro);  

    form.reset();
  })
  .catch(function(erro) {
    const divErro = document.getElementById('erro');
    divErro.textContent = " erro ao adicionar o livro. Verifique os dados";

  })
})
*/



