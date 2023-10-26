import React from 'react'
import './First1.css'
function First1(props) {
  return (
    <div className="First1">

    <h1>{props.pergunta}</h1>

    <div id="row1" className='row'>
    <div className="box">{props.resp1}</div>
    <div className="box">{props.resp2}</div>
    </div>
    
    <div id="row2" className='row'>
    <div className="box">{props.resp3}</div>
    <div className="box">{props.resp4}</div>
    </div>
    </div>
  )
}

export default First1