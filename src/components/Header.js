import React from 'react'
import './Header.css'
import tesla from '../assets/teslaLogoSmall.svg';

function Header() {
    return (
        <div className="Header">
            <div className="Header__left">
                <img src={tesla} alt="tesla logo"/>
            </div>
            <div className="Header__centre">
                <p>model s</p>
                <p>model 3</p>
                <p>model x</p>
                <p>model y</p>
                <p>solar roof</p>
                <p>solar panels</p>
                
            </div>
            <div className="Header__right">
                <p>shop</p>
                <p>tesla account</p>
            </div>
        </div>
    )
}

export default Header
