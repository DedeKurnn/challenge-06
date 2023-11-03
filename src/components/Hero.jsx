import PropTypes from "prop-types";
import HeroMovieItem from "./HeroMovieItem";
import HeroPlaceholder from "./HeroPlaceholder";

const Hero = ({ data }) => {
	return (
		<div>
			<div
				id="carouselExampleCaptions"
				className="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					{data.length !== 0 ? (
						<>
							<HeroMovieItem id={data[0].id} active={true} />
							{data.slice(1, 3).map((movie) => (
								<HeroMovieItem key={movie.id} id={movie.id} />
							))}
						</>
					) : (
						<HeroPlaceholder />
					)}
				</div>
			</div>
		</div>
	);
};

Hero.propTypes = {
	data: PropTypes.array,
};

export default Hero;
