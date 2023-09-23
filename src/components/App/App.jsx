import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as auth from "../../utils/Auth";
import { api } from "../../utils/MainApi.jsx";
import { moviesApi } from '../../utils/MoviesApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Registes';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { FiltredMovies } from '../../hooks/useFilterMovies';

function App() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoadind] = React.useState(false);
  const [succses, setSuccses] = React.useState(false);

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [err, setError] = React.useState("");
  const [userEmail, setUserEmail] = useState("");


  const [searchText, setSearchText] = React.useState({
    text: "Введите ключевые слова для поиска",
  });

  const [query, setQuery] = React.useState({
    string: "",
    isChecked: false,
  });

  const [querySavedMovies, setQuerySavedMovies] = React.useState({
    string: "",
    isChecked: false,
  });

  /************************* Юз Эффекты ************************************************/

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getProfileInformation(), api.getInitialMovies()])
        .then((data) => {
          setCurrentUser(data[0]);
          setSavedMovies(data[1]);
        })
        .catch((err) => console.log(err));
    }

  }, [loggedIn]);

  React.useEffect(() => {
    handleCheckToken();
  }, []);

  React.useEffect(() => {
    handleSubmitSearchMovies();
  }, [query.isChecked]);

  React.useEffect(() => {
    handleSubmitSearchSavedMovies();
  }, [querySavedMovies.isChecked]);

  React.useEffect(() => {
    const searchString = localStorage.getItem("searchString");
    const isChecked = localStorage.getItem("isChecked");
    //console.log(isChecked);

    const localStorageArray = JSON.parse(
      localStorage.getItem("movieFromRequest")
    );

    if (searchString) {
      setQuery((q) => ({ ...q, string: searchString }));
    }

    if (isChecked === true) {
      setQuery((q) => ({ ...q, isChecked: isChecked }));
    }

    if (localStorageArray) {
      setMovies(localStorageArray);
    }
  }, []);

  /************************* Проверка токена ************************************************/

  function handleCheckToken() {
    const token = localStorage.getItem('cookie');
    if (token) {
      auth
        .checkToken(token)
        .then((user) => {
          handleLogin(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  /************************* Авторизация ************************************************/

  function handleLogin() {
    setLoggedIn(true)
  }

  const handleLoginSubmit = ({ email, password }) => {
    auth.authorize({ email, password })
      .then((res) => {
        if (password && email !== '') {
          const { token } = res;
          localStorage.setItem('cookie', true);
          setUserEmail(email);
          setError("")
          handleLogin();
          navigate('/profile', { replace: true });
        }
      })
      .catch((err) => {
        if (err === '401') {
          setError("Неверный логин или пароль");
        }
      });
  }

  /************************* Регистарция ************************************************/

  const handleRegisterSubmit = ({ name, email, password }) => {
    const data = { name, email, password };
    auth.register(data)
      .then(() => {
        setSuccses(true);
        navigate('/movies', { replace: true })
        setError("");
      })
      .catch((err) => {
        setSuccses(false);
        setError(err);
      })
  }

  /************************* Изменение пользователя ************************************************/

  function handleUpdateUser(data) {
    console.log(data)
    api
      .editProfile(data)
      .then((data) => {
        setCurrentUser(data);
      })

      .catch((err) => console.log(err));
  }

  /************************* Фильмы ************************************************/

  function handleSubmitSearchMovies() {
    if (query.string === "") {
      return;
    }
    setLoggedIn(true)
    moviesApi
      .getMovies()
      .then((data) => {
        const filtredMovies = FiltredMovies(data, query);

        if (filtredMovies < 1) {
          setSearchText({ text: "Ничего не найдено" });
        }
        setMovies(filtredMovies);
        localStorage.setItem("searchString", query.string);
        localStorage.setItem("isChecked", query.isChecked);
        localStorage.setItem("movieFromRequest", JSON.stringify(filtredMovies));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoadind(false);
      });
  }

  function ClickButtonSavedMovies(movie) {
    console.log(savedMovies);
    savedMovies.map((item) => {
      console.log(item.nameRU.toLowerCase());
      console.log(movie.nameRU.toLowerCase());
      item.nameRU.toLowerCase().includes(movie.nameRU.toLowerCase())
        ? api.addFilm(movie).then((data) => {
          setSavedMovies(data);
        })
        : api.deleteCard(movie._id).then((data) => {
          console.log("фидьм удален");
        });
    });

  }

  function handleDeleteMovie(movie) {
    api.deleteCard(movie._id).then((data) => {
      console.log("удалено");
      console.log(data);
      const newCards = savedMovies.filter((c) => c._id !== movie._id);
      setSavedMovies(newCards);
    });

  }

  function isValidCheckbox(evt) {
    if (query.string === "") {
      return;
    }
    const isChecked = evt.target.checked;
    setQuery((q) => ({ ...q, isChecked: isChecked }));
    console.log(savedMovies);
  }

  function handleValue(evt) {
    const string = evt.target.value;
    setQuery((q) => ({ ...q, string: string }));
    localStorage.setItem("searchStrind", query.string);
    console.log(localStorage.getItem("searchStrind"))
  }

  //функция поиска по сохраненым фильмам - сабмит формы
  function handleSubmitSearchSavedMovies() {
    const filtredMovies = FiltredMovies(savedMovies, querySavedMovies);

    if (filtredMovies < 1) {
      setSearchText({ text: "Ничего не найдено" });
    }

    setSavedMovies(filtredMovies);
  }

  // функция записывает состояние чекбокса на странице сохраненных фильмов в стейт
  function isValidCheckboxSavedFilms(evt) {
    if (querySavedMovies.string === "") {
      return;
    }
    const isChecked = evt.target.checked;
    setQuerySavedMovies((q) => ({ ...q, isChecked: isChecked }));
  }

  // собираем данные с формы поиска сохраненных фильмов фильмов
  function handleValueSavedFilms(evt) {
    const string = evt.target.value;
    setQuerySavedMovies((q) => ({ ...q, string: string }));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /************************* Выход  ************************************************/

  const signOut = () => {
    auth.userSignOut()
      .then((res) => {
        if (res.exit) {
          console.log('Back');
          localStorage.removeItem('cookie');
          setLoggedIn(false);
          setUserEmail('');
          navigate('/sign-in', { replace: true });
          document.cookie = "jwtChek=; expires=Mon, 26 Dec 1991 00:00:01 GMT;";
        }
      })
      .catch((error) => console.log(error))
  };

  function deleteError() {
    setError("")
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <div className="page">
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <Main />
              }
            />

            <Route
              path="/sign-in"
              element={
                <Login handleLoginSubmit={handleLoginSubmit} err={err} />
              }
            />

            <Route
              path="/sign-up"
              element={
                <Register
                  handleRegisterSubmit={handleRegisterSubmit}
                  err={err}
                  deleteError={deleteError}
                />
              }
            />

            <Route
              path="/profile"
              element={(
                <>
                  <ProtectedRoute
                    element={Profile}
                    loggedIn={loggedIn}
                    signOut={signOut}
                    handleUpdateUser={handleUpdateUser}
                  />
                </>
              )
              }
            />

            <Route
              path='/movies'
              element={(
                <>
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    onClick={handleSubmitSearchMovies}
                    movies={movies}
                    handleValue={handleValue}
                    isChecked={query.isChecked}
                    onChange={isValidCheckbox}
                    searchString={query.string}
                    isLoading={isLoading}
                    ClickButtonSavedMovies={ClickButtonSavedMovies}
                    text={searchText.text}
                    savedMovies={savedMovies}
                    ClickButtonDelete={handleDeleteMovie}
                  />
                </>
              )
              }
            />

            <Route
              path='/saved-movies'
              element={(
                <>
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    movies={movies}
                    isLoading={isLoading}
                    ClickButtonDelete={handleDeleteMovie}
                      savedFilms={savedMovies}
                      onClick={handleSubmitSearchSavedMovies}
                      handleValue={handleValueSavedFilms}
                      isChecked={querySavedMovies.isChecked}
                      onChange={isValidCheckboxSavedFilms}
                  />
                </>
              )
              }
            />

            <Route
              path='*'
              element={
                <NotFound
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
