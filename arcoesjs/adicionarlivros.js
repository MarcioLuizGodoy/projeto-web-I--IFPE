
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

function mostrarLivro() {
    const tbody = document.getElementById('atualizarLivros');
    tbody.innerHTML = ''; // Limpa o conteúdo da tabela

    for (let i = 0; i < arrayObjetoConvertido.length; i++) {
        const livro = arrayObjetoConvertido[i];

        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = livro.Id;

        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = livro.Titulo;

        const tdAutor = document.createElement('td');
        tdAutor.textContent = livro.Autor;

        const tdGenero = document.createElement('td');
        tdGenero.textContent = livro.Genero || '---';

        const tdPreco = document.createElement('td');
        tdPreco.textContent = livro.Preco || '---';

        const tdQuantidade = document.createElement('td');
        tdQuantidade.textContent = livro.Quantidade || '---';

        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdAutor);
        tr.appendChild(tdGenero);
        tr.appendChild(tdPreco);
        tr.appendChild(tdQuantidade);

        tbody.appendChild(tr);
    }
}


carregarLivros();