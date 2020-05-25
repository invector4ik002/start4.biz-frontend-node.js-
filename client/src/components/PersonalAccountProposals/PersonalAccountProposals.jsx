import React from 'react';
//import { Field, reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
import PersonalAccountProposal from '../PersonalAccountProposal/PersonalAccountProposal';
import "./PersonalAccountProposals.css";

const PersonalAccountProposals = (props) => {
    console.log("Zayavki " + props.zayavki);
    return (
        <div className="pa-proposals">
            <div className="pa-proposals__title">Заявки</div>
            <div className="pa-proposals__list">
                {props.zayavki.map((zayavka)=>{
                    return <PersonalAccountProposal zayavka={zayavka} />
                })}
            </div>
        </div>
    )
}

//export default PersonalAccountProposals;

const mapStateToProps = state => {
	return {
        zayavki: state.paProposals.zayavki,
	}
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//     toggleShowAllPartners: (value) => {
//            dispatch(showAllPartners(value))
//       },
//     }
// }

export default connect(mapStateToProps, null)(PersonalAccountProposals);