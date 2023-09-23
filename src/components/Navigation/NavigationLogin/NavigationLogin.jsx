import React from "react"
import { Link } from "react-router-dom"
import './NavigationLogin.css'

function NavigationLogin() {

    return (
        <nav className='navigation'>
            <div className='navigation__login'>
                <Link to='/sign-up' className='navigation__registration-button'>
                    Регистрация
                </Link>
                <Link to='/sign-in' className='navigation__enter-button'>
                    Войти
                </Link>
            </div>
        </nav>
    )

}

export default NavigationLogin