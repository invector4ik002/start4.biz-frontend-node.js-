import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Uc from './../Uc/Uc';
import ToBusiness from './../ToBusiness/ToBusiness';
import ToFinorg from './../ToFinorg/ToFinorg';
import About from '../About/About';
import BestDealBlock from './../BestDealBlock/BestDealBlock';
import WorkStepContainer from './../../containers/WorkStepContainer';
import Questions from './../Questions/Questions';
import PartnersBlock from './../PartnersBlock/PartnersBlock';
import PersonalAccount from '../PersonalAccount/PersonalAccount';
import Policy from './../Policy/Policy';
import ProposalFormContainer from '../../containers/ProposalFormContainer';
import { proposalChangeStep } from './../../store/actions/proposalActions';
import { popupShow } from '../../store/actions/popupActions';
import Popup from './../Popup/Popup.jsx';
import './Content.css';

function Content({isPopupShow}) {
    return (
        <div className="content-main">
            {isPopupShow && <Popup form={<ProposalFormContainer />}/>}
            <Switch>
                <Route path="/About">
                    <div className="content-about">
                        <About />
                    </div>
                </Route>
                <Route path="/Contacts">
                    <div className="content-about">
                        <About />
                    </div>
                </Route>
                <Route path="/toBusiness">
                    <div className="content-2business">
                        <ToBusiness />
                    </div>
                </Route>
                <Route path="/toFinorg">
                    <div className="content-2finorg">
                        <ToFinorg />
                    </div>
                </Route>
                <Route path="/Policy">
                    <div className="content-policy">
                        <Policy />
                    </div>
                </Route>
                <Route path="/uc">
                    <Uc />
                </Route>
                <Route path="/account">
                    <PersonalAccount />
                </Route>
                <Route path="/" exact>
                    <Fragment>
                        <BestDealBlock />
                        <WorkStepContainer />
                        <Questions />
                        <PartnersBlock />
                    </Fragment>
                </Route>
            </Switch>
        </div>
    );
}

//export default Content;
const mapStateToProps = state => {
	return {
        isPopupShow: state.popup.isShow,
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
       popupShow: () => {
           dispatch(proposalChangeStep (1));
           dispatch(popupShow());
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);