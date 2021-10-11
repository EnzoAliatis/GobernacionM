import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'

import logo from '../assets/logo.png';
import { removeCredentials, selectAuth, setIsChecking } from '../store/slices/authSlice';
import { selectProfile } from '../store/slices/profileSlice';


export const Navbar = () => {
    const { isAuthenticated } = useSelector(selectAuth);
    const { nomb_usuar } = useSelector(selectProfile);
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('gbToken');
        dispatch(removeCredentials());
        dispatch(setIsChecking());
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/">
                    <div className="navbar__img_container">
                        <img src={logo} alt="gobernacion de manabi" />
                    </div>
                </Link>
                <ul className="navbar__link_list">
                    <li>
                        <NavLink
                            to="/fichaTecnica"
                            activeClassName="selected"
                        >
                            FICHA TECNICA
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/conectividad"
                            activeClassName="selected"
                        >
                            CONECTIVIDAD
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/circuitoCerrado"
                            activeClassName="selected"
                        >
                            CIURCUITO CERRADO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/usuarios"
                            activeClassName="selected"
                        >
                            USUARIOS
                        </NavLink>
                    </li>
                </ul>

                <div className='navbar__loginContainer'>
                    {
                        isAuthenticated ? (
                            <p onClick={logout}>{nomb_usuar}</p>
                        ) : (
                            <NavLink
                                to="/auth/login"
                                activeClassName="selected"
                            >
                                LOGIN
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
