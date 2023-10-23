import MovieList from "../components/MovieList";
import { useLocation } from "react-router-dom";
import useFetchMovie from "../hook/useFetchMovie";
import Navigation from "../components/Navigation";
import { useEffect } from "react";

const SearchResults = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("q");

	console.log(query);

	const { data, loading, fetchData } = useFetchMovie(
		"GET",
		`search/movie?page=1&query=${query}`
	);

	useEffect(() => {
		fetchData();
	}, [query, fetchData]);

	return (
		<>
			<Navigation />
			<section className="container my-5 pt-5">
				<div className="d-flex justify-content-between mb-4">
					<h2>Search Result for &quot;{query}&quot;</h2>
				</div>
				{!loading && <MovieList data={data} />}
			</section>
		</>
	);
};

export default SearchResults;
