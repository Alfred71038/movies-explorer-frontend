import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import { useFormWithValidation } from "../../hooks/useValidationForms";
import { EMAIL_PATTERN } from "../../utils/constants";

function Login(props) {

    const { values, handleChange, errors, isValid} = useFormWithValidation();

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLoginSubmit(values)
    }

    return (
        <main className="login">
            <section className="form">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="form__logo" />
                </Link>
                <h1 className="form__title">Рады видеть!</h1>
                <form className="form__form" onSubmit={handleSubmit}>
                    <label className="form__label" htmlFor="email">
                        Email
                        <input
                            type="text"
                            className="form__input"
                            name="email"
                            id="email"
                            minLength={6}
                            maxLength={30}
                            required
                            onChange={handleChange}
                            value={email || ""}
                            placeholder="Email"
                            pattern={EMAIL_PATTERN}
                        />
                        <span className="form__error">{errors.email || ""}</span>
                    </label>
                    <label className="form__label" htmlFor="password">
                        Пароль
                        <input
                            type="text"
                            className="form__input"
                            name="password"
                            id="password"
                            minLength={6}
                            maxLength={30}
                            required
                            onChange={handleChange}
                            value={password || ""}
                            placeholder="Пароль"
                        />
                        <span className="form__error">{errors.password || ""}</span>
                    </label>
                    <p className="form__span-error-submit">{props.err}</p>
                    <button type='submit' disabled= {!isValid} className={!isValid ? "form__button-login-disabled" : "form__button-login"}>Войти</button>
                    <p className="form__span">Ещё не зарегистрированы?
                        <Link to="/sign-up" className="form__link">
                            &nbsp;Регистрация
                        </Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default Login