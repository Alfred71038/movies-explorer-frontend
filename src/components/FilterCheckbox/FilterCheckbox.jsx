import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__label round">
                <input className="filter-checkbox__input " type="checkbox" placeholder="Поиск"/>
                <span className="filter-checkbox__slider">
                    <span className="filter-checkbox__slider-round"></span>
                </span>
            </label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox