import axios from "axios";
import {
	setMovieDetails,
	setMovieSearch,
	setMovies,
} from "../reducers/movieReducers";
import { toast } from "react-hot-toast";

const BASE_URL = "https://shy-cloud-3319.fly.dev/api/v1/";

const token = localStorage.getItem("token");

export const getPopularMovies = () => async (dispatch) => {
	try {
		const response = await axios.get(BASE_URL + "movie/popular", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch(setMovies(response.data.data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response.data.message);
			return;
		}
		toast.error(error.message);
	}
};

export const getMovieDetails = (id) => async (dispatch) => {
	try {
		const response = await axios.get(BASE_URL + `movie/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch(setMovieDetails(response.data.data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response.data.message);
			return;
		}
		toast.error(error.message);
	}
};

export const getMovieSearchResult = (query) => async (dispatch) => {
	try {
		const response = await axios.get(
			BASE_URL + `search/movie?page=1&query=${query}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		dispatch(setMovieSearch(response.data.data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response.data.message);
			return;
		}
		toast.error(error.message);
	}
};
