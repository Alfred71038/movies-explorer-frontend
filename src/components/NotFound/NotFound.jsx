import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <main>
            <section className='not-found'>
                <h2 className='not-found__title'>404</h2>
                <p className='not-found__subtitle'>Страница не найдена</p>
                <a href="/#" className="not-found__link">Назад</a>
            </section>
        </main>
    )
}

export default NotFound