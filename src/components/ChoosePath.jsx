import React from 'react'
import './ChoosePath.css'
function ChoosePath({pathEndereco,pathPipe,pathHierarquia}) {
  return (
   <div className='ChoosePath'>
    <div className='card'> 
    <button onClick={pathEndereco}> Quiz 1</button>
    <button onClick={pathPipe}>Quiz 2</button>
    <button onClick={pathHierarquia}>Quiz 3</button>
    </div>
   </div>
  )
}

export default ChoosePath