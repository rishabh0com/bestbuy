import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import CreateAcc from '../pages/CreateAcc';
import AllProductPage from '../pages/AllProductPage';
import CartPage from '../pages/CartPage';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signIn" element={<SignIn/>} />
            <Route path="/createAccount" element={<CreateAcc/>} />
            <Route path="/products" element={<AllProductPage/>} />
            <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </div>
  )
}

export default AllRoute;
