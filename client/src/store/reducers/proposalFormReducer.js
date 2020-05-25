 import { PROPOSAL_CHANGE_STEP, PROPOSAL_CHANGE_SUCCESS, PROPOSAL_FORM_SHOW, PROPOSAL_FORM_HIDE} from "../types";

//FIXME подумать над заполнением первого option в selectaх
const initialState = {
	step: 1,
	success: false,
	whatToBuy: [
		null, "значение 1", "значение 2", "значение 3"
	],
	transportPurpose: [
		null, "значение 1", "значение 2", "значение 3"
	],
	summAvPayment: [
		null, 1, 2, 3
	],
	leasingPeriod: [
		null, 1, 2, 3
	],
	contactName: "",
	contactPhone: "",
	contactEmail: "",
	contactInn: "",
	contactRequestSubject: 0,
	contactSubjectPurpose: 0,
	contactSubjectDescription: "",
	contactAdvancePayment: 0,
	contactCreditPeriod: 0,
};

export const proposalFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROPOSAL_CHANGE_STEP:
			return {...state, step: action.payload}
		case PROPOSAL_CHANGE_SUCCESS:
			return {...state, success: action.payload}
		case PROPOSAL_FORM_SHOW:
			return {...state, isShow: true}
		case PROPOSAL_FORM_HIDE:
			return {...state, isShow: false}
		default: return state;
	}
}