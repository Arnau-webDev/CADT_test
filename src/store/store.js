
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";

import { modalReducer } from "../reducers/modalReducer";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	modal: modalReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);