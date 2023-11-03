import {
	setError,
	setIsLoggedIn,
	setToken,
	setUser,
} from "../reducers/authReducers";
import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = "https://shy-cloud-3319.fly.dev/api/v1/";

export const registerLoginWithGoogle =
	(accessToken, navigate) => async (dispatch) => {
		try {
			let data = JSON.stringify({
				access_token: accessToken,
			});

			let config = {
				method: "post",
				maxBodyLength: Infinity,
				url: BASE_URL + `auth/google`,
				headers: {
					"Content-Type": "application/json",
				},
				data: data,
			};

			const response = await axios.request(config);
			const { token } = response.data.data;

			dispatch(setToken(token));
			dispatch(setIsLoggedIn(true));
			dispatch(getMe(null, null, null));

			navigate("/");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response.data.message);
				dispatch(setError(error.response.data));
				return;
			}
			toast.error(error.message);
		}
	};

export const logout = (navigate) => (dispatch) => {
	try {
		dispatch(setToken(null));
		dispatch(setIsLoggedIn(false));
		dispatch(setUser(null));

		if (navigate) navigate("/");
	} catch (error) {
		toast.error(error?.message);
		dispatch(setError(error.response.data));
	}
};

export const getMe =
	(navigate, navigatePath, navigatePathError) =>
	async (dispatch, getState) => {
		try {
			const { token } = getState().auth;

			if (!token) return;

			const response = await axios.get(BASE_URL + `auth/me`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = response.data.data;

			dispatch(setUser(data));

			if (navigatePath) navigate(navigatePath);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response.status === 401) {
					dispatch(logout(null));

					if (navigatePathError) navigate(navigatePathError);
					return;
				}

				toast.error(error.response.data.message);
				dispatch(setError(error.response.data));
				return;
			}
			toast.error(error.message);
		}
	};

export const login = (data, navigate) => async (dispatch) => {
	try {
		let config = {
			method: "post",
			url: BASE_URL + `auth/login`,
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		const response = await axios.request(config);
		const { token } = response.data.data;

		dispatch(setToken(token));
		dispatch(setIsLoggedIn(true));
		dispatch(getMe(null, null, null));

		navigate("/");
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response.data.message);
			dispatch(setError(error.response.data));
			return;
		}
		toast.error(error.message);
	}
};

export const register = (data, navigate) => async (dispatch) => {
	try {
		let config = {
			method: "post",
			url: BASE_URL + "auth/register",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		const response = await axios.request(config);
		const { token } = response.data.data;

		dispatch(setToken(token));
		dispatch(setIsLoggedIn(true));
		dispatch(getMe(null, null, null));

		navigate("/");
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response.data.message);
			dispatch(setError(error.response.data));
			return;
		}
		toast.error(error.message);
	}
};
