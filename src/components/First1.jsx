import React, { useState, useEffect } from 'react';
import './First1.css';

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function First1({ gameStage, pergunta, resp1, resp2, resp3, resp4, passFase, error1, error2, error3 }) {
  const shuffledOptions = shuffleArray([resp1, resp2, resp3, resp4]);

  const handleButtonClick = (selectedOption) => {
    if (selectedOption === resp4) {
      // Resposta correta
      passFase();
    } else {
      // Resposta errada
      if (selectedOption === resp1) {
        error1();
      } else if (selectedOption === resp2) {
        error2();
      } else if (selectedOption === resp3) {
        error3();
      }
    }
  };

  return (
    <div className="First1">
      <button id='fase'>{gameStage + 1}</button>
      <h1>{pergunta}</h1>

      <div id="row1" className='row'>
        {shuffledOptions.slice(0, 2).map((option, index) => (
          <div key={index} className="box" onClick={() => handleButtonClick(option)}>
            {option}
          </div>
        ))}
      </div>

      <div id="row2" className='row'>
        {shuffledOptions.slice(2).map((option, index) => (
          <div key={index} className="box" onClick={() => handleButtonClick(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default First1;