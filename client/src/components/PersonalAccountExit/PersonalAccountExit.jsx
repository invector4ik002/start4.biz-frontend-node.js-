import React from 'react';
import './PersonalAccountExit.css';
import { Redirect } from 'react-router-dom';

export const PersonalAccountExit = ({redirect, classNames, clickHendlerYes, clickHendlerNo}) => {
   if(redirect) {
      return <Redirect to='/'/>
   }
   return (
      <div className={`question-wraper ${classNames}`}>
         <div className="accout_exit accout_exit--thema-white accout_exit--flex">
            <span className="accout_exit__content accout_exit__content--text accout_exit__content--flex">Вы действительно хотите выйти?</span>
            <button 
               className="accout_exit__btn accout_exit__btn--thema-blue accout_exit__btn--text"
               onClick={clickHendlerYes}
            >Да
            </button>
            <button 
               className="accout_exit__btn accout_exit__btn--thema-white accout_exit__btn--text"
               onClick={clickHendlerNo}
            >Нет
            </button>
         </div>
      </div>  
   )
}
