import React from "react";
import './Login.css';
import AuthForm from "../AuthForm/AuthForm";


function Login() {
    return (
        <main className="login">
            <AuthForm 
                title="Рады видеть!"
                label="auth__label-none"
                buttonText="Войти"
                span="Ещё не зарегистрированы?"
                link="Регистрация"
                path="/signup"
                button="auth__button-login"
            />
        </main>
    )
}

export default Login