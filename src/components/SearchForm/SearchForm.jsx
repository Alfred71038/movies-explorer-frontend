import React from "react";
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="seacrh-form">
            <form className="seacrh-form__form">
                <div className="seacrh-form__container">
                    <input
                        className="seacrh-form__input"
                        placeholder="Фильм">
                    </input>
                    <button className="seacrh-form__button" type="submit"></button>
                </div>
            </form>

            <FilterCheckbox />
        </section>
    )
}

export default SearchForm