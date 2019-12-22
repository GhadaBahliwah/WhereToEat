import React from 'react';
import LogoImage from '../img/logo.png'
import  '../css/style.css'
export const Logo = () => {
    return (
        <div className="logo-section">
            <img src={LogoImage} alt="logo" id="logo"/>
        </div>

    )
}