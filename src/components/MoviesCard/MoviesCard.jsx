import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
    function ClickButton(event) {
        const target = event.target;
        target.classList.toggle("movies-card__button_active");
    }
    return (
        <section>
            <li className="movies-card">
                <img
                    className="movies-card__image"
                    alt="Карточка"
                    src={props.card.image}>
                </img>
                <div className="movies-card__container">
                    <h2 className="movies-card__title">{props.card.name}</h2>
                    <p className="movies-card__time">{props.card.time}</p>
                </div>
                <button
                className='movies-card__save-button'
                type="button"
                onClick={ClickButton}>
                Сохранить
            </button>
            </li>
        </section>
    )
}

export default MoviesCard