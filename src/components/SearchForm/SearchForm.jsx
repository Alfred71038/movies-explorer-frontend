import React from "react";
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

    const [movie, setMovie] = React.useState("");
    const [err, setErr] = React.useState("");

    function onClick(evt) {
        evt.preventDefault();
        if (movie === "") {
            setErr("Введите название фильма")
            return;
        }
        props.onClick();
    }

    function handleError(e) {
        setErr(e.target.validationMessage)
        setMovie(e.target.value);
        props.handleValue(e);
    }

    return (
        <div className="seacrh-form">
            <form className="seacrh-form__form" onSubmit={onClick}>
                <div className="seacrh-form__container">
                    <div className="search-form__container-span">
                        <input
                            value={props.searchString}
                            className="seacrh-form__input"
                            placeholder="Фильм"
                            onChange={handleError}
                            name="movies"
                            id="movies"
                            minLength={1}
                        >
                        </input>
                        <span className="search-form__span">{err || ""}</span>
                    </div>
                    <button className="seacrh-form__button" type="submit"></button>
                </div>
                <FilterCheckbox
                    isChecked={props.isChecked}
                    onChange={props.onChange}
                />
            </form>
        </div>
    )
}

export default SearchForm