import * as React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Confirmation from "./pages/Confirmation"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"

import { getPersistor } from "@rematch/persist";
import {PersistGate} from "redux-persist/lib/integration/react";
import { Provider } from 'react-redux';
import {store} from "./config/store"
 
const persistor = getPersistor();

interface IRouter {
    projectDescription: string;
    imgUrl: string;
    logoUrl: string;
}

const Router:React.FC<IRouter> = ({projectDescription, imgUrl, logoUrl}) => {

    return (
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login logoUrl={logoUrl} imgUrl={imgUrl} projectDescription={projectDescription}></Login>}></Route>
                    <Route path='/forgot' element={<ForgotPassword imgUrl={imgUrl}></ForgotPassword>}></Route>
                    <Route path='/confirmation' element={<Confirmation imgUrl={imgUrl} ></Confirmation>}></Route>
                    <Route path='/reset/:id' element={<ResetPassword imgUrl={imgUrl}></ResetPassword>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </PersistGate>
   )
}

export default Router