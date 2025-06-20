
//criando funcao importante

function atualizarListaNaTela(lista) {
  const ul = document.getElementById('atualizarLivros');
  ul.innerHTML = ''; // limpa a lista antes de renderizar de novo

  lista.forEach(function(livro) {
    const li = document.createElement('li');
    li.textContent = `ID: ${livro.Id} | Título: ${livro.Titulo} | Autor: ${livro.Autor}`;
    ul.appendChild(li);
  });
}



//seleciona o formulario pelo id colocado neSSSle
const form = document.getElementById('idadicionarlivrosjs');

//Adicionando evento p quando o form for enviado

form.addEventListener('submit', function(evento) {
    //impedir a pagina de recarregar
    evento.preventDefault();

const id = document.getElementById('idLivro').value;
const titulo = document.getElementById('tituloLivro').value;
const autor = document.getElementById('autorLivro').value;
const genero = document.getElementById('generoLivro').value;
const preco = document.getElementById('precoLivro').value;
const quantidade = document.getElementById('quantidadeLivro').value;

// Criar novo obj java script com os dados do formulario
  const novoLivro = {
    Id: Number(id),
    Titulo: titulo,
    Autor:autor,
    Genero: genero,
    Preco: preco,
    Quantidade: quantidade
  };

  fetch('livros.json')  //obriga navegador a fazer requisicao do json onde esta os htmls

  .then(function receberRequisicao(respostaRequisicao) {
    return respostaRequisicao.json();
  })

  .then(function criarNovoObj(lista) {
    lista.push(novoLivro);
    

    atualizarListaNaTela(lista);  //aqui ainda falta implementar a função.

    form.reset();
  })
  .catch(function(erro) {
    const divErro = document.getElementById('erro');
    divErro.textContent = " erro ao adicionar o livro. Verifique os dados";

  })
})




