import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"
import { UseWindowCalculator } from "../../hooks/useWindowCalculator";


function MoviesCardList(props) {
    const { pathname } = useLocation();

    const { countMovies, addMoreMovies } = UseWindowCalculator();

    /*function isSaved(movie) {
        return props.savedMovies.some((f) => f.movieId === movie.id);
    }*/

    return (
        <section className="movies-card-list">
            {props.isLoading ? (
                <Preloader />
            ) : props.movies.length === 0 ? (
                <h3 className="movies-card-list__nothing">{props.text}</h3>
            ) : (
                <>
                    <ul className="movies-card-list__list"
                    >
                        {props.movies.slice(0, countMovies).map((item) => (
                            <MoviesCard
                                key={`${pathname === "/saved-movies" ? item._id : item.id}`}
                                card={item}
                                hendler={props.hendler}
                                ClickButtonDelete={props.ClickButtonDelete}
                               /* isSaved={isSaved(item)}*/
                            />
                        ))}
                    </ul>

                    {
                        props.movies.length > countMovies ? (
                            <button
                                type="button"
                                className="movies-card-list__more"
                                onClick={addMoreMovies}>
                                Ещё
                            </button>) : (<></>)
                    }
                </>
            )
            }

        </section >
    )
}

export default MoviesCardList