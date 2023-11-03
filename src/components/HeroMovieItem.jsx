import PropTypes from "prop-types";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieDetails } from "../redux/actions/movieActions";

const HeroMovieItem = ({
	active = false,
	id,
	poster = false,
	rating = false,
	genre = false,
	carousel = true,
}) => {
	const dispatch = useDispatch();
	const { movieDetails } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getMovieDetails(id));
	}, [id, dispatch]);

	const genreList =
		movieDetails && movieDetails.genres.map((genre) => genre.name);

	const watchTrailerHandler = () => {
		const trailerMovie = movieDetails.results.find((movie) =>
			movie.name.includes("Trailer")
		);

		if (trailerMovie) {
			window.open(
				`https://youtube.com/watch?v=${trailerMovie.key}`,
				"_blank"
			);
		} else {
			console.log("No matching trailer found");
		}
	};
	return (
		movieDetails && (
			<div
				className={`${carousel && "carousel-item"} ${
					active && "active"
				}`}
				data-bs-interval="5000"
			>
				<img
					src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
					className="d-block w-100 hero"
					alt={movieDetails.title}
				/>
				<div className="caption container row align-items-center justify-content-between">
					<div className="col-md-6">
						<h1 className="caption--hero-title">
							{movieDetails.title}
						</h1>
						<p>
							{genre &&
								genreList.map((genre, index) => (
									<span key={index}>
										{index > 0 && ", "}
										{genre}
									</span>
								))}
						</p>
						<div className="row">
							<p>{movieDetails.overview}</p>
						</div>
						{rating && (
							<div className="d-flex align-items-center gap-2 mb-4">
								<StarIcon className="icon text-warning" />
								<span>
									{movieDetails.vote_average
										.toFixed(1)
										.toString()}{" "}
									/ 10
								</span>
							</div>
						)}
						<button
							onClick={watchTrailerHandler}
							className="btn btn-primary rounded-pill d-flex align-items-center gap-1"
						>
							<PlayCircleIcon className="icon text-white" />
							<span>WATCH TRAILER</span>
						</button>
					</div>
					{poster && (
						<div className="col-md-3">
							<img
								src={`https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
								alt={movieDetails.title}
								className="w-100 rounded-3"
							/>
						</div>
					)}
				</div>
			</div>
		)
	);
};

HeroMovieItem.propTypes = {
	background: PropTypes.string,
	title: PropTypes.string,
	overview: PropTypes.string,
	active: PropTypes.bool,
	id: PropTypes.number,
	poster: PropTypes.bool,
	genre: PropTypes.bool,
	rating: PropTypes.bool,
	carousel: PropTypes.bool,
};

export default HeroMovieItem;
