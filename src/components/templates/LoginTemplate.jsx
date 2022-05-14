import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterLogin from '../UI/organisms/FooterLogin'
import MainLogin from '../UI/organisms/MainLogin'

const LoginTemplate = () => {
  return (
    <div className="login">
        <MainLogin />
        <Outlet />
    </div>
  )
}

export default LoginTemplate