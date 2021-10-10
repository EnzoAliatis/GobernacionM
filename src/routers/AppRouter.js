import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { HomeScreen } from '../screens/HomeScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <div className="app_layout">
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="bodyContainer">
                    <Switch>
                        <Route
                            path="/auth"
                            component={AuthRouter}
                        />

                        <Route
                            exact
                            path="/"
                            component={HomeScreen}
                        />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
