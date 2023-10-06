import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function useFetchMovie(method, path) {
	const baseUrl = "https://api.themoviedb.org/3/";
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		try {
			const response = await axios.request(baseUrl + path, {
				method: method,
				params: { language: "en-US", page: "1" },
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${
						import.meta.env.VITE_TMDB_API_BEARER
					}`,
				},
			});

			setData(response.data);
			setLoading(false);
			setError(null);
		} catch (err) {
			setError(`${error} Could not Fetch Data `);
			setLoading(false);
		}
	}, [setData, error, method, path]);

	useEffect(() => {
		if (loading) {
			fetchData();
		}
	}, [method, path, error, loading, fetchData]);

	return { data, error, loading, fetchData };
}
