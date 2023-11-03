import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: [],
	movieDetails: null,
	movieSearch: [],
	error: null,
};

const movieSlicer = createSlice({
	name: "movies",
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload;
		},
		setMovieDetails: (state, action) => {
			state.movieDetails = action.payload;
		},
		setMovieSearch: (state, action) => {
			state.movieSearch = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { setMovies, setMovieDetails, setMovieSearch, setError } =
	movieSlicer.actions;

export default movieSlicer.reducer;
