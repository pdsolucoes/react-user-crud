import * as React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Confirmation from "./pages/Confirmation"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"


interface IRouter {
    projectDescription: string;
    imgUrl: string;
    logoUrl: string;
}

const Router:React.FC<IRouter> = ({projectDescription, imgUrl, logoUrl}) => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login logoUrl={logoUrl} imgUrl={imgUrl} projectDescription={projectDescription}></Login>}></Route>
            <Route path='/forgot' element={<ForgotPassword imgUrl={imgUrl}></ForgotPassword>}></Route>
            <Route path='/confirmation' element={<Confirmation imgUrl={imgUrl} ></Confirmation>}></Route>
            <Route path='/reset/:id' element={<ResetPassword imgUrl={imgUrl}></ResetPassword>}></Route>
        </Routes>
    </BrowserRouter>   )
}

export default Router