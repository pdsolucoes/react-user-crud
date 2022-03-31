import * as React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Confirmation from "./pages/Confirmation"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"

const Router:React.FC = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login ></Login>}></Route>
            <Route path='/forgot' element={<ForgotPassword ></ForgotPassword>}></Route>
            <Route path='/confirmation' element={<Confirmation ></Confirmation>}></Route>
            <Route path='/reset/:id' element={<ResetPassword></ResetPassword>}></Route>
        </Routes>
    </BrowserRouter>   )
}

export default Router