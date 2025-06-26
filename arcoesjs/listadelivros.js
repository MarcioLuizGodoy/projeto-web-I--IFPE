
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

const elementoUl = document.getElementById('idlistadelivrosjs');


function listarLivros(){
    elementoUl.innerHTML = '';
     for(let i = 0 ; i< livros.length; i++){
            const livro = livros[i];
            const li = document.createElement('li');
            li.textContent = li.textContent = `ID: ${livro.Id} | Título: ${livro.Titulo} | Autor: ${livro.Autor}`;
            elementoUl.appendChild(li);

        }
          

}
carregarLivros()


           /*
           PODE SER FEITO ASSIM TBEM:


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
     return fetch('livros.json')
        .then(converterResposta) 
        .then(receberObj);
        
}

const elementoUl = document.getElementById('idlistadelivrosjs');


function listarLivros(){
    elementoUl.innerHTML = '';
     for(let i = 0 ; i< livros.length; i++){
            const livro = livros[i];
            const li = document.createElement('li');
            li.textContent = li.textContent = `ID: ${livro.Id} | Título: ${livro.Titulo} | Autor: ${livro.Autor}`;
            elementoUl.appendChild(li);

        }
          

}

carregarLivros().then(listarLivros);

*/
                   
                
