import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import './PartnersBlock.css';
import PartnerCard from '../PartnerCard/PartnerCard';
import {showAllPartners} from '../../store/actions/partnersActions';

const PartnersBlock = ({partners, isShowAllPartners, toggleShowAllPartners}) => {
    let buttonText;
    
    if(!isShowAllPartners)
        buttonText = 'Показать всех';
    else
        buttonText ='Скрыть';

    const buttonHandler = () => {
        toggleShowAllPartners(!isShowAllPartners);
    }
    let partnersArray = [];

    if(!isShowAllPartners && partners.length > 6){
        partnersArray = partners.slice(0, 6);
    }
    else{
        partnersArray = partners;
    }

    const partnersData = partnersArray.map((partner, index)=>{
        return <PartnerCard data={partner} key={partner.id}/>
    });

	return (
	<Fragment>
        <div className="container-fluid">
            <div className="partners-block partners-block-inner">
                <div className="home-horizontal"> </div>
                <div className="partners-block__title">Партнёры</div>
                <div className="partners-block__partner-cards">
                    {partnersData}
                </div>
                    <div className="home-button {/*button partners-block__button*/}" onClick={buttonHandler}>{buttonText}</div>
            </div>
        </div>
	</Fragment>
	)
}

const mapStateToProps = state => {
	return {
        partners: state.partners.partners,
        isShowAllPartners: state.partners.isShowAllPartners,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
    toggleShowAllPartners: (value) => {
           dispatch(showAllPartners(value))
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnersBlock);