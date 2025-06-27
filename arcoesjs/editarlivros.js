

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




function mostrarLivros(){

    const ul = document.getElementById('inserirLivrosJS');
        ul.innerHTML = '';
    for( let i =0; i<objetoJavaScript.length; i ++){
    const li = document.createElement('li');
    li.textContent = `Id: ${objetoJavaScript[i].Id}| Título:${objetoJavaScript[i].Titulo} | Autor: ${objetoJavaScript[i].Autor}| Genero:${objetoJavaScript[i].Genero}| Preco: ${objetoJavaScript[i].Preco}| Quantidade: ${objetoJavaScript[i].Quantidade} ` ;
    ul.appendChild(li);
    }
}



function carregarLivros() {
    fetch('livros.json')
    .then(converterResposta)
    .then(receberObjResposta);
}



carregarLivros();


