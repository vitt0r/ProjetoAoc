
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

  return (
    <div className="App">
      {gameStage === 'start' && <Start tries={tries} startGame={startGame}/>}
      {gameStage === 'part1' && <First1/>}
    </div>
  )
}

export default App
