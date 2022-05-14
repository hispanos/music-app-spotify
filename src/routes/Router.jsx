import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Favorites from '../components/pages/Favorites';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SignUp';
import LoginTemplate from '../components/templates/LoginTemplate';
import PrincipalTemplate from '../components/templates/PrincipalTemplate';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginTemplate />}>
                    <Route index element={<Login />} />
                    <Route path='sign-in' element={<SignIn />} />
                    <Route path='sign-up' element={<SignUp />} />
                </Route>
                <Route path="/" element={<PrincipalTemplate />}>
                    <Route index element={<Home />} />
                    <Route path='favorites' element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router