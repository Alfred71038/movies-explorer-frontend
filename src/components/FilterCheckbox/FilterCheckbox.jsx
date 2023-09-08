import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <section className="filter-checkbox">
            <label className="filter-checkbox__label round">
                <input className="filter-checkbox__input "type="checkbox" />
                <div className="filter-checkbox__slider">
                    <div className="filter-checkbox__slider_round"></div>
                </div>
            </label>
            <p className="filter-checkbox_text">Короткометражки</p>
        </section>

    )
}

export default FilterCheckbox