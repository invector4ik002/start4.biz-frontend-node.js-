import React, {useRef, useEffect} from 'react';
import { connect } from 'react-redux';
import './About.css';
import aboutImage from './../../img/Logo.png';
import QuestionFormContainer from './../../containers/QuestionFormContainer';
import {popupShow} from './../../store/actions/popupActions';
import Popup from './../Popup/Popup.jsx';

const mapPath = "https://yandex.ru/map-widget/v1/?um=constructor%3Aaee2bdb40069c5ddf76f5b5ed28e659f95bffe1c3e82a48f3eedf580587f35a5&amp;source=constructor";
// class About extends React.Component {
//     constructor (props) {
//         super (props);
//         this.contactsRef = React.createRef();
//     }
const About = ({isPopupShow, popupShow}) => {

    let contactsRef = React.createRef();

    // componentDidUpdate (){
    const mounted = useRef();

    useEffect(() => {
    if (!mounted.current) {
        mounted.current = true;
    } else {
        // do componentDidUpate logic
        const addr =  document.baseURI.substring(document.baseURI.lastIndexOf("/") + 1, document.baseURI.length).toLowerCase();
        const contactsArticle = document.querySelector(".contacts-article");
        const aboutDiv = document.querySelector(".about");

        let ypos = 50;
        if(addr === "contacts"){
            //this.contactsRef.focus();
            const contactsTop = contactsArticle.getBoundingClientRect().top;
            const aboutTop = aboutDiv.getBoundingClientRect().top;
            ypos = contactsTop - aboutTop + 50;

        };
        window.scrollTo(0, ypos);
    }
});
    // };

    const buttonHandler = () => {
        popupShow();
    }

    // render () {
        return (
            <div className="container-fluid">
                <section className="about">
                    <article className="about-article">
                        <img className="about-article-image" src={aboutImage} alt="Фото" width="216" height="268" />
                        <div className="about-article-text-block">
                            <h1 className="about-header"><a name="about" className="anchor">О Компании</a></h1>
                            <p className="about-article-text about-article-text-center">
                                Добрый день!
                            </p>
                            <p className="about-article-text">
                                Портал <a className="about-article-url" href="#">start4.biz</a> позволяет познакомиться с разнообразными финансовыми продуктами для бизнеса.
                            </p>
                            <p className="about-article-text">
                                Кроме того, мы помогаем Бизнесу быстро и удобно получить максимальное количество коммерческих предложений от ведущих финансовых организаций страны в несколько шагов. Вам останется только выбрать лучшее и перейти к оформлению.
                            </p>
                            <p className="about-article-text">
                                Мы стремимся развивать портал, повышая его удобство и эффективность, в связи с чем, всегда благодарны за обратную связь о его работе.
                            </p>
                        </div>
                    </article>
                    <div className="page-button about-ask-question-button" onClick={buttonHandler}>
                        <span className="page-button-text about-ask-question-button-text">
                            Задать вопрос
                        </span>
                    </div>
                    {isPopupShow && <Popup form={<QuestionFormContainer />}/>}
                </section>
                <div className="h-line"></div>
                <article className="contacts-article" href={contactsRef}>
                    <iframe className="contacts-map" src={mapPath} width="694" height="478" frameBorder="0" title="contacts-map-about"></iframe>
                    <div className="contacts-text">
                        <h3 className="contacts-text-header"><a name="contacts" className="anchor">Контакты</a></h3>
                        <p className="contacts-text-contact">Вы можете связаться с нами любым удобным Вам способом.</p>
                        <p className="contacts-text-contact">Электронный адрес: <a className="contacts-text-email" href="mailto:info@start4.biz" title="Написать письмо">info@start4.biz</a></p>
                        <p className="contacts-text-contact">Телефон: <a className="contacts-text-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a></p>
                        <p className="contacts-text-address">Санкт-Петербург, пл. Карла Фаберже, д8</p>
                        <a className="contacts-text-map-see" href="#">Посмотреть на карте</a>
                    </div>
                </article>
            </div>
        );
    // }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
// export default About;