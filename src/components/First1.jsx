import React from 'react'
import './First1.css'
function First1({pergunta,resp1,resp2,resp3,resp4,passFase,mistake}) {
  return (
    <div className="First1">

    <h1>{pergunta}</h1>

    <div id="row1" className='row'>
    <div className="box" onClick={passFase}>{resp1}</div>
    <div className="box" onClick={mistake}>{resp2}</div>
    </div>
    
    <div id="row2" className='row'>
    <div className="box" onClick={mistake}>{resp3}</div>
    <div className="box" onClick={mistake}>{resp4}</div>
    </div>
    </div>
  )
}

export default First1