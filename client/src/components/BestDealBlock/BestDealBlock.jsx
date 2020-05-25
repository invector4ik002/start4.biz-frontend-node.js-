import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import './BestDealBlock.css';
import SliderView from './../SliderView/SliderView';
import {popupShow} from './../../store/actions/popupActions';
//import ProposalFormContainer from './../../containers/ProposalFormContainer';
//import Popup from './../Popup/Popup.jsx';
import { proposalChangeStep } from './../../store/actions/proposalActions';

const BestDealBlock = ({partners, isPopupShow, popupShow}) => {

    const buttonHandler = () => {
        popupShow();
    }

	return (
        <Fragment>
            <div className="container-fluid">
                <div className="block1 block-inner">
                    <div className="block1__about-leasing">
                        <section className="about-leasing">
                            <h2 className="about-leasing__title">Лучшие условия лизинга для Вашего бизнеса</h2>
                            <p className="about-leasing__description">В стране десятки лизинговых компаний, готовых предложить Вам финансирование. Получи предложение, оставив одну заявку</p>
                            <div className="button button--about-leasing" onClick={buttonHandler}>Лучшее предложение</div>
                        </section>
                    </div>
                    <div className="block1__partners">
                        <SliderView slides={partners}/>
                    </div>
                </div>
            </div>
            {/* {isPopupShow && <Popup form={<ProposalFormContainer />}/>} */}
        </Fragment>
	)
}

const mapStateToProps = state => {
	return {
        partners: state.partners.partners,
//        formIsShow: state.proposalForm.isShow,
//        isPopupShow: state.popup.isShow,
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
    //     proposalFormShow: () => {
    //         dispatch(proposalFormShow())
    //   },
       popupShow: () => {
           dispatch(proposalChangeStep (1));
           dispatch(popupShow());
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BestDealBlock);