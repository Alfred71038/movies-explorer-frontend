import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return(
        <section className="about" id="about">
            <h2 className="about__title">О проекте</h2>
            <ul className="about__list">
                <li className="about__item">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about__item">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about__table">
                <div className='about__backend'>
                    <p className='about__backend-one-week'>1 неделя</p>
                    <p className='about__table-paragraph'>Back-end</p>
                </div>
                <div className='about__frontend'>
                    <p className='about__frontend-four-weeks'>4 неделя</p>
                    <p className='about__table-paragraph'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject