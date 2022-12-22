import React from 'react'
import { Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop/Shop"
import Feverbetter from "./pages/Feverbetter/Feverbetter"
import Bags from "./pages/Bags/Bags"
import Gifts from "./pages/Gifts/Gifts"
import MainPage from './pages/MainPage/MainPage'
import Store from "./pages/Store/Store"
import SignIn from "./pages/SignIn/SignIn"
function PageRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/feverbetter' element={<Feverbetter />} />
            <Route path='/bags' element={<Bags />} />
            <Route path='/gifts' element={<Gifts />} />
            <Route path='/store' element={<Store />} />
            <Route path='/signin' element={<SignIn />} />
        </Routes>
    )
}

export default PageRoutes