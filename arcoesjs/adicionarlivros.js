
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

  //obriga navegador a fazer requisicao do json onde esta os htmls
  fetch('livros.json')  


  //Recebe a lista de livro da requisição e converte para obj java script valido.
  .then(function converterParaObjeto(respostaRequisicao) {
    return respostaRequisicao.json();
  })

  //Nesse segundo .then caiu o obj javascript da lista e vai ser adicionado o novo livro criado a partir do form
  .then(function adicionarNovoLivro(listaNovaDeLivro) {
    listaNovaDeLivro.push(novoLivro);
    
  //Aqui atualiza a lista de livros com o novo livro que depois vai ser chamada no html(body/main)
    atualizarListaNaTela(listaNovaDeLivro);  

    form.reset();
  })
  .catch(function(erro) {
    const divErro = document.getElementById('erro');
    divErro.textContent = " erro ao adicionar o livro. Verifique os dados";

  })
})




