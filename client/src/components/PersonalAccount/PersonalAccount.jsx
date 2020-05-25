import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ContactInformation from '../ContactInformation/ContactInformation';
import OrganizationInformation from '../OrganizationInformation/OrganizationInformation';
import PersonalAccountProposals from '../PersonalAccountProposals/PersonalAccountProposals';
import PersonalRegistrationContainer from '../../containers/PersonalRegistrationContainer';
import { PersonalAccountExit } from '../PersonalAccountExit/PersonalAccountExit';

import "./PersonalAccount.css";

const PersonalAccount = () => {

    const displayNone = 'question-wraper--none';
    
    const[classNames, setClassNames] = useState(displayNone);
    const[redirect, setRedirect] = useState(false);
    const[login, setLogin] = useState(false)
    /**
     * 
     */
    const clickHendlerNo = () => {
        if(classNames === displayNone) {
            return setClassNames('');
        }
        setClassNames(displayNone);
    };
    /**
     * 
     */
    const clickHendlerYes = () => {
        setRedirect(true);
    };
    /**
     * 
     */
    const clickHandlerLogin = () => {
        setLogin(true)
    }
    // ждем token 
    // const login = false;

return (
   <Fragment>
		<PersonalAccountExit 
            classNames={classNames} 
            redirect={redirect}
			clickHendlerNo={clickHendlerNo}
			clickHendlerYes={clickHendlerYes}
		/>
            <div className="container-fluid">
                <div className="personal-account">
                    <div className="personal-account__inner">
                    <div className="bread-crump">тут ссылки...</div>
                        <div className="personal-account__content-wrapper">
                            {login && (
                            <Fragment>
                            <div className='personal-account__content'>
                                <Switch>
                                    <Route path="/account/contactInformation">
                                        <ContactInformation />
                                    </Route>
                                    <Route path="/account/organizationInformation">
                                        <OrganizationInformation />
                                    </Route>
                                    <Route path="/account/proposals">
                                        <PersonalAccountProposals />
                                    </Route>
                                </Switch>
                            </div>
                            <div className="personal-account__navigation">
                                <h3 className="personal-account__navigation-title">Навигация</h3>
                                <ul className="personal-account__navigation-list">
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/contactInformation"
                                            className="personal-account__navigation-list-link  personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                            title="Контактная информация">
                                            <span className="personal-account__navigation-list-text">
                                                Контактная информация
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="personal-account__navigation-list-item">
                                        <Link to="/account/organizationInformation"
                                            className="personal-account__navigation-list-link  personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                            title="Контактная информация">
                                            <span className="personal-account__navigation-list-text">
                                                Информация об организации
                                            </span>
                                        </Link>
                                     </li>
                                     <li className="personal-account__navigation-list-item">
                                        <Link to="/account/proposals"
                                            className="personal-account__navigation-list-link  personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
                                            title="Заявки">
                                            <span className="personal-account__navigation-list-text">
                                                Заявки
                                            </span>
                                         </Link>
                                     </li>
									<li className="personal-account__navigation-list-item">
									<a href="#"
									className="personal-account__navigation-list-link   personal-account__navigation-list-link--hover personal-account__navigation-list-link--active"
									onClick={clickHendlerNo}
									  >Выход
									</a>
									</li>
                                 </ul>
                            </div>
                            </Fragment>
                            )}
                            {!login && (
                              <PersonalRegistrationContainer 
                                clickHandlerLogin={clickHandlerLogin}
                              />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
   )
}

export default PersonalAccount;