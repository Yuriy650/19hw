import React from 'react';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import ResetPassword from "./Components/ResetPassword/ResetPassword";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path='/19hw' component={SignIn}/>
                <Route exact path='/' component={SignIn}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/resetpassword' component={ResetPassword}/>
            </div>

        </BrowserRouter>
    );
}

export default App;
