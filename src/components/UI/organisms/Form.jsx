import React from 'react'
import Button from '../atoms/Button'
import FormGroup from '../molecules/FormGroup'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import es from 'yup-es'

yup.setLocale( es )

const schema = yup.object({
    Email: yup.string().email().required(),
    Contraseña: yup.string().required(),
}).required();

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup 
            label='Email' 
            placeholder='Escriba su Email' 
            type='email'
            required={true}
            register={register}
            errors={errors}
        />
        <FormGroup 
            label='Contraseña' 
            placeholder='Escriba su Contraseña' 
            type='password'
            required={true}
            register={register}
            errors={errors}
        />
        <Button type='submit' text='Iniciar Sesión' className='btn--success btn--rounded btn--big' />
    </form>
  )
}

export default Form