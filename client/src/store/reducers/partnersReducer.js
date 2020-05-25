import {ADD_PARTNER, SHOW_ALL_PARTNERS} from "../types";

//TODO получать всех партнеров с сервера
const initialState = {
    partners: [
        {id: 0, name: "Сбербанк лизинг", img: "sberliz.png", procValue: 10, description: "Лучшее предложение по лизингу на сегодяшний день"},
        {id: 1, name: "Evroplan", img: "evroplan.png", procValue: 11, description: "Лучшее предложение по лизингу на сегодяшний день"},
        {id: 2, name: "Alfa leasing", img: "alfa.png", procValue: 10, description: "Лучшее предложение по лизингу на сегодяшний день"},
        {id: 3, name: "VTB leasing", img: "vtbliz.png", procValue: 11, description: "Лучшее предложение по лизингу на сегодяшний день"},
        {id: 4, name: "Reso leasing", img: "reso.png", procValue: 10, description: "Лучшее предложение по лизингу на сегодяшний день"},
        {id: 5, name: "societe", img: "societe-generale.png", procValue: 11, description: "Лучшее предложение по лизингу на сегодяшний день"},
        {id: 6, name: "ctrl автолизинг онлайн", img: "ctrl.png", procValue: 10, description: "Лучшее предложение по лизингу на сегодяшний день"},
    ],
    isShowAllPartners: false,
};

export const partnersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PARTNER:
            return {
                ...state, 
                partners: {
                    ...state.partners,
                }
            }
        case SHOW_ALL_PARTNERS:
            return {
                ...state,
                isShowAllPartners: action.payload
            }
		default: return state;
	}
}