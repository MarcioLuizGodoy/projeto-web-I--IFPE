//Esse codigo geral carrega o livro do json e mostra uma vez como ele está, depois 
// trata com filtros e criterios e seta na tela o resultado filtrado.

let listaDeLivrosGlobal = [];



//função para o navegador pegar o json da raiz onde esta os htmls
function carregarLivros(){
    fetch ('livros.json')
    .then(function receberResposta(resposta) {
        return resposta.json();

    })

    .then(function converterParaObjJS(dadosVindoDeCima){  
        //obs: .then carrega os dados vindo de cima para essa função aqui.

        listaDeLivrosGlobal = dadosVindoDeCima;

     

    })
}


//------------------------------------------------------------------------
            // criação da função geral que  mostra os dados na tela
function mostrarLivros (umaListaDeLivros)   {

    //buscando referencia html e criando variavel ul
    const ul = document.getElementById('buscarLivrosjs');
    ul.innerHTML = '';
     for(let i=0; i < umaListaDeLivros.length ;i ++)    {
        const  livro = umaListaDeLivros[i];

        const li = document.createElement('li');
    li.textContent = 'ID: ' + livro.Id + ' | Título: ' + livro.Titulo + ' | Autor: ' + livro.Autor;

        ul.appendChild(li);
        }
    }
//------------------------------------------------------------------------

//---------------------------------------------------------------------------
            // criação da função que trata o submit do form e filtra a lista vinda do navegador 
            // para depois passar a função mostrar filtrado

function configurarBusca (){
    const form = document.querySelector('form');
     form.addEventListener('submit', function(event){
        event.preventDefault();

        const inputNome = document.getElementById('tituloLivro').value.trim().toLowerCase();
        const inputId = document.getElementById('idLivro').value.trim();
        let resultadoFiltrado = listaDeLivrosGlobal;

        if(inputNome !== ''){
            resultadoFiltrado = resultadoFiltrado.filter(function(livro){
                return livro.Titulo.toLowerCase().includes(inputNome);
            })
        }
        
        if(inputId !== '') {
            resultadoFiltrado = resultadoFiltrado.filter(function(livro){
                return livro.Id.toString() === inputId;
            });
        }
        mostrarLivros(resultadoFiltrado);
     })
}

//---------------------------------------------------------------------------


//chamada dos metodos importantes para funcionar.
carregarLivros();
configurarBusca();

