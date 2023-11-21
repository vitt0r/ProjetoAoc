import React from 'react'
import './First1.css'
function First1({pergunta,resp1,resp2,resp3,resp4,passFase,error1,error2,error3}) {
  return (
    <div className="First1">

    <h1>{pergunta}</h1>

    <div id="row1" className='row'>
    <div className="box" onClick={passFase}>{resp1}</div>
    <div className="box" onClick={error1}>{resp2}</div>
    </div>
    
    <div id="row2" className='row'>
    <div className="box" onClick={error2}>{resp3}</div>
    <div className="box" onClick={error3}>{resp4}</div>
    </div>
    </div>
  )
}

export default First1