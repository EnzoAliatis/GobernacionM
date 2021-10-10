import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.png';


export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__img_container">
                    <img src={logo} alt="gobernacion de manabi" />
                </div>
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
                    <NavLink
                        to="/auth/login"
                        activeClassName="selected"
                    >
                        LOGIN
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
