function listarLivros() {
    // Pega o tbody da tabela pelo id da tabela + querySelector
    const tbody = document.getElementById('idtabeladelivrosjs');
    
    // Limpa o conteúdo do tbody antes de inserir
    tbody.innerHTML = '';

    // Para cada livro, cria uma linha (tr) e as células (td)
    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];
        
        const tr = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.textContent = livro.Id;
        
        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = livro.Titulo;
        
        const tdAutor = document.createElement('td');
        tdAutor.textContent = livro.Autor;

        // Adiciona as células à linha
        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdAutor);

        // Adiciona a linha ao corpo da tabela
        tbody.appendChild(tr);
    }
}