import React from "react";
import './Login.css';
import AuthForm from "../AuthForm/AuthForm";


function Login() {
    return (
        <section className="login">
            <AuthForm 
                title="Рады видеть!"
                label="auth__label_none"
                buttonText="Войти"
                span="Ещё не зарегистрированы?"
                link="Регистрация"
                path="/signup"
            />
        </section>
    )
}

export default Login