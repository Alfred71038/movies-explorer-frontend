import React from "react";
import './Movies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies(props) {

    return (
        <main className="movies">
            <SearchForm
                onClick={props.onClick}
                handleValue={props.handleValue}
                isChecked={props.isChecked}
                onChange={props.onChange}
                searchString={props.searchString}
            />
            <MoviesCardList
                movies={props.movies}
                isLoading={props.isLoading}
                ClickButtonSavedMovies={props.ClickButtonSavedMovies}
                text={props.text}
                savedMovies={props.savedMovies}
                ClickButtonDelete={props.ClickButtonDelete}
            >
                {" "}
            </MoviesCardList>
        </main>
    )
}

export default Movies