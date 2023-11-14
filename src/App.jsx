
import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import First1 from './components/First1'
import ChoosePath from './components/ChoosePath'

function App() {

  const stages = [
    {id:1, name:'start'},
    {class:'endereçamento', name:'part1', pergunta:'nome da denise?',resp1:'nery', resp2:'silva', resp3:'string', resp4:'martins'},
    {class:'endereçamento', name:'part2',  pergunta:'lucas?',resp1:'ss', resp2:'nn', resp3:'talvez', resp4:'sipa'},
    {class:'endereçamento', name:'part3',  pergunta:'aiai?',resp1:'iiii', resp2:'taa', resp3:'sss', resp4:'papa'}
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
    setGameStage(2)
  }

  const passFase = () => {
    setGameStage(n + 1)
    setPergunta(stages[n+1].pergunta)
    setResp1(stages[n+1].resp1)
    setResp2(stages[n+1].resp2)
    setResp3(stages[n+1].resp3)
    setResp4(stages[n+1].resp4)
    setN(gameStage + 1)
  }

  const mistake = () => {
    setGameStage(0)
    setN(0)
    setTries(tries+1)
  }


  return (
    <div className="App">
      {gameStage === 0 && <Start tries={tries} startGame={passFase}/>}
      {gameStage === 1 && <ChoosePath></ChoosePath>}     
    </div>
  )
}

export default App
