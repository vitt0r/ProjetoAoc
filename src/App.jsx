
import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import First1 from './components/First1'

function App() {

  const stages = [
    {id:1, name:'start'},
    {id:2, name:'part1', pergunta:'nome da denise?',resp1:'nery', resp2:'silva', resp3:'string', resp4:'martins'},
    {id:3, name:'part2',  pergunta:'lucas da o cu?',resp1:'ss', resp2:'nn', resp3:'talvez', resp4:'sipa'},
  ]

  const [tries,setTries] = useState('0')
  const [gameStage, setGameStage] = useState(0)
  const[pergunta,setPergunta]= useState()
  const [resp1,setResp1] = useState()
  const [resp2,setResp2] = useState()
  const [resp3,setResp3] = useState()
  const [resp4,setResp4] = useState()
  const [n,setN] = useState(0)

  const passFase = () => {
    setN(gameStage + 1)
    setGameStage(n)
   console.log(n)
  }

  const mistake = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {gameStage === 0 ? <Start tries={tries} startGame={passFase}/> : <First1 pergunta="Nome da denise?" resp1="nery" resp2="silva" resp3="string" resp4="martins"/>}
      
     
    </div>
  )
}

export default App
