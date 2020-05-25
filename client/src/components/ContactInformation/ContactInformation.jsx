import React from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import "./ContactInformation.css";

const ContactInformationNR = () => {
    return (
        <div className="contact-information">
            <div className="contact-information__title">Контактная информация</div>
            <div className="contact-information-container">
                <div className="contact-information-container__close"></div>
                <form className="contact-information-form">
                    <div className="contact-information-form__inputs-group">
                        <div className="contact-information-form__input-group">
                            <label htmlFor="name" className="contact-information-form__input-label">Ваше имя</label>
                            <div className="contact-information-form__input-wrapper">
                                <Field name="name" className="contact-information-form__input" component='input' type='text' placeholder="Иванов Иван"/>
                            </div>
                        </div>
                        <div className="contact-information-form__input-group">
                            <label htmlFor="position" className="contact-information-form__input-label">Должность(в организации)</label>
                            <div className="contact-information-form__input-wrapper">
                                <Field name="position" className="contact-information-form__input" component='input' type='text' placeholder="Генеральный директор"/>
                            </div>
                        </div>
                        <div className="contact-information-form__input-group">
                            <label htmlFor="contacts" className="contact-information-form__input-label">Контакты</label>
                            <div className="contact-information-form__input-wrapper">
                                <Field name="contacts" className="contact-information-form__input" component='input' type='text' placeholder="8-912-999-99-99"/>
                            </div>
                        </div>
                        <div className="contact-information-form__input-group">
                            <label htmlFor="email" className="contact-information-form__input-label">Эл. почта</label>
                            <div className="contact-information-form__input-wrapper">
                                <Field name="email" className="contact-information-form__input" component='input' type='text' placeholder="alexanderivanov@mail.ru"/>
                            </div>
                        </div>
                    </div>
                    <div className="contact-information-form__description">
                        <p>Мы не передаем Ваши контактные данные третьим лицам.</p>
                        <p>После акцепта предложения, Вам предоставляется выбор удобного способа связи с менеджером той компании, чье предложение Вы приняли.</p>
                        <p>Кроме того Вы можете в любой момент написать менеджеру лизинговой компании в чат и задать любой вопрос.</p>
                    </div>
                </form>
                <div className="contact-information-form__buttons">
                        <div className="contact-information-form__button contact-information-form__button--save">Сохранить</div>
                        <div className="contact-information-form__button contact-information-form__button--cancel">Отменить</div>
                </div>
            </div>
        </div>
    )
}

const onSubmit = (values) => {
	console.log("form data", values);
};

const ContactInformation = reduxForm({
	form: 'contactInformation',
	onSubmit,
})(ContactInformationNR)

export default ContactInformation;