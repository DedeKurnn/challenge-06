import PropTypes from "prop-types";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import useFetchMovie from "../hook/useFetchMovie";

const HeroMovieItem = ({
	active = false,
	id,
	poster = false,
	rating = false,
	genre = false,
	carousel = true,
}) => {
	const { data, loading } = useFetchMovie("GET", `movie/${id}`);
	const genreList = data && data.genres.map((genre) => genre.name);

	const watchTrailerHandler = () => {
		const trailerMovie = data.results.find((movie) =>
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
		!loading && (
			<div
				className={`${carousel && "carousel-item"} ${
					active && "active"
				}`}
				data-bs-interval="5000"
			>
				<img
					src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
					className="d-block w-100 hero"
					alt={data.title}
				/>
				<div className="caption container row align-items-center justify-content-between">
					<div className="col-md-6">
						<h1 className="caption--hero-title">{data.title}</h1>
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
							<p>{data.overview}</p>
						</div>
						{rating && (
							<div className="d-flex align-items-center gap-2 mb-4">
								<StarIcon className="icon text-warning" />
								<span>
									{data.vote_average.toFixed(1).toString()} /
									10
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
								src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
								alt={data.title}
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
