import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import logo from '../../images/logo.svg'
import NavigationLogin from '../Navigation/NavigationLogin/NavigationLogin';
import NavigationAuthorized from '../Navigation/NavigationAuthorized/NavigationAuthorized';


function Header(props) {
    return (

        <header className='header'>
            <Link to="/">
                <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            {props.loggedIn ? <NavigationAuthorized /> : <NavigationLogin/>}
        </header>
    )
}


export default Header 