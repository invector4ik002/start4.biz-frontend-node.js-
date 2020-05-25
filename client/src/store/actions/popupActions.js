import { POPUP_SHOW, POPUP_HIDE } from "../types";

export const popupShow = () =>{
	return {
		type: POPUP_SHOW,
	}
}

export const popupHide = () =>{
	return {
		type: POPUP_HIDE,
	}
}