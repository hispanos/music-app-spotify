import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'

const ButtonsFooter = () => {

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('sign-in')
    }

    return (
        <>
            <Button text='Ingresar' className={'btn--success btn--rounded login__footer__btn'} onClick={handleSignIn} />
            <Link to={'sign-up'} className='link link--light'>Crear una cuenta</Link>
        </>
    )
}

export default ButtonsFooter