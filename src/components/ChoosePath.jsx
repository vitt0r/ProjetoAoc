import React from 'react'
import './ChoosePath.css'
function ChoosePath({pathEndereco,pathP,pathH}) {
  return (
   <div className='ChoosePath'>
    <div className='card'> 
    <button onClick={pathEndereco}>Endereçamento</button>
    <button onClick={pathP}>Pipeline</button>
    <button onClick={pathH}>Hierarquia de memória</button>
    </div>
   </div>
  )
}

export default ChoosePath