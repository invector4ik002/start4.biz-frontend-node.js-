import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="container-fluid">
        <footer className="main-footer">
        <div className="footer-left">
            <ul className="footer-left-list">
                <li className="footer-left-list-item"><Link to="/about" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">О&nbsp;проекте</span>
                </Link></li>
                <li className="footer-left-list-item"><Link to="/tofinorg" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Финансовым&nbsp;организациям</span>
                </Link></li>
                <li className="footer-left-list-item"><Link to="/tobusiness" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Бизнесу</span>
                </Link></li>
                <li className="footer-left-list-item"><Link to="/contacts" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Контакты</span>
                </Link></li>
            </ul>
            <ul className="footer-left-list">
                <li className="footer-left-list-item"><Link to="/policy" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Политика&nbsp;конфиденциальности</span>
                </Link></li>
                <li className="footer-left-list-item"><Link to="/uc" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Пользовательское&nbsp;соглашение</span>
                </Link></li>
                <li className="footer-left-list-item"><Link to="/uc" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Согласие&nbsp;на&nbsp;обработку&nbsp;персональных&nbsp;данных</span>
                </Link></li>
                <li className="footer-left-list-item"><Link to="/uc" className="footer-left-list-link">
                    <span className="footer-left-list-link-text">Форма&nbsp;обратной&nbsp;связи</span>
                </Link></li>
            </ul>
        </div>
        <div className="footer-right">
            <ul className="footer-social-links-block">
                <Link to="/uc" className="footer-social-link" title="Мы во вконтакте">
                    <svg className="footer-social-link-image"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40">
                        <path d="M20 0C8.95468 0 0 8.95427 0 20C0 31.0457 8.95468 40 20 40C31.0453 40 40 31.0457 40 20C40 8.95427 31.0453 0 20 0ZM30.1451 22.1631C31.0772 23.0736 32.0634 23.9304 32.9003 24.935C33.271 25.3794 33.6205 25.839 33.8864 26.3558C34.2662 27.0928 33.9233 27.901 33.2636 27.9448L29.1662 27.9439C28.108 28.0315 27.2659 27.6047 26.5559 26.8812C25.9892 26.3047 25.4633 25.6888 24.9174 25.0926C24.6944 24.8479 24.4595 24.6175 24.1796 24.4362C23.6211 24.0728 23.1358 24.1841 22.8158 24.7677C22.4896 25.3614 22.4151 26.0194 22.384 26.6803C22.3394 27.6464 22.0481 27.8989 21.0787 27.9443C19.0073 28.0413 17.0418 27.7271 15.2151 26.6828C13.6037 25.7616 12.3564 24.4616 11.2696 22.9897C9.15315 20.1203 7.53228 16.971 6.07591 13.7314C5.74813 13.0017 5.98793 12.6114 6.79284 12.5962C8.13013 12.5704 9.46742 12.5737 10.8047 12.595C11.349 12.6036 11.7091 12.915 11.9182 13.4285C12.6408 15.2065 13.5268 16.8982 14.6369 18.4671C14.9328 18.8849 15.2348 19.3015 15.6649 19.5965C16.1395 19.9223 16.5013 19.8146 16.7251 19.2847C16.8683 18.9479 16.9301 18.5878 16.9612 18.2269C17.0676 16.9907 17.0803 15.7549 16.8962 14.5236C16.7816 13.753 16.3482 13.2554 15.5802 13.1098C15.189 13.0357 15.2462 12.8908 15.4365 12.6674C15.7668 12.2811 16.0761 12.0421 16.6944 12.0421L21.3238 12.0413C22.0534 12.1846 22.2171 12.5119 22.3161 13.2469L22.3202 18.3914C22.3116 18.6758 22.463 19.5188 22.9737 19.705C23.3829 19.84 23.653 19.5118 23.8977 19.2528C25.0079 18.0747 25.7989 16.6842 26.5072 15.245C26.8198 14.6103 27.0895 13.9536 27.3514 13.2956C27.5462 12.809 27.849 12.5696 28.3982 12.5778L32.8561 12.5831C32.9874 12.5831 33.1208 12.5843 33.2509 12.6069C34.0023 12.7353 34.2081 13.0586 33.9757 13.7915C33.6098 14.943 32.899 15.9022 32.2042 16.8638C31.4594 17.8934 30.6652 18.887 29.9278 19.921C29.2501 20.8663 29.3037 21.3422 30.1451 22.1631Z" />
                    </svg>
                </Link>
                <Link to="/uc" className="footer-social-link" title="Наш канал на youtube">
                    <svg className="footer-social-link-image"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40">
                        <path d="M17.5088 23.7469L24.0145 20L17.5088 16.2531V23.7469Z" />
                        <path d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM32.4969 20.0204C32.4969 20.0204 32.4969 24.0765 31.9824 26.0324C31.694 27.103 30.8499 27.9471 29.7794 28.2352C27.8235 28.75 20 28.75 20 28.75C20 28.75 12.197 28.75 10.2206 28.2147C9.15009 27.9266 8.30597 27.0822 8.01758 26.0117C7.50275 24.0765 7.50275 20 7.50275 20C7.50275 20 7.50275 15.9442 8.01758 13.9883C8.30566 12.9178 9.17053 12.0529 10.2206 11.7648C12.1765 11.25 20 11.25 20 11.25C20 11.25 27.8235 11.25 29.7794 11.7853C30.8499 12.0734 31.694 12.9178 31.9824 13.9883C32.5177 15.9442 32.4969 20.0204 32.4969 20.0204Z" />
                    </svg>
                </Link>
                <Link to="/uc" className="footer-social-link" title="Мы в facebook">
                    <svg className="footer-social-link-image"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40">
                        <path d="M20 0C8.95427 0 0 8.95427 0 20C0 31.0457 8.95427 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95427 31.0457 0 20 0ZM27.6301 10.1852L24.8638 10.1864C22.6946 10.1864 22.2752 11.2172 22.2752 12.7296V16.0647H27.448L27.4455 21.2882H22.2756V34.693H16.8802V21.2882H12.3699V16.0647H16.8802V12.2124C16.8802 7.74179 19.6117 5.30701 23.5994 5.30701L27.6305 5.31315V10.1852H27.6301Z" />
                    </svg>
                </Link>
                <Link to="/uc" className="footer-social-link" title="Наш инстаграмм">
                    <svg className="footer-social-link-image"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40">
                        <path d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM14.1882 30.2344H9.31732V15.5801H14.1882V30.2344ZM11.7529 13.5791H11.7212C10.0867 13.5791 9.02954 12.4539 9.02954 11.0477C9.02954 9.60968 10.119 8.51562 11.7853 8.51562C13.4515 8.51562 14.4769 9.60968 14.5087 11.0477C14.5087 12.4539 13.4515 13.5791 11.7529 13.5791ZM31.7517 30.2344H26.8814V22.3947C26.8814 20.4245 26.1761 19.0808 24.4138 19.0808C23.0682 19.0808 22.2668 19.9872 21.9147 20.8621C21.7859 21.1752 21.7545 21.6129 21.7545 22.0508V30.2344H16.8839C16.8839 30.2344 16.9476 16.955 16.8839 15.5801H21.7545V17.655C22.4017 16.6565 23.5599 15.2362 26.1441 15.2362C29.3488 15.2362 31.7517 17.3306 31.7517 21.8317V30.2344Z" />
                    </svg>
                </Link>
            </ul>
            <ul className="footer-contacts">
                <a className="footer-email" href="mailto:info@start4.biz" title="Написать письмо">
                    <span className="footer-email-text">info@start4.biz</span></a>
                <a className="footer-phone" href="tel:+79111299351" title="Просто позвоните нам!">
                    <span className="footer-phone-text">+7&nbsp;911&nbsp;129&#8209;93&#8209;51</span></a>
            </ul>
        </div>
    </footer>
    </div>
    );
  }

  export default Footer;