
import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import First1 from './components/First1'

function App() {

  const stages = [
    {id:1, name:'start'},
    {id:2, name:'part1'},
    {id:3, name:'part2'},
  ]

  const [tries,setTries] = useState('0')
  const [gameStage, setGameStage] = useState(stages[0].name)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const mistake = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' ? <Start tries={tries} startGame={startGame}/> : null}
      {gameStage === 'part1' ? <First1 pergunta="Nome da denise?" resp1="nery" resp2="silva" resp3="string" resp4="martins"/> : null}
      {gameStage === 'part2' ? <First1 pergunta="Penis?" resp1="sim" resp2="s33333im" resp3="s17im" resp4="s22im"/> : null}
    </div>
  )
}

export default App
