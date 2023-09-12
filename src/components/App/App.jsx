import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Registes';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const { pathname } = useLocation();

  const loggedIn = true;
  const loggedOut = false

  return (
    <CurrentUserContext.Provider>
      <div className='root'>
        <div className="page">

          {pathname === "/" ? (
            <Header loggedIn={loggedOut}></Header>
          ) : (
            <></>
          )}
          {pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ? (
            <Header loggedIn={loggedIn}></Header>
          ) : (
            <></>
          )}

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='*'
              element={
                <NotFound />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
