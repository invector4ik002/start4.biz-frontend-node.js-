import {connect} from 'react-redux';
import ProposalForm from '../components/ProposalForm/ProposalForm';
import {proposalChangeStep, proposalChangeSuccess, proposalRequest} from '../store/actions/proposalActions';

const mapStateToProps = (state) => {
    return {
        step: state.proposalForm.step,
        success: state.proposalForm.success,
        whatToBuy: state.proposalForm.whatToBuy,
        transportPurpose: state.proposalForm.transportPurpose,
        summAvPayment: state.proposalForm.summAvPayment,
        leasingPeriod: state.proposalForm.summAvPayment,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeStep: (step) => {
      dispatch(proposalChangeStep(step))
    },

    changeSuccess: (value) => {
      dispatch(proposalChangeSuccess(value))
    },

    proposalRequest: (formData) => {
      dispatch(proposalRequest(formData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm);