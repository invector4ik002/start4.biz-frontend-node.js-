import React from 'react';
import {connect} from 'react-redux';
import './ToFinorg.css';
import coinsImage from './../../img/coins.png';
import monitorImage from './../../img/icon-mac-black.png';
import commentImage from './../../img/comment.png';
import clockImage from './../../img/icon-clock-black.png';
import finorgImage from './../../img/finorg-image.png';
import QuestionFormContainer from './../../containers/QuestionFormContainer';
import {popupShow, popupHide} from './../../store/actions/popupActions';
import Popup from './../Popup/Popup.jsx';

const ToFinorg = ({isPopupShow, popupShow, popupHide}) => {

    const buttonHandlerHiden = () => {
        popupHide();
    }

    const buttonHandler = () => {
        popupShow();
    }

    return (
        <div className="container-fluid">
            <section className="finorg-info-block">
                <div className="finorg-img">
                    <img className="finorg-image" src={finorgImage} alt="Фото" width="216" height="268" />
                </div>
                <div className="finorg-text">
                    <h2 className="to-finorg-header">Финансовым организациям</h2>
                    <div className="finorg-decription">
                        <div className="finorg-left-block">
                            <p className="to-business-text">Портал start4.biz позволяет быстро и удобно получить выгодные предложения по ряду продуктов от ведущих лизинговых и финансовых компаний.</p>
                            <p className="to-business-text">Мы будем рады видеть Вас в качестве компании-партнера, если Вы имеете лицензию ЦБ на предоставление финансовых услуг юридическим лицам и предоставляете следующие услуги :</p>
                        </div>
                        <div className="finorg-right-block">
                            <ul className="to-business-list">
                                <li className="to-business-item">Кредитование Юридических лиц и Индивидуальных предпринимателей</li>
                                <li className="to-business-item">Предоставление банковских гарантий для работы с 44-ФЗ и 223-ФЗ</li>
                                <li className="to-business-item">Лизинг транспорта или оборудования</li>
                                <li className="to-business-item">Предоставление овердрафтов для покрытия кассовых разрывов</li>
                                <li className="to-business-item">Эквайринг</li>
                                <li className="to-business-item">Иные финансовые услуги</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="home-button page-button be-partner-button-fin" onClick={buttonHandler}>
                    <span className="page-button-text be-partner-button-text">
                        Стать партнёром
                    </span>
                </div>
            </section>
            <div className="horizontal"> </div>
            <section className="to-finorg-why-we">
                <h2 className="to-finorg-header why-we-header">Почему мы ?</h2>
                <div className="finorg-decription why-we-description">
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={coinsImage} width="110" height="110" alt="Стабильные заявки" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Стабильные заявки</h4>
                                <p className="why-we-article-text">Предоставляем стабильный поток заявок на финансовые продукты</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={monitorImage} width="110" height="110" alt="Взаимодействие" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Взаимодействие</h4>
                                <p className="why-we-article-text">В едином интерфейсе Вы сможете взаимодействовать с заявками</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={commentImage} width="110" height="110" alt="Коммуникация" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Коммуникация</h4>
                                <p className="why-we-article-text">Вы получаете новый канал общения с бизнесом</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="why-we-item">
                        <figure className="why-we-article">
                            <img src={clockImage} width="110" height="110" alt="Скорость" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Скорость</h4>
                                <p className="why-we-article-text">Быстро реагируем на ваши запросы</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="home-button page-button be-partner-button-fin" onClick={buttonHandler}>
                    <span className="page-button-text be-partner-button-text">
                        Стать партнёром
                    </span>
                </div>
                {isPopupShow && <Popup form={<QuestionFormContainer buttonHandlerHiden={buttonHandlerHiden} />}/>}
        </section>
        </div>
    );
}

const mapStateToProps = state => {
	return {
        isPopupShow: state.popup.isShow,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
       popupShow: () => {
        dispatch(popupShow());
      },
      popupHide: () => {
        dispatch(popupHide())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToFinorg);