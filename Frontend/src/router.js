//Main imports
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
//Own Imports
import { Register } from './components/Registration/register'
import { Login } from './components/Login/login'
import { ResetPassword } from './components/resetPassword'
import { EmailSent } from './components/emailSent'
import { NewPassword } from './components/newPassword'
import { SavePassword } from './components/savePassword' 
import { Verification } from './components/Login/verification'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/reset" component={ResetPassword}/>
                    <Route exact path="/emailsent" component={EmailSent}/>
                    <Route exact path="/newpassword" component={NewPassword}/>
                    <Route exact path="/savepassword" component={SavePassword}/>
                    <Route exact path="/verify" component={Verification}/>
                    <Route path="/" component={Register}/>
                </Switch>
            </div>
      </Router>
    )
}
