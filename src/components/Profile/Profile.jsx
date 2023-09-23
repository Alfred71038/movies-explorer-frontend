import React, { useContext, useState } from "react";

import './Profile.css'

import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useValidationForms";

function Profile(props) {

    const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();

    const { name, email, password } = values;

    const currentUser = useContext(CurrentUserContext);

    /*const [name, setName] = useState("");
    const [email, setEmail] = useState("");*/

    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        })
    }, [setValues, currentUser]);

    /*function handleChangeName(e) {
        setName(e.target.value)
    };

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    };*/

    function handleUpdateUser(e) {
        e.preventDefault();
        props.handleUpdateUser({
            name: name,
            email: email
        })
    }


    return (
        <main className="profile">
            <h1 className="profile__title">Привет, {name}!</h1>
            <form className="profile__form">
                <label className="profile__label" htmlFor="name">
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
                        value={name || ""}
                        onChange={handleChange}
                    />
                </label>
                <span className="profile__span">{errors.name || "" }</span>
                <label className="profile__label" htmlFor="email">
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
                        value={email || ""}
                        onChange={handleChange}
                    />
                </label>
                <span className="profile__span">{errors.email || "" }</span>
                <button type="submit" className="profile__button" onClick={handleUpdateUser}>
                    Редактировать
                </button>
            </form>
            <Link to="/sign-in" className="profile__link" onClick={props.signOut}>
                Выйти из аккаунта
            </Link>
        </main >
    )
}

export default Profile