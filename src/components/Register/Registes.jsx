import React from "react";
import './Register.css';
import AuthForm from "../AuthForm/AuthForm";


function Register() {
    return (
        <section className="register">
            <AuthForm 
                title="Добро пожаловать!"
                label="auth__label"
                buttonText="Зарегистрироваться"
                span="Уже зарегистрированы?"
                link="Войти"
                path="/signin"
            />
        </section>
    )
}

export default Register