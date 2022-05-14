import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Favorites from '../components/pages/Favorites';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login'
import PrincipalTemplate from '../components/templates/PrincipalTemplate';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<PrincipalTemplate />}>
                    <Route index element={<Home />} />
                    <Route path='favorites' element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router