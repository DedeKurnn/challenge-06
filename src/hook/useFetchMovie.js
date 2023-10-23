import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function useFetchMovie(method, path) {
	const token = localStorage.getItem("token");
	const baseUrl = "https://shy-cloud-3319.fly.dev/api/v1/";
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		try {
			const response = await axios.request(baseUrl + path, {
				method: method,
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			setData(response.data.data);
			setLoading(false);
			setError(null);
		} catch (err) {
			setError(`${error} Could not Fetch Data `);
			console.log(err.response);
			setLoading(false);
		}
	}, [setData, error, method, path, token]);

	useEffect(() => {
		if (loading) {
			fetchData();
		}
	}, [method, path, error, loading, fetchData]);

	return { data, error, loading, fetchData };
}
