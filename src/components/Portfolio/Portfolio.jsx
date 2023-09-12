import React from "react";
import './Portfolio.css'

function Portfolio () {
    return(
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a href="https://github.com/Alfred71038/how-to-learn" className="portfolio__link">
                        Статичный сайт
                        <span className="portfolio__span">↗</span>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/Alfred71038/russian-travel" className="portfolio__link">
                        Адаптивный сайт
                        <span className="portfolio__span">↗</span>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/Alfred71038/react-mesto-auth" className="portfolio__link">
                        Одностраничное приложение
                        <span className="portfolio__span">↗</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio