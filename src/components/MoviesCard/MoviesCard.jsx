import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

    let { pathname } = useLocation();

    function handleDuration(time) {
        if (time === 60) {
            return "1ч";
        }
        if (time < 60) {
            return (time + "м")
        }
        if (time > 60) {
            return `${Math.floor(time / 60)}ч ${time % 60}м`;
        }

    }

    function ClickButtonSaved() {
        props.ClickButtonSavedMovies(props.card);
    }

    function ClickButtonDelete() {
        props.ClickButtonDelete(props.card);
    }

    return (
        <li className="movies-card">
            <a href={props.card.trailerLink}
                target="_blank"
                rel="noreferrer">
                <img
                    className="movies-card__image"
                    alt={props.card.name}
                    src={`${pathname === "/saved-movies"
                        ? props.card.image
                        : (`https://api.nomoreparties.co/${props.card.image.url}`)
                        } `}>
                </img>
            </a>
            <div className="movies-card__container">
                <h2 className="movies-card__title">{props.card.nameRU}</h2>
                <p className="movies-card__time">{handleDuration(props.card.duration)}</p>
            </div>
            {pathname === "/movies" && props.isSaved === false &&
                <button
                    className='movies-card__save-button'
                    type="button"
                    onClick={ClickButtonSaved}
                >
                    Сохранить
                </button>}
            {pathname === "/saved-movies" &&
                <button
                    className="movies-card__button-saved-movies"
                    type="button"
                    onClick={ClickButtonDelete}
                >
                </button>}
            {props.isSaved && pathname === "/movies" &&
                <button
                    className="movies-card__button-active"
                    type="button"
                    onClick={ClickButtonDelete}
                >
                </button>}
        </li>
    )
}

export default MoviesCard