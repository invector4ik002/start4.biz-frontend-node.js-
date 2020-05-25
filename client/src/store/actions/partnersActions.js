import { SHOW_ALL_PARTNERS } from "../types";

export const showAllPartners = (value) => {
	return {
        type: SHOW_ALL_PARTNERS,
        payload: value
	}
}