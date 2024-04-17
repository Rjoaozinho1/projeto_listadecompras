import './app.css'
import React, { useState } from 'react';

function ListaDeCompras() {
  // Estado para armazenar a lista de itens de compra
  const [itens, setItens] = useState([]);
  // Estado para armazenar o nome do item digitado pelo usuário
  const [nomeItem, setNomeItem] = useState('');

  // Função para adicionar um novo item à lista
  const adicionarItem = () => {
    // Verifica se o nome do item não está vazio
    if (nomeItem.trim() !== '') {
      // Adiciona o novo item à lista de itens
      setItens([...itens, { nome: nomeItem, comprado: false }]);
      // Limpa o campo de entrada do nome do item
      setNomeItem('');
    }
  };
  
  // Função para marcar um item como comprado
  const marcarComoComprado = (index) => {
    // Cria uma cópia da lista de itens
    const novosItens = [...itens];
    // Marca o item na posição index como comprado
    novosItens[index].comprado = true;
    // Atualiza o estado da lista de itens
    setItens(novosItens);
  };
  
  // Função para limpar a lista de compras
  const limparLista = () => {
    // Define a lista de itens como vazia
    setItens([]);
  };
  
  return (
    <div>
      <h1>Lista de Compras</h1>
      {/* Campo de entrada para o nome do item */}
      <input
        type="text"
        value={nomeItem}
        onChange={(e) => setNomeItem(e.target.value)}
        placeholder="Adicionar item"
      />
      {/* Botão para adicionar o item à lista */}
      <button onClick={adicionarItem}>Add</button>
      {/* Botão para limpar a lista de compras */}
      <button onClick={limparLista}>Clear</button>
      {/* Lista de itens de compra */}
      <ul>
        {/* Mapeia cada item na lista e renderiza um elemento <li> para cada um */}
        {itens.map((item, index) => (
          <li key={index} style={{ textDecoration: item.comprado ? 'line-through' : 'none' }}>
            {/* Nome do item */}
            {item.nome}
            {/* Botão para marcar o item como comprado, se ainda não estiver marcado */}
            {!item.comprado && (
              <button onClick={() => marcarComoComprado(index)}>Comprado</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeCompras;
