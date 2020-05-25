import React, { useState } from 'react';

import './index.css';
// import './QuestionForm.css';

export const QuestionForm = ({ buttonHandlerHiden }) => {

   const [form, setForm] = useState({// локальное состояние формы
      name_org: '',
      INN: '',
      type_org: '',
      services: '',
      name: '',
      surname: '',
      contacts: '',
      email: '',
   });
   /**
 * Прослушка событий по имени input получение значения с input
 * @param event событие заполнения input
 */  
   const changeHandler = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
   };

   return (
      <div className="question-wraper">
         <form className="question"> 
            <button 
               className="question__btn"
               onClick={buttonHandlerHiden}
            >
            </button>
            <span className="question__heading question__heading--style-text">Регистрация</span>

            <label for="name_org" className="question__label question__label--style-text">Наиминование организации</label>
            <div className="question__wraper-input--before">
                  <input 
                     className="question__input"  
                     id="name_org" 
                     type="text" 
                     name="name_org" 
                     placeholder="ООО “Лесстройсервис”"
                     value={form.text}
                     onChange={changeHandler}
                  />
               </div>

            <label for="INN" className="question__label question__label--style-text">ИНН</label>
            <div className="question__wraper-input--before">
                  <input 
                     className="question__input"  
                     id="INN" 
                     type="password" 
                     name="INN" 
                     placeholder="*************"
                     value={form.password}
                     onChange={changeHandler}
                  />
               </div>

            <label for="type_org" className="question__label question__label--style-text">Тип организации</label>
            <select 
                  className="question__select"  
                  id="type_org" 
                  type="text" 
                  name="type_org"
                  value={form.text}
                  onChange={changeHandler}
               >
                  <option>Выбрать</option>
                  <option>Лизинговая компания</option>
                  <option>Банк</option>
               </select>

            <label for="services" className="question__label question__label--style-text">Предоставляемые услуги</label>
            <select 
                  className="question__select" 
                  id="services" 
                  type="text" 
                  name="services"
                  value={form.text}
                  onChange={changeHandler}
               >
                  <option>Выбрать</option>
                  <option>Лизинг транспорта</option>
                  <option>Лизинг оборудования</option>
                  <option>Кредитования</option>
                  <option>Банковские гарантии</option>
                  <option>Расчетно-кассовое обслуживание</option>
                  <option>Факторинг</option>
                  <option>Эквайринг</option>
                  <option>Другое</option>
               </select>

            <label for="name" className="question__label question__label--style-text">Имя</label>
            <div className="question__wraper-input--before">
                  <input 
                     className="question__input"  
                     id="name" 
                     type="text" 
                     name="name" 
                     placeholder="Введите имя"
                     value={form.text}
                     onChange={changeHandler}
                  />
               </div>

            <label for="surname" className="question__label question__label--style-text">Фамилия</label>
            <div className="question__wraper-input--before">
                  <input 
                     className="question__input"  
                     id="surname" 
                     type="text" name="surname" 
                     placeholder="Введите фамилию"
                     value={form.text}
                     onChange={changeHandler}
                  />
               </div>

            <label for="contacts" className="question__label question__label--style-text">Контакты</label>
            <div className="question__wraper-input--before">
                  <input 
                     className="question__input"  
                     id="contacts" 
                     type="tel" 
                     name="contacts" 
                     placeholder="+7-912-999-9999"
                     value={form.tel}
                     onChange={changeHandler}
                  />
               </div>

            <label for="email" className="question__label question__label--style-text">Эл.почта</label>
            <div className="question__wraper-input--before">
                  <input 
                     className="question__input"  
                     id="email" 
                     type="email" 
                     name="email" 
                     placeholder="alexandrivanov@mail.ru"
                     value={form.email}
                     onChange={changeHandler}
                  />
               </div>

            <button 
               className="question__btn-send"
               // onClick={submitHandler}
            >
               Отправить данные
            </button>
         </form>
      </div>
   )
}