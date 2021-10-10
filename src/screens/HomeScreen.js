import React from 'react'
import hero from '../assets/hero.png'

export const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <div className="homeScreen__hero_container">
                <p>Ministerio de Gobierno <br /> Gobernación de Manabí</p>

                <p>Ficha Técnica del Computador</p>
            </div>
            <div className="homeScreen__img_container">
                <img src={hero} alt="gobernacion de manabi" />
            </div>
        </div>
    )
}
