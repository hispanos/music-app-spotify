import React from 'react'
import InputForm from '../atoms/InputForm'

const FormGroup = ({label='Nombre', placeholder='Escriba su nombre', type='text', required=false, register, errors}) => {
  return (
    <div className="form__group">
      <label className='form__label'>
        {label}
        <InputForm placeholder={placeholder} type={type} required={required} register={register} className={errors[label] && 'form__input--error'} label={label} />
        {errors[label] && <span className='form__error'>{errors[label]?.message}</span>}
      </label>
    </div>
  )
}

export default FormGroup