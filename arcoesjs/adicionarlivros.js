//-------------------------------------------------------------------------------------------------
//criando funcao importante que sera chamada mais a frente.

//Funcao vai receber uma lista de livro nova já com o novo livro e atualizar a ul lá em baixo
function atualizarListaNaTela(listaNova) {
  //linkando html com js com id
  const ul = document.getElementById('atualizarLivros');
  //limpar lista
  ul.innerHTML = ''; 

  listaNova.forEach(function(objLivro) {
    //criando o li no html
    const li = document.createElement('li');
    //adicionando o llivro na linha li
    li.textContent = `ID: ${objLivro.Id} | Título: ${objLivro.Titulo} | Autor: ${objLivro.Autor}
     | Genero: ${objLivro.Genero} | Preco: ${objLivro.Preco} | Quantidade: ${objLivro.Quantidade}`;   
    //#AQUI FALTA POR MAIS INFORMAÇÕES AO OBJ NOVO
    //pondo o li dentro da lu no html
    ul.appendChild(li);
  });
}
//----------------------------------------------------------------------------------------------------


//seleciona o formulario pelo id colocado nele
const form = document.getElementById('idadicionarlivrosjs');

//Adicionando evento p quando o form for enviado

form.addEventListener('submit', function(evento) {
    //impedir a pagina de recarregar
    evento.preventDefault();

    //Pegando do form e pondo em variaveis
const id = document.getElementById('idLivro').value;
const titulo = document.getElementById('tituloLivro').value;
const autor = document.getElementById('autorLivro').value;
const genero = document.getElementById('generoLivro').value;
const preco = document.getElementById('precoLivro').value;
const quantidade = document.getElementById('quantidadeLivro').value;

// Criar novo obj java script com os dados do formulario que estavam nas variaveis
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




