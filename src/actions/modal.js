import patchInfo from "../helpers/patchInfo";
import { types } from "../types/types";

export const setModalState = () => {
	return {
		type: types.modalSetIsOpen
	};
};

export const setModalActiveRow = (tableInfo) => {
	return {
		type: types.modalSetActiveRow,
		payload: tableInfo
	};
};

export const updateTableRow = (tableInfo, body, id, userIdLastUpd) => {
	return async (dispatch) => {
		let designToUpd = {};
		let setoutToUpd = {};
		let reqBody = {};

		if(tableInfo === "designs") {
			designToUpd = {
				...body,
				name: body.nameDs,
				updated: new Date().toISOString(),
				user_id_last_update: userIdLastUpd
			};

			delete designToUpd["nameDs"]; 

			reqBody = designToUpd;

		} else if(tableInfo === "setouts") {
			setoutToUpd = {
				...body,
				name: body.nameSt,
				courses: body.courses2,
				updated: new Date().toISOString(),
			};

			delete setoutToUpd["nameSt"]; 
			delete setoutToUpd["courses2"]; 

			reqBody = setoutToUpd;
		} else return;


		patchInfo(tableInfo, reqBody, id)
			.then((data) => {
				if(data) dispatch(hasUpdatedInfo());
			})
			.catch((err) => console.log(err));
	};
};

export const hasUpdatedInfo = () => {
	return  {
		type: types.modalHasUpdated		
	};
};

export const resetHasUpdated = () => {
	return {
		type: types.modalResetHasUpdated
	};
};