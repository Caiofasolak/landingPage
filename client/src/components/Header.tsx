import React from 'react';
import Logo from '../assets/reactLogo.png'
import Celular from '../assets/header.png'
import './Header.css'

const Header: React.FC = () => {
    return (
        <header className="landingPageWrapper">
            <img src={Logo} className="logo" alt="Logo" />
            <h1 className="titulo">LANDING PAGE</h1>
            <h2 className="subTitulo1">Modelo de landing page.</h2>
            <h2 className="subTitulo2">Landing Page criada com Nodejs, Reactjs e Mysql.</h2>
            <img src={Celular} className="celular" alt="Celular" />
        </header>
    )
}

export default Header;