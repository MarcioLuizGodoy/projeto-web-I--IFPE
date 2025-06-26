

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

function mostrarLivros (listaLivro)   {
    const ul = document.getElementById('buscarLivrosjs');
        ul.innerHTML = '';
        for(let i=0; i <listaLivro.length ;i ++ ) {
            const  livro = listaLivro[i];
                const li = document.createElement('li');
                    li.textContent = 'ID: ' + livro.Id + ' | Título: ' + livro.Titulo + ' | Autor: ' + livro.Autor;
                        ul.appendChild(li);
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
