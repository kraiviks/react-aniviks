import { configureStore } from "@reduxjs/toolkit";

import shikiList from "./reducer";
export const store = configureStore({
	reducer: {
		anilist: shikiList,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});
