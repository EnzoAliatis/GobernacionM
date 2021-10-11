import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../store/slices/authSlice';
import { startupThunk } from '../store/thunks/startupThunk';


export const AppRouter = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, isChecking } = useSelector(selectAuth);


    useEffect(() => {
        if (isChecking) {
            dispatch(startupThunk());
        }
    }, [dispatch, isChecking]);

    return (
        <Router>
            <div className="app_layout">
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="bodyContainer">
                    {
                        isChecking ? (
                            <h1>Cargando...</h1>
                        ) : (
                            <Switch>
                                <PublicRoute isAuthenticated={isAuthenticated} path='/auth' component={AuthRouter} />

                                <PrivateRoute isAuthenticated={isAuthenticated} exact path='/fichaTecnica' component={FichaTecnicaScreen} />
                                <PrivateRoute isAuthenticated={isAuthenticated} exact path='/conectividad' component={ConectividadScreen} />
                                <PrivateRoute isAuthenticated={isAuthenticated} exact path='/circuitoCerrado' component={CircuitoScreen} />
                                <PrivateRoute isAuthenticated={isAuthenticated} exact path='/usuarios' component={UsuariosScreen} />


                                <Route
                                    exact
                                    path="/"
                                    component={HomeScreen}
                                />

                                <Redirect to="/" />
                            </Switch>
                        )
                    }
                </div>
            </div>
        </Router>
    )
}
