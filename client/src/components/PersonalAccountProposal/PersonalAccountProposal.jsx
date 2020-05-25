import React from 'react';
//import { Field, reduxForm, reset} from 'redux-form';
import "./PersonalAccountProposal.css";

const PersonalAccountProposal = ({zayavka}) => {
    return (
        <article className="pa-proposal">
            <div className="pa-proposal__property">
                Номер заявки: 
                <span className="pa-proposal__property pa-proposal__property-value">{zayavka.id}</span>
            </div>
            <div className="pa-proposal__property">
                Аванс: 
                <span className="pa-proposal__property pa-proposal__property-value">{zayavka.advance_payment}</span>
                <span className="pa-proposal__property pa-proposal__property-value">%</span>
            </div>
            <div className="pa-proposal__property">
                Срок: 
                <span className="pa-proposal__property pa-proposal__property-value">{zayavka.credit_period}</span>
                <span className="pa-proposal__property pa-proposal__property-value">мес</span>
            </div>
            <div className="pa-proposal__property">Количество предложений: <span className="pa-proposal__property pa-proposal__property-value">{zayavka.proposals_count}</span></div>
            <div className="pa-proposal__arrow"></div>
        </article>
    )
}

export default PersonalAccountProposal;