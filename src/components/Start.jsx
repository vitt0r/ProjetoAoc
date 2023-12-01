import React from 'react';
import logo from '../image/Unifesp_simples_policromia_RGB.png'; // Caminho relativo à localização de Start.jsx
import './Start.css'; // Certifique-se de importar o arquivo CSS

function Start({ tries, pathing }) {
  const startStyle = {
    backgroundColor: '#3498db', // Defina a cor de fundo desejada
  };

  return (
    <div className="Start">
      {/* Adicione a imagem do logo acima do texto "AOC QUIZZ" */}
      <img src={logo} alt="Logo" className="logo" />

      <h1> AOC QUIZZ </h1>
      <button onClick={pathing}>Start Game</button>
      <p> Quantidades de tentativas: {tries}</p>
    </div>
  );
}

export default Start;
