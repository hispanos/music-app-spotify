import React from 'react'

const handleClick = () => {
  console.log('Click')
}

const Button = ({text="Enviar", className='', onClick=handleClick}, type='button') => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
        <span className='btn__text'>{text}</span>
    </button>
  )
}

export default Button