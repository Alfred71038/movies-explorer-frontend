import React from "react";
import './AuthForm.css';

import logo from '../../images/logo.svg';

import { Link } from "react-router-dom";

function AuthForm(props) {
    return (
        <section className="auth">
            <Link to="/">
                <img src={logo} alt="Логотип" className="auth__logo" />
            </Link>
            <h1 className="auth__title">{props.title}</h1>
            <form className="auth__form">
                <label className={props.label} for="name">
                    Имя
                    <input
                        type="text"
                        className="auth__input"
                        name="name"
                        id="name"
                        minLength={2}
                        maxLength={30}
                        required
                        onChange={props.handleEmail}
                        value={props.valueEmail}
                    />
                </label>
                <label className="auth__label" for="email">
                    Email
                    <input
                        type="text"
                        className="auth__input"
                        name="email"
                        id="email"
                        minLength={2}
                        maxLength={30}
                        required
                        onChange={props.handleEmail}
                        value={props.valueEmail}
                    />
                </label>
                <label className="auth__label" for="password">
                    Пароль
                    <input
                        type="text"
                        className="auth__input"
                        name="password"
                        id="password"
                        minLength={2}
                        maxLength={30}
                        required
                        onChange={props.handlePassword}
                        value={props.valuePassword}
                    />
                </label>

                <button className={props.button}>{props.buttonText}</button>
                <p className="auth__span">{props.span}
                    <Link to={props.path} className="auth__link">
                    &nbsp;{props.link}
                    </Link>
                </p>
            </form>
        </section>
    )
}


export default AuthForm