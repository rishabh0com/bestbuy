import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../pages/main-pages/LandingPage';
import SignIn from '../pages/main-pages/SignIn';
import CreateAcc from '../pages/main-pages/CreateAcc';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signIn" element={<SignIn/>} />
            <Route path="/createAccount" element={<CreateAcc/>} />
        </Routes>
    </div>
  )
}

export default AllRoute;
