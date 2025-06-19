//Aqui vamos pegar os arquivos do json e setar no html dinamicamente

const elementoUl = document.getElementById('idlistadelivrosjs');

//aqui o navegador vai buscar o arquivo json na mesma pasta q estão os html's
fetch('livros.json')

//Aqui o navegador deixa a resposta da requsição
//é um objeto com varias informações de requisição
.then(resultadoRequisicao => {
    if (!resultadoRequisicao.ok){
        throw new Error ('Erro ao carregar o arquivo json');
    }
    //aqui há um else não digitado

    //aqui, se tudo veio ok de cima, a requisição é tranformada em objeto java script usando a função .json()))
    return resultadoRequisicao.json();
}) 

.then(obJsListaLivrojs =>{
    obJsListaLivrojs.forEach(livro=> {
        const li = document.createElement('li');
            li.textContent = '';
        
        
                for (const chave in livro){
                const p = document.createElement('p');
                p.textContent = `${chave}: ${livro[chave]}`;
                li.appendChild(p);
             }
                 elementoUl.appendChild(li)

        });

})
.catch(erro => {
    console.error('Error:' , erro);
    lista.textContent = 'Erro ao carregar os livros';
});