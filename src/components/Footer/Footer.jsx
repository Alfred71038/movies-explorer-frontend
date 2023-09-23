import React from "react";
import { useLocation } from 'react-router-dom'
import './Footer.css';

function Footer() {
    const { pathname } = useLocation();
    return (
        pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' 
            ?
            <footer className="footer">
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__container">
                    <p className="footer__copyright">&copy; 2023</p>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="https://practicum.yandex.ru/"
                                className="footer__link"
                                target="_blank"
                                rel="noreferrer">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://github.com/"
                                className="footer__link"
                                target="_blank"
                                rel="noreferrer">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            : <></>
    )
}

export default Footer