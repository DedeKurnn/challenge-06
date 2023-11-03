import MovieList from "../components/MovieList";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieSearchResult } from "../redux/actions/movieActions";
import { useSelector } from "react-redux";

const SearchResults = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("q");

	const dispatch = useDispatch();
	const { movieSearch } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getMovieSearchResult(query));
	}, [query, dispatch]);

	return (
		<>
			<Navigation />
			<section className="container my-5 pt-5">
				<div className="d-flex justify-content-between mb-4">
					<h2>Search Result for &quot;{query}&quot;</h2>
				</div>
				{movieSearch && <MovieList data={movieSearch} />}
			</section>
		</>
	);
};

export default SearchResults;
