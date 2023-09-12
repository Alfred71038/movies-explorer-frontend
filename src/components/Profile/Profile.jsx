import React from "react";

import './Profile.css'

import { Link } from "react-router-dom";

function Profile() {
    return (
        <main className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
                <label className="profile__label" for="name">
                    Имя
                    <input
                        type="text"
                        className="profile__input"
                        name="name"
                        id="name"
                        minLength={2}
                        maxLength={30}
                        required
                        placeholder="Имя"
                    />
                </label>

                <label className="profile__label" for="email">
                    E-mail
                    <input
                        type="email"
                        className="profile__input"
                        name="email"
                        id="email"
                        minLength={2}
                        maxLength={30}
                        required
                        placeholder="E-mail"
                    />
                </label>

                <button type="submit" className="profile__button">
                    Редактировать
                </button>
            </form>
            <Link to="/" className="profile__link">
                Выйти из аккаунта
            </Link>
        </main >
    )
}

export default Profile