import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../screens/LoginScreen'

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={LoginScreen}
                />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
