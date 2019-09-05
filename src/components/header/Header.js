import React from 'react'
import './header.scss'
import logo from '../../img/logo.png'



function Header(props) {
    return(
        <header className={`header ${props.className}`}>
            {/* {props.children} */}
            <img alt="logo" className="header__logo" src={logo} />
        </header>
    )
}

export default Header