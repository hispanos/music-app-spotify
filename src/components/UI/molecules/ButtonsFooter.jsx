import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'

const ButtonsFooter = () => {
    return (
        <>
            <Button text='Ingresar' className={'btn--success btn--rounded login__footer__btn'} />
            <Link to={'sign-up'} className='link link--light'>Crear una cuenta</Link>
        </>
    )
}

export default ButtonsFooter