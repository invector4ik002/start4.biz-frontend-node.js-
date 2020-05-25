import React, {Fragment} from 'react';
import './Popup.css';
import { connect } from 'react-redux';
import {popupHide} from '../../store/actions/popupActions';

const Popup = ({form, popupHide, success}) => {
	let popupClasses = (success)? "popup popup--success" : "popup";

	return (
	<Fragment>
		<div className="popup-overlay">
			<div className={popupClasses}>
				<div className="popup__close" onClick={popupHide}></div>
				<div className="popup__content">
					{form}
				</div>
			</div>
		</div>
	</Fragment>
	)
}

const mapDispatchToProps = (dispatch) => {
    return {
        popupHide: () => {
        	dispatch(popupHide())
      },
    }
}

const mapStateToProps = state => {
	return {
		isShow: state.popup.isShow,
		success: state.proposalForm.success
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);