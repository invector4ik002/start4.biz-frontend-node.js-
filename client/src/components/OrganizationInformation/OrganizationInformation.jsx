import React from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import "./OrganizationInformation.css";

const OrganizationInformationNR = () => {
    return (
        <div className="organization-information">
            <div className="organization-information__title">Информация об организации</div>
            <div className="organization-information-container">
                <div className="organization-information-container__close"></div>
                <form className="organization-information-form">

                    <div className="organization-information-form__block-container">

                        <div className="organization-information-form__block">
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_name" className="organization-information-form__input-label">Наименование организации</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_name" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="inn" className="organization-information-form__input-label">ИНН</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="inn" className="organization-information-form__input" component='input' type='text' />
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_inn" className="organization-information-form__input-label">ИНН организации (ИНН ИП)</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_inn" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                        </div>

                        <div className="organization-information-form__block">
                            <div className="organization-information-form__input-group">
                                <label htmlFor="ogrn" className="organization-information-form__input-label">ОГРН (ОГРНИП)</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="ogrn" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="okvde" className="organization-information-form__input-label">ОКВЭД</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="okved" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="desctiption_activity" className="organization-information-form__input-label">Описание деятельности компании</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="desctiption_activity" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="organization-information__decor-line"></div>
                    <h3 className="organization-information__dop-title">Дополнительная информация</h3>

                    <div className="organization-information-form__block-container">

                        <div className="organization-information-form__block">
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_tel" className="organization-information-form__input-label">Телефон организации</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_tel" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_email" className="organization-information-form__input-label">Эл.почта организации</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_email" className="organization-information-form__input" component='input' type='text' />
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_site" className="organization-information-form__input-label">Сайт ораганизации</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_site" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                        </div>

                        <div className="organization-information-form__block">
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_balans" className="organization-information-form__input-label">Баланс</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_balans" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                            <div className="organization-information-form__input-group">
                                <label htmlFor="organization_revenue" className="organization-information-form__input-label">Информация о выручке компании</label>
                                <div className="organization-information-form__input-wrapper">
                                    <Field name="organization_revenue" className="organization-information-form__input" component='input' type='text'/>
                                </div>
                            </div>
                        </div>

                    </div>

                </form>
                <div className="organization-information-form__buttons">
                        <div className="organization-information-form__button organization-information-form__button--save">Сохранить</div>
                        <div className="organization-information-form__button organization-information-form__button--cancel">Отменить</div>
                </div>

            </div>
        </div>
    )
}

const onSubmit = (values) => {
	console.log("form data", values);
};

const OrganizationInformation = reduxForm({
	form: 'organizationInformation',
	onSubmit,
})(OrganizationInformationNR)

export default OrganizationInformation;