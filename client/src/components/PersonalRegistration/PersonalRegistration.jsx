import React, { useState } from 'react';
import './PersonalRegistration.css';

export const PersonalRegistration = ({popupShow, clickHandlerLogin}) => {

   const [form, setForm] = useState({
      email: '',
      password: ''
	}); 
	
   const changeHandler = (event) => {
		setForm({ 
			...form, 
			[event.target.name]: event.target.value}
		)};
   console.log('',form);

   const clickHandler = () => {
      console.log(popupShow)
      popupShow();
      // console.log(props)
   }

   return (
      <>
         <span className="personal-account__title--exit">Вход</span>
         <form className="personal-account__registration"> 

            <div className="work-step__content personal-account__wrap--label">
               <label for="email" className="personal-account__registration--label">Электронная почта</label>
               <div className="personal-account__wrap--before"></div>
                  <input 
                     className="personal-account__registration-input" 
		   		      type="email" 
		   		      name="email"
		   		      placeholder="alexandrivanov@mail.ru"
		   		      onChange={changeHandler}
                  />                            
               </div>
   
            <div className="work-step__content personal-account__wrap--label">
               <label for="password" className="personal-account__registration--label ">Пароль</label>
               <div className="personal-account__wrap--before personal-account__wrap-password--before"></div>
                  <input 
                     className="personal-account__registration-input" 
		   	         type="password" 
		   	         name="password"
		   	         placeholder="*************"
		   	         onChange={changeHandler}
                  />
            </div>
   
            <button 
               className='personal-account__registration-content-button personal-account__registration-form-button'
               onClick={clickHandlerLogin}
               type="submit" 
            >ВОЙТИ
            </button>
            <a className="personal-account__registration--link" href="#">Восстановить пароль</a>
   
         </form>
         <div className="personal-account__registration-content">
            <span className="personal-account__registration-content-title">Регистрация</span>
            <p className="personal-account__registration-content-text">У Вас еще нет личного кабинета? Оставьте заявку на подбор продукта для бизнеса, и мы вышлем Вам данные для входа.</p>
            <button 
               className='personal-account__registration-content-button'
               onClick={clickHandler}
            >ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
         </div>
      </>
   )
}