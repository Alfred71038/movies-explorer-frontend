import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { Moveies } from "../../utils/constants";
import { savedMovies } from "../../utils/constants";

function MoviesCardList(props) {
    const { pathname } = useLocation();

    const moviesCardList = Moveies.map((item) => {
        return (<MoviesCard
            key={item._id}
            card={item}
        />)
    }
    )

    const savedMoviesList = savedMovies.map((item) => {
        return (<MoviesCard
            key={item._id}
            card={item}
        />)
    }
    )

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__list">
                {pathname === '/movies' ? moviesCardList : savedMoviesList}
            </ul>
            {pathname === '/movies' ? <button type="button" className="movies-card-list__more">Ещё</button> : <></>}
        </section>
    )
}

export default MoviesCardList