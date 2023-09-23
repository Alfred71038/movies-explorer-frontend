import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import logo from '../../images/logo.svg'
import NavigationLogin from '../Navigation/NavigationLogin/NavigationLogin';
import NavigationAuthorized from '../Navigation/NavigationAuthorized/NavigationAuthorized';


function Header(props) {


    const { pathname } = useLocation();

    return (
        pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile'
            ?
            <header className='header'>
                <Link to="/">
                    <img src={logo} alt="Логотип" className="header__logo" />
                </Link>
                <NavigationAuthorized />
            </header>
            :
            pathname === '/'
                ?
                <header className='header'>
                    <Link to="/">
                        <img src={logo} alt="Логотип" className="header__logo" />
                    </Link>
                    <NavigationLogin />
                </header>
                :
                <></>
    )
}


export default Header 