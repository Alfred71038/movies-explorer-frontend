import React from "react"
import { Link } from "react-router-dom"
import './NavigationLogin.css'

function NavigationLogin() {

    return (
        <nav className='navigation__container'>
            <div className='navigation__login'>
                <Link to='/signup' className='navigation__registration-button'>
                    Регистрация
                </Link>
                <Link to='/signin' className='navigation__enter-button'>
                    Войти
                </Link>
            </div>
        </nav>
    )

}

export default NavigationLogin