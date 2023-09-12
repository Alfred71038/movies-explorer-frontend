import React from "react";
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div className="seacrh-form">
            <form className="seacrh-form__form">
                <div className="seacrh-form__container">
                    <input
                        className="seacrh-form__input"
                        placeholder="Фильм"
                        required>
                    </input>
                    <button className="seacrh-form__button" type="submit"></button>
                </div>
                <FilterCheckbox />
            </form>
        </div>
    )
}

export default SearchForm