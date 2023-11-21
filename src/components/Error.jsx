import React from 'react'

function Error({text, reboot}) {
  return (
    <div className='Error'>
    <div>{text}</div>
    <button onClick={reboot}>voltar</button>
    </div>
  )
}

export default Error