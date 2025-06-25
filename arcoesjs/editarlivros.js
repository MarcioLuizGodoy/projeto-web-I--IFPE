
//Primeira parte do codigo

let objetoJavaScript;

function tratarRespostaDarequisicao(response) {
    if(response.ok == true) {
       return response.json();
    } else {
        throw new Error("Erro ao carregar o arquivo. Status: " + response.status);
    }
}

function armazenarLivros(responseObjJs) {
    objetoJavaScript = responseObjJs;
}

function tratarErro (erro) {
    console.error("Erro na requisição do livros.json" , erro);
}

//Segunda parte do codigo
//essa função é chamada imediatamento quando o usuario submeter a edição do livro.
// o event tem o papel de linkar as duas coisas

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

    let livroEncontrado = false;

    for(let i = 0; i < objetoJavaScript.length; i ++) {

    if(objetoJavaScript[i].Id == idProcurado ) {

        objetoJavaScript[i].Titulo = novoTitulo ;
        objetoJavaScript[i].Autor = novoAutor ;
        objetoJavaScript[i].Genero = novoGenero ;
        objetoJavaScript[i].Preco =  Number(novopreco);
        objetoJavaScript[i].Quantidade =  novaQuantidade;
        //ultimoArray = objetoJavaScript[i];
        livroEncontrado = true;
        mostrarLivros();
        form.reset();
    }else{}
}

} 

//terceira parte do codigo
// essa função mostrar livros vai ser chamada dentro da função  editar livros
const ul = document.getElementById('inserirLivrosJS');
ul.innerHTML = '';

function mostrarLivros(){
    for( let i =0; i<objetoJavaScript.length; i ++){

        const li = document.createElement('li');
li.textContent = ` Id: ${objetoJavaScript[i].Id}| Título:${objetoJavaScript[i].Titulo} | Autor: ${objetoJavaScript[i].Autor}| Genero:${objetoJavaScript[i].Genero}| Preco: ${objetoJavaScript[i].Preco}| Quantidade: ${objetoJavaScript[i].Quantidade} ` ;

            ul.appendChild(li)
    }
}

//Quarta parte do codigo
function carregarLivros() {
    fetch('livros.json')
    .then(tratarRespostaDarequisicao)
    .then(armazenarLivros)
    .catch(tratarErro);
}

carregarLivros();
