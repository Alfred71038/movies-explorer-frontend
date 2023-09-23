import React from "react";
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    return (
        <main className="movies">
            <SearchForm
                onClick={props.onClick}
                handleValue={props.handleValue}
                isChecked={props.isChecked}
                onChange={props.onChange}
            />
            <MoviesCardList
                movies={props.movies}
                isLoading={props.isLoading}
                ClickButtonSavedMovies={props.ClickButtonSavedMovies}
                ClickButtonDelete={props.ClickButtonDelete}
                savedMovies={props.savedMovies}
            />
        </main>
    )
}

export default SavedMovies