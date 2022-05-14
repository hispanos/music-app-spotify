import React from 'react'

const Button = ({text="Enviar", className=''}) => {
  return (
    <button className={`btn ${className}`}>
        <span className='btn__text'>{text}</span>
    </button>
  )
}

export default Button