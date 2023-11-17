
import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import First1 from './components/First1'
import ChoosePath from './components/ChoosePath'

function App() {

 /* const stages = [
    {id:1, name:'start'},
    {class:'endereçamento', name:'part1', pergunta:'nome da denise?',resp1:'nery', resp2:'silva', resp3:'string', resp4:'martins'},
    {class:'endereçamento', name:'part2',  pergunta:'lucas?',resp1:'ss', resp2:'nn', resp3:'talvez', resp4:'sipa'},
    {class:'endereçamento', name:'part3',  pergunta:'aiai?',resp1:'iiii', resp2:'taa', resp3:'sss', resp4:'papa'}
  ]*/
  const endereçamento = [
    {id:1, pergunta:'Endereçamento?', resp1:'resp1',resp2:'resp2', resp3:'resp3', respcorreta:'resp4'},
    {id:2, pergunta:'pergunta2?', resp1:'resp11',resp2:'resp22', resp3:'resp33', respcorreta:'resp44'}
  ]

  const [tries,setTries] = useState(0)
  const [gameStage, setGameStage] = useState(0)
  const[pergunta,setPergunta]= useState()
  const [resp1,setResp1] = useState()
  const [resp2,setResp2] = useState()
  const [resp3,setResp3] = useState()
  const [resp4,setResp4] = useState()
  const [n,setN] = useState(0)


  const pathEndereco = () =>{
    setGameStage(30)
    console.log(gameStage)
   
  }

  const pathPipe = () =>{
    setGameStage(300)
  }

  const pathHierarquia = () =>{
    setGameStage(3000)
  }

  const passFase = () => {
    setGameStage(n + 1)
    setPergunta(endereçamento[n].pergunta)
    setResp1(endereçamento[n].resp1)
    setResp2(endereçamento[n].resp2)
    setResp3(endereçamento[n].resp3)
    setResp4(endereçamento[n].respcorreta)
    setN(gameStage + 1)
    console.log(gameStage)
  }

  const mistake = () => {
    setGameStage(0)
    setN(0)
    setTries(tries+1)
  }


  return (
    <div className="App">
      {gameStage === 0 && <Start tries={tries} startGame={passFase}/>}
      {gameStage === 1 && <ChoosePath pathEndereco={pathEndereco} pathPipe={pathPipe} pathHierarquia={pathHierarquia}></ChoosePath>}
      {gameStage === 30 && <First1 pergunta={pergunta} resp1={resp1} resp2={resp2} resp3={resp3} resp4={resp4} passFase={passFase} mistake={mistake}></First1>}       
    </div>
  )
}

export default App
