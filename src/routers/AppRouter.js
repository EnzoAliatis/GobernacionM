import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { CircuitoScreen } from '../screens/CircuitoScreen';
import { ConectividadScreen } from '../screens/ConectividadScreen';
import { FichaTecnicaScreen } from '../screens/FichaTecnicaScreen';
import { HomeScreen } from '../screens/HomeScreen'
import { UsuariosScreen } from '../screens/UsuariosScreen';
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const isLoggedIn = true;

    return (
        <Router>
            <div className="app_layout">
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="bodyContainer">
                    <Switch>
                        <PublicRoute isAuthenticated={isLoggedIn} path='/auth' component={AuthRouter} />

                        <PrivateRoute isAuthenticated={isLoggedIn} exact path='/fichaTecnica' component={FichaTecnicaScreen} />
                        <PrivateRoute isAuthenticated={isLoggedIn} exact path='/conectividad' component={ConectividadScreen} />
                        <PrivateRoute isAuthenticated={isLoggedIn} exact path='/circuitoCerrado' component={CircuitoScreen} />
                        <PrivateRoute isAuthenticated={isLoggedIn} exact path='/usuarios' component={UsuariosScreen} />


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
