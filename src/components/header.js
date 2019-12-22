import React from 'react'
import '../css/header.css'
import LogoImg from '../img/logo-header.png'

export const Header = () =>{
    return(
        <nav className="navbar-default">
            <a className="navbar-brand pull-right" href="/">
                <img  src={LogoImg} className="logo-header"/>
            </a>
        </nav>
        )
}