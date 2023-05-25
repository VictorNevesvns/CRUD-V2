const btnSalvar = document.querySelector('#btnSalvar'); // selecionando botão salvar
const tbody = document.querySelector('tbody'); //permite adicionar novas linhas

function adicionarLinha() { //quando chamado pelo botão salvar adiciona novas linhas conforme valor inserido nos campos

  //adiciona 
  const nome = document.querySelector('#fname').value; // o nome digitado no campo nome será salvo na celula nome.
  const funcao = document.querySelector('#ffuncao').value;

  const linha = document.createElement('tr'); //adiciona linha
  

  //adiciona
  const celulaNome = document.createElement('td');//exibe o nome na linha
  celulaNome.textContent = nome;
  const celulaFuncao = document.createElement('td');
  celulaFuncao.textContent = funcao;
  
  const celulaEditar = document.createElement('td');
  const botaoEditar = document.createElement('button');// permite a edição da linha
  botaoEditar.textContent = 'Editar';
  botaoEditar.addEventListener('click', editarPessoa);// ao ser clicado permite a edição 
  celulaEditar.appendChild(botaoEditar);
  
  const celulaExcluir = document.createElement('td');
  const botaoExcluir = document.createElement('button'); // chama a função de excluir
  botaoExcluir.textContent = 'Excluir';
  botaoExcluir.addEventListener('click', excluirPessoa);
  celulaExcluir.appendChild(botaoExcluir);
  

  //adiciona
  linha.appendChild(celulaNome);// adiciona a celula nome na linha
  linha.appendChild(celulaFuncao);
  linha.appendChild(celulaEditar);//adiciona a celula de edição na linha
  linha.appendChild(celulaExcluir);//adiciona a celula de exclusão na linha
  
  tbody.appendChild(linha);//adiciona linha completa
}

function editarPessoa() { // é chamada quando o botão de edição é clicado aparece o prompt
  const novaNome = prompt('Digite o novo nome');
  if (novaNome !== null) {
    const celulaNome = this.parentNode.parentNode.firstChild;
    celulaNome.textContent = novaNome;
  }
}

function excluirPessoa() { //exclui a linha
  const linha = this.parentNode.parentNode;
  tbody.removeChild(linha);
}

btnSalvar.addEventListener('click', function() {
  adicionarLinha();
});
