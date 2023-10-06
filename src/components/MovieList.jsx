import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

const MovieList = ({ data }) => {
	return (
		<ul className="row list-unstyled">
			{data.slice(0, 8).map((movie) => (
				<li key={movie.id} className="col-sm-3">
					<MovieItem
						image={movie.poster_path}
						title={movie.title}
						release={movie.release_date}
						rating={movie.vote_average}
						id={movie.id}
					/>
				</li>
			))}
		</ul>
	);
};

MovieList.propTypes = {
	data: PropTypes.array,
};

export default MovieList;
