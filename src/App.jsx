import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import First1 from './components/First1';
import ChoosePath from './components/ChoosePath';
import Error from './components/Error';

function App() {
  //perguntas e respostas
  const data = [
    {pergunta:'Endereçamento?', resp1:'resp1',resp2:'resp2', resp3:'resp3', respcorreta:'certa'},
    {text:'voce errou por isso isso isso1'},
    {text:'voce errou por isso isso isso2'},
    {text:'voce errou por isso isso isso3'},
    {pergunta:'Pipeline?', resp1:'resp11',resp2:'resp22', resp3:'resp33', respcorreta:'certa'},
    {text:'voce errou por isso isso isso1'},
    {text:'voce errou por isso isso isso2'},
    {text:'voce errou por isso isso isso3'},
    {pergunta:'Hierarquia?', resp1:'resp11',resp2:'resp22', resp3:'resp33', respcorreta:'certa'}
  ]
  const [tries, setTries] = useState(0);
  const [gameStage, setGameStage] = useState(-2);
  const [pergunta, setPergunta] = useState('');
  const [resp1, setResp1] = useState('');
  const [resp2, setResp2] = useState('');
  const [resp3, setResp3] = useState('');
  const [resp4, setResp4] = useState('');
  const [error, setError] = useState('errou');
  const [fase,setFase]  = useState(0);

  useEffect(() => {
    if (gameStage >= 0) {
      //seta a pergunta e a resposta das fases
      setPergunta(data[gameStage].pergunta);
      setResp1(data[gameStage].resp1);
      setResp2(data[gameStage].resp2);
      setResp3(data[gameStage].resp3);
      setResp4(data[gameStage].respcorreta);
    }
  }, [gameStage, data]);

  useEffect(() => {
    if (gameStage % 4 !== 0 && gameStage > 0) {
      //cai na mensagem de erro
      setError(data[gameStage].text);
    }
  }, [gameStage, data]);

  const pathEndereco = () => {
    console.log(gameStage);
    setGameStage(0);
  };

  const pathPipe = () => {
    console.log(gameStage);
    setGameStage(4);
  };

  const pathHierarquia = () => {
    console.log(gameStage);
    setGameStage(8);
  };

  const passFase = () => {
    setFase((prevFase) => prevFase + 1);
    setGameStage((prevGameStage) => prevGameStage + 4);
  };

  const reboot = () => {
    setGameStage(-2);
    setTries(tries + 1);
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
      {gameStage % 4 === 0 && (
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
      {gameStage % 4 !== 0 && gameStage > 0 && (
        <Error text={error} reboot={reboot}>
          {' '}
        </Error>
      )}
    </div>
  );
}

export default App;