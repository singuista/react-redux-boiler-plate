import React from 'react'
import './header.scss'



function Header(props) {
    return(
        <header className={`header ${props.className}`}>{props.children}</header>
    )
}

export default Header