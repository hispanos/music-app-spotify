import React from 'react'
import { Controller } from "react-hook-form";


const InputForm = ({type="text", placeholder="Escriba aquí", className='', label='name', required=false, register}) => {
  return (
    <input 
        type={type} 
        placeholder={placeholder} 
        className={`form__input ${className}`}
        {...register(label, { required: required ? true : false })}
    />
  )
}

export default InputForm