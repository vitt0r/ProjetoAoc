
import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import First1 from './components/First1'
import ChoosePath from './components/ChoosePath'
import Error from './components/Error'

function App() {

 /* const stages = [
    {id:1, name:'start'},
    {class:'endereçamento', name:'part1', pergunta:'nome da denise?',resp1:'nery', resp2:'silva', resp3:'string', resp4:'martins'},
    {class:'endereçamento', name:'part2',  pergunta:'lucas?',resp1:'ss', resp2:'nn', resp3:'talvez', resp4:'sipa'},
    {class:'endereçamento', name:'part3',  pergunta:'aiai?',resp1:'iiii', resp2:'taa', resp3:'sss', resp4:'papa'}
  ]*/
  const data = [
    {pergunta:'Endereçamento?', resp1:'resp1',resp2:'resp2', resp3:'resp3', respcorreta:'resp4'},
    {text:'voce errou por isso isso isso1'},
    {text:'voce errou por isso isso isso2'},
    {text:'voce errou por isso isso isso3'},
    {pergunta:'Pipeline?', resp1:'resp11',resp2:'resp22', resp3:'resp33', respcorreta:'resp44'},
    {text:'voce errou por isso isso isso1'},
    {text:'voce errou por isso isso isso2'},
    {text:'voce errou por isso isso isso3'},
    {pergunta:'Hierarquia?', resp1:'resp11',resp2:'resp22', resp3:'resp33', respcorreta:'resp44'}
  ]

  const [tries,setTries] = useState(0)
  const [gameStage, setGameStage] = useState(-2)
  const[pergunta,setPergunta]= useState()
  const [resp1,setResp1] = useState()
  const [resp2,setResp2] = useState()
  const [resp3,setResp3] = useState()
  const [resp4,setResp4] = useState()
  const [error,setError] = useState('errou')


  const pathEndereco = () =>{
    console.log(gameStage)
    setPergunta(data[0].pergunta)
    setResp1(data[0].resp1)
    setResp2(data[0].resp2)
    setResp3(data[0].resp3)
    setResp4(data[0].respcorreta)
    setGameStage(0)
  }

  const pathPipe = () =>{
    console.log(gameStage)
    setPergunta(data[4].pergunta)
    setResp1(data[4].resp1)
    setResp2(data[4].resp2)
    setResp3(data[4].resp3)
    setResp4(data[4].respcorreta)
    setGameStage(4)
  }

  const pathHierarquia = () =>{
    console.log(gameStage)
    setPergunta(data[8].pergunta)
    setResp1(data[8].resp1)
    setResp2(data[8].resp2)
    setResp3(data[8].resp3)
    setResp4(data[8].respcorreta)
    setGameStage(8)
  }

  const passFase = () => {
    console.log(gameStage)
    setGameStage(gameStage + 4)
    setPergunta(data[gameStage].pergunta)
    setResp1(data[gameStage].resp1)
    setResp2(data[gameStage].resp2)
    setResp3(data[gameStage].resp3)
    setResp4(data[gameStage].respcorreta)
  }

  const reboot = () => {
    setGameStage(-2)
    setTries(tries+1)
  }

  const choose =()=>{
    setGameStage(-1)
  }

  const error1 = () =>{
  setGameStage(gameStage+1)
  console.log(gameStage)
  setError(data[gameStage].text)
  console.log(error)
  }

  const error2 = () =>{
    setGameStage(gameStage+2)
    console.log(gameStage)
    setError(data[gameStage].text)
    console.log(error)

    }

  const error3 = () =>{
    setGameStage(gameStage+3)
    console.log(gameStage)
    setError(data[gameStage].text)
    console.log(error)

      }
  

  return (
    <div className="App">
      {gameStage === -2 && <Start tries={tries} pathing={choose}/>}
      {gameStage === -1 && <ChoosePath pathEndereco={pathEndereco} pathPipe={pathPipe} pathHierarquia={pathHierarquia}></ChoosePath>}
      {gameStage % 4 == 0 && <First1 pergunta={pergunta} resp1={resp1} resp2={resp2} resp3={resp3} resp4={resp4} passFase={passFase} error1={error1} error2={error2} error3={error3}></First1>}
      {gameStage % 4 != 0 && gameStage>0 && <Error text={error} reboot={reboot}> </Error>}       
    </div>
  )
}

export default App
