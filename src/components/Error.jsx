import React from 'react'

function Error({text, reboot}) {
  //text explica o erro
  //reboot volta para o início e adiciona 1 na contagem
  return (
    <div className='Error'>
    <div>{text}</div>
    <button onClick={reboot}>voltar</button> 
    </div>
  )
}

export default Error