import React, { useEffect } from "react"
import './NavigationAuthorized.css'
import { Link } from "react-router-dom"


function NavigationAuthorized(props) {

    const [windowOuterWidth, setWindowOuterWidth] = React.useState(window.innerWidth);
    const burgerBtn = document.querySelector(".navigation-auth__burger-btn");
    const burgerMenu = document.querySelector(".navigation-auth__menu-burger");

    useEffect(() => {
        function handleSize() {
            setWindowOuterWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    })

    if (windowOuterWidth < 1200) {

        function clickBurger() {
            burgerBtn.addEventListener("click", function () {
                burgerMenu.classList.toggle("navigation-auth__menu_active");
                burgerBtn.classList.toggle("active");
                burgerMenu.classList.toggle("navigation-auth__opacity-menu");
            });
        }

        return (
            <section className="navigation-auth__burger">
                <button
                    className="navigation-auth__burger-btn"
                    type="button"
                    onClick={clickBurger}
                ></button>
                <div className="navigation-auth__menu-burger">
                    <nav className="navigation-auth__nav">
                        <ul className="navigation-auth__ul-burger">
                            <li className="navigation-auth__li-burger">
                                <Link to="/" className="navigation-auth__link-burger">
                                    Главная
                                </Link>
                            </li>
                            <li className="navigation-auth__li-burger">
                                <Link to="/movies" className="navigation-auth__link-burger">
                                    Фильмы
                                </Link>
                            </li>
                            <li className="navigation-auth__li-burger">
                                <Link
                                    to="/saved-movies"
                                    className="navigation-auth__link-burger"
                                >
                                    Сохраненные фильмы
                                </Link>
                            </li>
                            <li className="navigation-auth__li-burger">
                                <Link
                                    to="/profile"
                                    className="navigation-auth__link-profile  navigation-auth__link-burger-small"
                                >
                                    Аккаунт
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }


    return (
        <section className="navigation-auth ">
            <div className="navigation-auth__menu">
                <nav className="navigation-auth__container">
                    <ul className="navigation-auth__list">
                        <li className="navigation-auth__item">
                            <Link
                                to="/"
                                className="navigation-auth__link-home">
                                Главная
                            </Link>
                        </li>
                        <li className="navigation-auth__item">
                            <Link
                                to="/movies"
                                className="navigation-auth__link-movies">
                                Фильмы
                            </Link>
                        </li>
                        <li className="navigation-auth__item">
                            <Link
                                to="/saved-movies"
                                className="navigation-auth__link-saved-movies">
                                Сохранённые фильмы
                            </Link>
                        </li>
                        <li className="navigation-auth__item">
                            <Link
                                to="/profile"
                                className="navigation-auth__link-profile">
                                Аккаунт
                            </Link>
                        </li>
                    </ul>

                </nav>
            </div>

        </section >
    )
}

export default NavigationAuthorized