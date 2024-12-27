// Função para preencher a tabela
function preencherTabela(dados) {
    const tbody = document.getElementById('ranking-tbody'); // Acessa o tbody

    dados.forEach(item => {
        // Cria uma nova linha para cada item
        const tr = document.createElement('tr');

        // Cria as células da tabela
        const tdNome = document.createElement('td');
        tdNome.textContent = item.nome; // Adiciona o nome

        const tdTarefas = document.createElement('td');
        tdTarefas.textContent = item.tarefas; // Adiciona o número de tarefas

        const tdPontos = document.createElement('td');
        tdPontos.textContent = item.pontos; // Adiciona os pontos

        // Adiciona as células à linha
        tr.appendChild(tdNome);
        tr.appendChild(tdTarefas);
        tr.appendChild(tdPontos);

        // Adiciona a linha ao corpo da tabela
        tbody.appendChild(tr);
    });
}

// Função para buscar os dados da API
function buscarDados() {
    fetch('http://localhost:3000/horacio_python_raking')
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => preencherTabela(data.horacio_python_raking))  // Preenche a tabela
        .catch(error => console.error('Erro ao buscar dados:', error)); // Tratamento de erro
}

// Chama a função para buscar os dados assim que a página carregar
window.onload = buscarDados;
