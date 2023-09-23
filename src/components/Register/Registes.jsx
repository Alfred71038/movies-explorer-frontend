import React from "react";
import './Register.css';
import '../AuthForm/AuthForm.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useValidationForms";

function Register(props) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const { name, email, password } = values;

    React.useEffect(() => {
        props.deleteError();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleRegisterSubmit(values)
    }


    return (
        <main className="register">
            <section className="form">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="form__logo" />
                </Link>
                <h1 className="form__title">Добро пожаловать!</h1>
                <form className="form__form" onSubmit={handleSubmit}>
                    <label className="form__label" htmlFor="name">
                        Имя
                        <input
                            type="text"
                            className="form__input"
                            name="name"
                            id="name"
                            minLength={2}
                            maxLength={30}
                            required
                            onChange={handleChange}
                            value={name || ""}
                            placeholder="Имя"
                        />
                        <span className="form__error">{errors.name || ""}</span>
                    </label>
                    <label className="form__label" htmlFor="email">
                        Email
                        <input
                            type="text"
                            className="form__input"
                            name="email"
                            id="email"
                            minLength={2}
                            maxLength={30}
                            required
                            onChange={handleChange}
                            value={email || ""}
                            placeholder="Email"
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
                    <button type='submit' disabled={!isValid} className={!isValid ? "form__button-disabled" : "form__button"}>Зарегистрироваться</button>
                    <p className="form__span">Уже зарегистрированы?
                        <Link to="/sign-in" className="form__link">
                            &nbsp;Войти
                        </Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default Register