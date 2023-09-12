import React from "react";
import './AboutMe.css';
import Portfolio from "../Portfolio/Portfolio";

import I from '../../images/Alfred71038.jpg'

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <h2 className="about-me__title">Студент</h2>
            <ul className="about-me__list">
                <li className="about-me__item">
                    <h3 className="about-me__name">Alfred71038</h3>
                    <p className="about-me__about">Фронтенд-разработчик, 22 года</p>
                    <p className="about-me__information">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                    <a href="https://github.com/Alfred71038"
                        className="about-me__link"
                        target="_blank"
                        rel="noreferrer">
                        Github
                    </a>
                </li>
                <li className="about-me__item">
                    <img src={I} alt="Моя фотография для портфолио" className="about-me__image" />
                </li>
            </ul>
            <Portfolio />
        </section>
    )
}

export default AboutMe