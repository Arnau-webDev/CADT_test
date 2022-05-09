import { types } from "../types/types";

const initialState = {
	modalIsOpen: false,
	activeRow: null,
	updated: false
};

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.modalSetIsOpen:
		return {
			...state,
			modalIsOpen: !state.modalIsOpen
		};
	case types.modalSetActiveRow:
		return {
			...state,
			activeRow: action.payload
		};
	case types.modalHasUpdated:
		return {
			...state,
			updated: true
		};
	case types.modalResetHasUpdated:
		return {
			...state,
			updated: false
		};
	default:
		return state;
	}
};