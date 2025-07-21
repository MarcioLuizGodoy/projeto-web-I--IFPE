

let objetoJavaScript ;

function converterResposta(response) {
    if(response.ok == true) {
       return response.json();
    }
}


function receberObjResposta(responseObjJs) {
    objetoJavaScript = responseObjJs;
}




const form = document.getElementById('editarlivrosJS');
    form.addEventListener('submit', editarLivroPorId);
function editarLivroPorId(event){
    event.preventDefault();
    const idProcurado = Number(document.getElementById('idLivro').value);
    const novoTitulo = document.getElementById('tituloLivro').value;
    const novoAutor=document.getElementById('autorLivro').value;
    const novoGenero = document.getElementById('generoLivro').value;
    const novopreco = document.getElementById('precoLivro').value;
    const novaQuantidade = Number(document.getElementById('quantidadeLivro').value);
    for(let i = 0; i < objetoJavaScript.length; i ++) {
        if(objetoJavaScript[i].Id == idProcurado ) {
        objetoJavaScript[i].Titulo = novoTitulo ;
        objetoJavaScript[i].Autor = novoAutor ;
        objetoJavaScript[i].Genero = novoGenero ;
        objetoJavaScript[i].Preco =  Number(novopreco);
        objetoJavaScript[i].Quantidade =  novaQuantidade;
        mostrarLivros();
        form.reset();
        }
    } 
}




function mostrarLivros() {
    const tbody = document.getElementById('idtabeladelivrosjs');
    tbody.innerHTML = ''; // Limpa a tabela antes de inserir os dados atualizados

    for (let i = 0; i < objetoJavaScript.length; i++) {
        const livro = objetoJavaScript[i];
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = livro.Id;

        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = livro.Titulo;

        const tdAutor = document.createElement('td');
        tdAutor.textContent = livro.Autor;

        const tdGenero = document.createElement('td');
        tdGenero.textContent = livro.Genero;

        const tdPreco = document.createElement('td');
        tdPreco.textContent = livro.Preco;

        const tdQuantidade = document.createElement('td');
        tdQuantidade.textContent = livro.Quantidade;

        // Adiciona as células à linha
        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdAutor);
        tr.appendChild(tdGenero);
        tr.appendChild(tdPreco);
        tr.appendChild(tdQuantidade);

        // Adiciona a linha à tabela
        tbody.appendChild(tr);
    }
}




function carregarLivros() {
    fetch('livros.json')
    .then(converterResposta)
    .then(receberObjResposta);
}



carregarLivros();


