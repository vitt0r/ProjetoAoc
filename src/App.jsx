import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import First1 from './components/First1';
import FirstD1 from './components/FirstD1';
import FirstD2 from './components/FirstD2';
import ChoosePath from './components/ChoosePath';
import Error from './components/Error';


function App() {
  //perguntas e respostas
  const data = [
    { pergunta: 'Qual o modo de endereçamento requer apenas uma referência de memória para acessar o operando?', resp1: 'Imediato', resp2: 'Indireto', resp3: 'Pilha e Registrador', respcorreta: 'Direto' },
    { text: 'Está errado, porque o imediato não acessa a memória' },
    { text: 'Está errado, pois são necessários dois acessos a memória no indireto' },
    { text: 'Está errado, pois aqui se contem o endereço do registrador' },
    { pergunta: 'A operação lw é qual tipo de operação?', resp1: 'R', resp2: 'K', resp3: 'J', respcorreta: 'T' },
    { text: 'Não é esse tipo de operação.' },
    { text: 'Não é esse tipo de operação.' },
    { text: 'Não é esse tipo de operação.' },
    { pergunta: 'O que é endereçamento relativo?', resp1: 'Acesso direto à posição de memória física.', resp2: 'Utilização de endereços fixos para armazenamento.', resp3: 'Método de acesso exclusivo a memória principal.', respcorreta: 'Acesso a posições de memória em relação a um ponto de referência.' },
    { text: 'O endereçamento relativo não envolve acesso direto à posição física da memória.' },
    { text: 'O endereçamento relativo não utiliza endereços fixos, pois eles são determinados em relação a um ponto de referência dinâmico.' },
    { text: 'O endereçamento relativo não é exclusivo para a memória principal, pode ser aplicado em vários contextos de memória.' },
    { pergunta: 'Em sistemas de 32 bits, quantos bytes são necessários para representar um endereço de memória?', resp1: '2', resp2: '32', resp3: '64', respcorreta: '6' },
    { text: 'Está errado' },
    { text: 'Está errado' },
    { text: 'Está errado' },
    { pergunta: 'Qual é a diferença entre endereçamento absoluto e relativo ?', resp1: 'O endereçamento absoluto usa endereços fixos, enquanto o relativo usa endereços dinâmicos.', resp2: 'O endereçamento relativo é exclusivo para sistemas operacionais Unix.', resp3: 'O endereçamento absoluto é mais eficiente em termos de espaço de armazenamento.', respcorreta: 'O endereçamento relativo usa posições de memória em relação a um ponto de referência, enquanto o absoluto usa endereços fixos.' },
    { text: 'O endereçamento absoluto usa endereços fixos, enquanto o relativo usa posições em relação a um ponto de referência.' },
    { text: 'A eficiência em termos de espaço de armazenamento não é a principal distinção entre esses dois tipos de endereçamento.' },
    { text: ' O endereçamento relativo não é exclusivo para sistemas operacionais Unix; pode ser usado em diferentes sistemas.' },
    { pergunta: 'O que é um pipeline em arquitetura de computadores?', resp1: 'Um componente de armazenamento temporário.', resp2: 'Um tipo de memória cache', resp3: 'Uma unidade de controle central.', respcorreta: 'Uma sequência de estágios de processamento' },
    { text: ' Um pipeline não é um componente de armazenamento temporário, mas uma sequência de estágios de processamento.' },
    { text: 'Um pipeline não é uma memória cache, mas sim um conceito relacionado à execução eficiente de instruções.' },
    { text: 'Um pipeline não é uma unidade de controle central, mas sim uma abordagem para melhorar o desempenho do processamento de instruções.' },
    { pergunta: 'O que é o estágio "Execução" em um pipeline de instruções?', resp1: 'Decodificação das instruções', resp2: 'Busca da próxima instrução.', resp3: 'Transferência de dados entre registradores', respcorreta: 'Execução efetiva das operações da instrução.' },
    { text: ' A decodificação geralmente é um estágio separado, não o estágio de execução.' },
    { text: ' A busca da próxima instrução geralmente ocorre em um estágio diferente, não durante a execução.' },
    { text: 'A transferência de dados entre registradores é uma operação diferente que pode ocorrer em outros estágios, não no estágio de execução.' },
    { pergunta: 'Como o conceito de pipeline contribui para o desempenho de uma CPU?', resp1: 'Aumentando a latência.', resp2: 'Reduzindo a complexidade da arquitetura.', resp3: 'Eliminando a necessidade de caches.', respcorreta: 'Permitindo a execução simultânea de várias instruções.' },
    { text: ' Pipelines são projetados para reduzir a latência, não aumentá-la.' },
    { text: '  Pipelines introduzem alguma complexidade na arquitetura, não a reduzem.' },
    { text: 'Pipelines e caches são conceitos distintos. Os pipelines melhoram o processamento de instruções, enquanto os caches melhoram o acesso à memória. Eliminar a necessidade de caches não é um objetivo dos pipelines.' },
    { pergunta: 'Qual é o objetivo principal do uso de pipelines em CPUs?', resp1: 'Reduzir o consumo de energia', resp2: 'Aumentar a complexidade do processamento.', resp3: 'Melhorar a capacidade de armazenamento.', respcorreta: 'Executar várias instruções simultaneamente.' },
    { text: ' O objetivo principal dos pipelines não é reduzir o consumo de energia, mas melhorar o desempenho e a eficiência do processamento de instruções.' },
    { text: 'Embora os pipelines introduzam alguma complexidade, seu principal objetivo não é aumentar a complexidade, mas melhorar a eficiência.' },
    { text: 'Os pipelines não têm como objetivo melhorar a capacidade de armazenamento, mas sim otimizar a execução de instruções.' },
    { pergunta: 'Quais são as fases típicas de um pipeline em arquitetura de computadores?', resp1: 'Controle, Leitura, Escrita, Execução, Memória', resp2: 'Entrada, Processamento, Saída, Armazenamento, Controle', resp3: 'Previsão, Renomeação, Leitura, Escrita de Resultados, Execução', respcorreta: ' Busca de Instrução, Decodificação de Instrução, Execução, Busca de Operandos, Escrita de Resultados' },
    { text: 'Esta opção não reflete as fases padrão de um pipeline em arquitetura de computadores.' },
    { text: 'As fases mencionadas (Entrada, Processamento, Saída, Armazenamento, Controle) não representam as etapas de um pipeline em arquitetura de computadores, mas parecem mais relacionadas a um sistema de computação em geral.' },
    { text: 'Pipelines e caches são conceitos distintos. Os pipelines melhoram o processamento de instruções, enquanto os caches melhoram o acesso à memória. Eliminar a necessidade de caches não é um objetivo dos pipelines.' },

  ]
  const [tries, setTries] = useState(0);
  const [gameStage, setGameStage] = useState(-2);
  const [pergunta, setPergunta] = useState('');
  const [resp1, setResp1] = useState('');
  const [resp2, setResp2] = useState('');
  const [resp3, setResp3] = useState('');
  const [resp4, setResp4] = useState('');
  const [error, setError] = useState('errou');
  const [fase, setFase] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showCongratulationsMessage, setShowCongratulationsMessage] = useState(false);


  useEffect(() => {
    if (fase === 5) {
      setShowCongratulations(true);
    } else if (gameStage >= 0) {
      setPergunta(data[gameStage].pergunta);
      setResp1(data[gameStage].resp1);
      setResp2(data[gameStage].resp2);
      setResp3(data[gameStage].resp3);
      setResp4(data[gameStage].respcorreta);
    }
  }, [gameStage, data, fase]);

  useEffect(() => {
    if (gameStage % 4 !== 0 && gameStage > 0) {
      //cai na mensagem de erro
      setError(data[gameStage].text);
      setShowCongratulationsMessage(false);
    }
  }, [gameStage, data]);

  const pathEndereco = () => {
    console.log(gameStage);
    setGameStage(0)
    setShowCongratulationsMessage(false);
  };


  const pathPipe = () => {
    console.log(gameStage);
    setGameStage(20);
    if (fase == 3) {
      setShowCongratulationsMessage(false);
    }
  };

  const pathHierarquia = () => {
    console.log(gameStage);
    setGameStage(20);
    setShowCongratulationsMessage(false);
  };

  const passFase = () => {
    setFase((prevFase) => prevFase + 1);
    setGameStage((prevGameStage) => prevGameStage + 4);
    console.log(gameStage)
  };

  const reboot = () => {
    setShowCongratulationsMessage(false); // Esconder a mensagem de parabéns ao voltar para o início
    setShowCongratulations(false);
    setGameStage(-2);
    setTries(tries + 1);
    setFase(0)
  };

  const choose = () => {
    setGameStage(-1);
  };

  const error1 = () => {
    setGameStage((prevGameStage) => prevGameStage + 1);
  };

  const error2 = () => {
    setGameStage((prevGameStage) => prevGameStage + 2);
  };

  const error3 = () => {
    setGameStage((prevGameStage) => prevGameStage + 3);
  };

  return (
    <div className="App">
      {gameStage === -2 && <Start tries={tries} pathing={choose} />}
      {gameStage === -1 && (
        <ChoosePath
          pathEndereco={pathEndereco}
          pathPipe={pathPipe}
          pathHierarquia={pathHierarquia}
        ></ChoosePath>
      )}
      {gameStage % 4 === 0 && gameStage !== 4 && gameStage !== 12 && !showCongratulations && (
        <First1
          gameStage={fase}
          pergunta={pergunta}
          resp1={resp1}
          resp2={resp2}
          resp3={resp3}
          resp4={resp4}
          passFase={passFase}
          error1={error1}
          error2={error2}
          error3={error3}
        ></First1>
      )}
      {gameStage === 4 && !showCongratulations && <FirstD1
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD1>}


      {gameStage === 12 && !showCongratulations && <FirstD2
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD2>}

      {showCongratulations && (
        <div>
          <h2>Parabéns! Você respondeu todas as perguntas corretamente.</h2>
          <button onClick={reboot}>Voltar para o início</button>
        </div>
      )}

      {gameStage % 4 !== 0 && gameStage > 0 && (
        <Error text={error} reboot={reboot}>
          {' '}
        </Error>
      )}

    </div>
  );
}


export default App;