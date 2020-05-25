import { POPUP_SHOW, POPUP_HIDE } from "../types";

const initialState = {
    isShow: false,
};

export const popupReducer = (state = initialState, action) => {
	switch (action.type) {
		case POPUP_SHOW:
            return {
                ...state, 
                isShow: true
            }
        case POPUP_HIDE:
            return {
                ...state, 
                isShow: false
            }
		default: return state;
	}
}