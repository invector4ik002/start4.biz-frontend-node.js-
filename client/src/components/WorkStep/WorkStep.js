import React from 'react';

import './WorkStep.css';
/**
 * Элемент шагов работы компании 
 * @param popupShow 
 * @returns возвращает верстку элемента
 */
export const WorkStep = ({ popupShow }) => {
   /**
 * Функция кнопки вызывает окно
 */
   const showFormHandler = () => {
      popupShow();
   };

   return (
      <div className="container-fluid">
         <section className="work-step">
           
           <div className="work-step__content ">  
              <div className="work-step__img work-step__img-applications"></div> 
              <span className="work-step__span--l">Подача заявки</span>
              <p className="work-step__text">Расскажите нам, какой транспорт Вам нужен и&nbsp;что для Вас самое важное при выборе партнера</p>
           </div>
     
           <div className="work-step__content">  
              <div className="work-step__img work-step__img-sentence"></div>      
              <span className="work-step__span--l">Сбор предложений</span>
              <p className="work-step__text">Мы&nbsp;сами взаимодействуем с&nbsp;менеджерами лизинговых компаний и&nbsp;собираем Коммерческие предложения для Вас</p>
           </div>
           <div className="work-step__content">
              <div className="work-step__img work-step__img-terms" ></div>
              <span className="work-step__span--l">Выбор условий</span>
              <p className="work-step__text">Вы&nbsp;получаете Коммерческие предложения от&nbsp;ведущих лизинговых компаний и&nbsp;выбираете подходящие Вам условия</p>
           </div>
           
           <div className="work-step__content work-step__content-left">
              <div className="work-step__img work-step__img-documents"></div>
              <span className="work-step__span--l">Сбор пакета документов</span>
              <p className="work-step__text">Мы&nbsp;помогаем Вам сформировать пакет документов и&nbsp;передать в&nbsp;Лизинговую компанию для дальнейшего оформления сделки</p>
           </div>
   
           <div className="work-step__content work-step__content-right">
              <div className="work-step__img work-step__img-deal"></div>
              <span className="work-step__span--l">Завершение сделки</span>
              <p className="work-step__text">Вы&nbsp;подписываете договор лизинга и&nbsp;становитесь обладателем транспортного средства</p>
           </div>
   
            <button 
               className="home-button /*work-step__button*/"
               onClick={showFormHandler}
            >
              оставить заявку
           </button>
         </section>
      </div>
   )
}

