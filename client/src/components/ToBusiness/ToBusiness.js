import React from 'react';
import './ToBusiness.css';
import coinsImage from '../../img/coins.png';
import monitorImage from './../../img/icon-mac-black.png';
import shieldImage from './../../img/icon-shield-black.png';
import clockImage from './../../img/icon-clock-black.png';

function ToBusiness() {
    return (
        <div className="container-fluid">
            <section className="to-business">
                <h2 className="to-business-header">Бизнесу</h2>
                <div className="to-business-info">
                    <div className="to-business-texts">
                        <p className="to-business-text">Мы помогаем Бизнесу разобраться в финансовых инструментах и
                            подобрать выгодные предложения на рынке финансовых услуг.</p>
                        <p className="to-business-text">Чтобы сделать работу портала наиболее эффективной, мы предлагаем
                            следующие возможности :</p>
                    </div>
                    <ul className="to-business-list-items">
                        <li className="to-business-list-item">Описание финансовых продуктов, их преимуществ и условий
                            получения
                        </li>
                        <li className="to-business-list-item">Подбор предложений от компаний - партнеров и их
                            оформление
                        </li>
                        <li className="to-business-list-item">Сравнение условий продуктов у различных компаний -
                            партнеров
                        </li>
                        <li className="to-business-list-item">Получение консультации по решению задач бизнеса</li>
                    </ul>
                </div>
            </section>
            <div className="horizontal"> </div>
            <section className="why-we">
                <h3 className="why-we-header">Почему мы ?</h3>
                <div className="why-we-list">
                    <figure className="why-we-list-item">
                        <img src={coinsImage} width="72" height="72" alt="Экономия" className="why-we-list-item-img"/>
                        <figcaption className="why-we-caption">
                            <h4 className="why-we-article-header">Экономия</h4>
                            <p className="why-we-article-text">Вы получите коммерческие предложения от многих компаний,
                                из которых выберете максимально выгодное для Вас</p>
                        </figcaption>
                    </figure>
                    <figure className="why-we-list-item">
                        <img src={monitorImage} width="72" height="66" alt="Удобство" className="why-we-list-item-img"/>
                        <figcaption className="why-we-caption">
                            <h4 className="why-we-article-header">Удобство</h4>
                            <p className="why-we-article-text">Оставив всего одну заявку на продукт, Вы получите
                                предложения от всех компаний-партнеров, зарегистрированных на портале</p>
                        </figcaption>
                    </figure>
                    <figure className="why-we-list-item">
                        <img src={shieldImage} width="72" height="72" alt="Безопасность"
                             className="why-we-list-item-img"/>
                        <figcaption className="why-we-caption">
                            <h4 className="why-we-article-header">Безопасность</h4>
                            <p className="why-we-article-text">На портале зарегистрированы финансовые организации,
                                получившие соответствующие лицензии в ЦБ РФ, а контактные данные они получают только в
                                том случае, если Вы акцептуете предложение</p>
                        </figcaption>
                    </figure>
                    <figure className="why-we-list-item">
                        <img src={clockImage} width="72" height="72" alt="Скорость" className="why-we-list-item-img"/>
                        <figcaption className="why-we-caption">
                            <h4 className="why-we-article-header">Скорость</h4>
                            <p className="why-we-article-text">Все взаимодействие с финансовыми организациями проходит
                                на одном портале, что экономит время и позволяет в короткие сроки решить вопрос
                                получения финансирования</p>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
}

export default ToBusiness;