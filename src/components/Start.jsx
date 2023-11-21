import React from 'react'
import './Start.css'

function Start({tries, pathing}) {
  return (
    <div className="Start">
    <h1> AOC QUIZZ </h1>
      <button onClick={pathing}>Start Game</button>
      <p> Quantidades de tentativas: {tries}</p>
      </div>
  )
}

export default Start