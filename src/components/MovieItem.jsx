import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import posterPlaceholder from "../../public/assets/poster-placeholder.png";
import { StarIcon } from "@heroicons/react/24/solid";

const MovieItem = ({ image, title, rating, release, id }) => {
	const navigate = useNavigate();

	const detailsHandler = () => {
		navigate(`/${id.toString()}`);
	};

	return (
		<div className="mb-5">
			<img
				src={
					image
						? `https://image.tmdb.org/t/p/w1280${image}`
						: posterPlaceholder
				}
				alt={title}
				className="rounded-3 w-100 mb-2 cursor-pointer"
				onClick={detailsHandler}
			/>
			<p
				className="fw-semibold mb-0 fs-5 cursor-pointer"
				onClick={detailsHandler}
			>
				{title}
			</p>
			<span className="d-flex align-items-center gap-1">
				<StarIcon className="icon-small text-warning" /> {rating}
			</span>
			<span className="d-block fw-light">{release}</span>
		</div>
	);
};

MovieItem.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	rating: PropTypes.number,
	release: PropTypes.string,
	id: PropTypes.number,
};

export default MovieItem;
