import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

export default configureStore({
	reducer: rootReducers,
	devTools: import.meta.env.DEV,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
	