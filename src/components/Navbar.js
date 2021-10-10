import React from 'react'
import { Link } from 'react-router-dom'

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
                        <Link to="/">FICHA TECNICA</Link>
                    </li>
                    <li>
                        <Link to="/">CONECTIVIDAD</Link>
                    </li>
                    <li>
                        <Link to="/">CIURCUITO CERRADO</Link>
                    </li>
                    <li>
                        <Link to="/">USUARIOS</Link>
                    </li>
                </ul>

                <div className='navbar__loginContainer'>
                    <Link to="/">LOGIN</Link>
                </div>
            </div>
        </nav>
    )
}
