import React from "react"
import './NavigationAuthorized.css'
import { Link } from "react-router-dom"


function NavigationAuthorized () {
    return(
            <ul className="navigation-auth__list">
                <li className="navigation-auth__item">
                    <Link to="/movies" className="navigation-auth__link_movies">Фильмы</Link>
                </li>
                <li className="navigation-auth__item">
                    <Link to="/saved-movies" className="navigation-auth__link_saved-movies">Сохранённые фильмы</Link>
                </li>
                <li className="navigation-auth__item">
                    <Link to="/profile" className="navigation-auth__link_profile">Аккаунт</Link>
                </li>
            </ul>
    )
}

export default NavigationAuthorized