
let livros = [];

function converterResposta(resposta) {
    if(resposta.ok == true) {
        return resposta.json();
    }
}

function receberObj(objRespostaEmJs){
    livros = objRespostaEmJs;

}

function carregarLivros(){
      fetch('livros.json')
        .then(converterResposta) 
        .then(receberObj)

        
        //chamando metodo importante
        .then(listarLivros);
        
}

const elementoTbody = document.getElementById('idtabeladelivrosjs');


function listarLivros() {
    const tbody = document.getElementById('idtabeladelivrosjs');
    tbody.innerHTML = '';

    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];

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


carregarLivros()
