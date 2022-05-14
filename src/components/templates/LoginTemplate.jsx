import React from 'react'
import FooterLogin from '../UI/organisms/FooterLogin'
import MainLogin from '../UI/organisms/MainLogin'

const LoginTemplate = () => {
  return (
    <div className="login">
        <MainLogin />
        <FooterLogin />
    </div>
  )
}

export default LoginTemplate