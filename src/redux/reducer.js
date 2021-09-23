import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: "",
	anilist: [],
	anilikes: [],
	aninew: [],
	anime: [],
	loginDialog: false,
	regDialog: false,
	animeDialog: false,
};

export const counterSlice = createSlice({
	name: "anilist",
	initialState,
	reducers: {
		setUser: (state, payload) => {
			state.user = payload.payload;
		},
		getShikiApi: (state, payload) => {
			// state.anilist = payload.payload;
			state.anilist = payload.payload;
		},
		getNew: (state, payload) => {
			state.aninew = payload.payload;
		},
		setLogin: (state, payload) => {
			state.loginDialog = payload.payload;
		},
		setReg: (state, payload) => {
			state.regDialog = payload.payload;
		},
		setAnime: (state, payload) => {
			state.anime = payload.payload;
		},
		setAnimeDialog: (state, payload) => {
			state.animeDialog = payload.payload;
		},
		setAnimeToList: (state, payload) => {
			state.anilikes.push(payload.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setUser,
	getShikiApi,
	getNew,
	setLogin,
	setReg,
	setAnimeDialog,
	setAnime,
	setAnimeToList,
} = counterSlice.actions;

export default counterSlice.reducer;
