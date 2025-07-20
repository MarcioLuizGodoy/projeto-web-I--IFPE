

let listaDeLivrosGlobal = [];

function converterResposta (response){
    return response.json();
}

function receberObjJs(respostaobjJsValido){
    listaDeLivrosGlobal = respostaobjJsValido;
}


function carregarLivros(){
    fetch ('livros.json')
        .then( converterResposta).then(receberObjJs);
}

function mostrarLivros(listaLivro) {
    const tbody = document.getElementById('buscarLivrosjs');
    tbody.innerHTML = ''; // Limpa antes de adicionar

    for (let i = 0; i < listaLivro.length; i++) {
        const livro = listaLivro[i];

        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = livro.Id;

        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = livro.Titulo;

        const tdAutor = document.createElement('td');
        tdAutor.textContent = livro.Autor;

        const tdGenero =document.createElement('td');
        tdGenero.textContent = livro.Genero;

        const tdPreco = document.createElement('td');
        tdPreco.textContent = livro.Preco;

        const tdQuantidade = document.createElement('td');
        tdQuantidade.textContent = livro.Quantidade;

        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdAutor);
        tr.appendChild(tdGenero);
        tr.appendChild(tdPreco);
        tr.appendChild(tdQuantidade);



        tbody.appendChild(tr);
    }
}

//function receberEvento(evento){
//    evento.preventDefault();
//    buscar
//}

const form = document.querySelector('form');
//função anonima:  function receberevento(evento) ..... etc. Ela só serve ai para receber obj event
    form.addEventListener( 'submit' ,  function receberEvento(evento)  {  
   
        evento.preventDefault();
        buscarLivro();
    });

function buscarLivro (){
    const inputNome = document.getElementById('tituloLivro').value.trim().toLowerCase(); //esselowercase é importante mais a frente
        const inputId = document.getElementById('idLivro').value.trim(); 
            let resultadoFiltrado = listaDeLivrosGlobal;
                if(inputNome !== '') { 
                        resultadoFiltrado = resultadoFiltrado.filter(function checarLivroPorTitulo(livro){
                            return livro.Titulo.toLowerCase().includes(inputNome);
                                });
                }
                if(inputId !== '') {
                        resultadoFiltrado = resultadoFiltrado.filter(function checarLivroPorId(livro){
                            return livro.Id.toString() === inputId;
                                });
                }
                mostrarLivros(resultadoFiltrado);
}
    carregarLivros();
