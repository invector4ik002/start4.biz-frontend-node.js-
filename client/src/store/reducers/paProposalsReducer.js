//import {ADD_PARTNER, SHOW_ALL_PARTNERS} from "../types";

//TODO получать все заявки с сервера
const initialState = {
    zayavki: [
        {
            id: 62948572,
             advance_payment: 30, 
             credit_period: 36, 
             proposals_count: 2, 
             proposals: [
                {
                    id: 111,
                    partner_id: 0,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 1111,
                },
                {
                    id: 222,
                    partner_id: 3,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 2222,
                },
             ]
        },
        {
            id: 62948573,
             advance_payment: 20, 
             credit_period: 36, 
             proposals_count: 2, 
             proposals: [
                {
                    id: 111,
                    partner_id: 0,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 1111,
                },
                {
                    id: 222,
                    partner_id: 3,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 2222,
                },
             ]
        },
        {
            id: 62948574,
             advance_payment: 25, 
             credit_period: 48, 
             proposals_count: 2, 
             proposals: [
                {
                    id: 111,
                    partner_id: 0,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 1111,
                },
                {
                    id: 222,
                    partner_id: 3,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 2222,
                },
             ]
        },
        {
            id: 62948575,
             advance_payment: 15, 
             credit_period: 24, 
             proposals_count: 2, 
             proposals: [
                {
                    id: 111,
                    partner_id: 0,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 1111,
                },
                {
                    id: 222,
                    partner_id: 3,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 2222,
                },
             ]
        },
        {
            id: 62948576,
             advance_payment: 15, 
             credit_period: 24, 
             proposals_count: 2, 
             proposals: [
                {
                    id: 111,
                    partner_id: 0,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 1111,
                },
                {
                    id: 222,
                    partner_id: 3,
                    advance_payment_full: 346000,
                    advance_period: 36,
                    transport_price: 1186000,
                    leazing_price: 1435592,
                    chat_id: 2222,
                },
             ]
        },
    ],
    isShowAllPartners: false,
};

export const paProposalsReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}