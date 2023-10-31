
import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import First1 from './components/First1'

function App() {

  const stages = [
    {id:1, name:'start'},
    {id:2, name:'part1', pergunta:'nome da denise?',resp1:'nery', resp2:'silva', resp3:'string', resp4:'martins'},
    {id:3, name:'part2',  pergunta:'lucas?',resp1:'ss', resp2:'nn', resp3:'talvez', resp4:'sipa'},
    {id:4, name:'part3',  pergunta:'aiai?',resp1:'iiii', resp2:'taa', resp3:'sss', resp4:'papa'}
  ]

  const [tries,setTries] = useState(0)
  const [gameStage, setGameStage] = useState(0)
  const[pergunta,setPergunta]= useState()
  const [resp1,setResp1] = useState()
  const [resp2,setResp2] = useState()
  const [resp3,setResp3] = useState()
  const [resp4,setResp4] = useState()
  const [n,setN] = useState(0)

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
      {gameStage === 0 ? <Start tries={tries} startGame={passFase}/> : <First1 pergunta={pergunta} resp1={resp1} resp2={resp2} resp3={resp3} resp4={resp4} startGame={passFase} mistake={mistake}/>}     
    </div>
  )
}

export default App
