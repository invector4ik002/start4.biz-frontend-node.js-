import React from "react";
import "./Login.css";

export default function Login({changeLogin, isLogin}) {
  return (
    <div className="login">
      <span className="login__router"><span className="login__routerLink">Главная страница</span><span className="login__routerLink">Личный кабинет</span><span className="login__routerLink">Вход</span></span>
      <h2 className="login__head">Вход</h2>
      <div className="login__conteiner">
        <div className="login__close" onClick={() => changeLogin()}></div>
        <div className="login__main">
          <div className="login__enter">
            <div className="login__item login__itemFirst">
              <label className="login__label" name="name">Эл. почта</label>
              <label className="login__label" name="password">Пароль</label>
            </div>    
            <div className="login__item">
              <input type="text" className="login__input"/>
              <input type="password" className="login__input"/>
            </div> 
            <div className="login__item login__itemLast">
              <div className="login__btn login__enterBtn" onClick={() => isLogin()}>Войти</div>
              <span className="login__recoverPass">Восстановить пароль</span>
            </div>
          </div>
        </div>
      </div>
      <div className="login__reg">
        <h3 className="login__regHead">Регистрация</h3>
        <p className="login__regText">
          У Вас еще нет личного кабинета? Оставьте заявку на подбор продукта для бизнеса, и мы вышлем Вам данные для входа
        </p>
        <div className="login__btn login__regBtn">Получить предложение</div>
      </div>
    </div>
  )
}