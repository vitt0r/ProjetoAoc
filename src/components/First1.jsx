import React from 'react'
import './First1.css'
function First1({pergunta,resp1,resp2,resp3,resp4,startGame}) {
  return (
    <div className="First1">

    <h1>{pergunta}</h1>

    <div id="row1" className='row'>
    <div className="box" onClick={startGame}>{resp1}</div>
    <div className="box">{resp2}</div>
    </div>
    
    <div id="row2" className='row'>
    <div className="box">{resp3}</div>
    <div className="box">{resp4}</div>
    </div>
    </div>
  )
}

export default First1