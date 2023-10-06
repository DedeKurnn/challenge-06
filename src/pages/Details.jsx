import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import HeroMovieItem from "../components/HeroMovieItem";
import MovieDetails from "../components/MovieDetails";

const Details = () => {
	const { id } = useParams();

	return (
		<>
			<Navigation />
			<HeroMovieItem
				id={id}
				active={true}
				genre={true}
				poster={true}
				rating={true}
				carousel={false}
			/>
			<MovieDetails id={id} />
		</>
	);
};
export default Details;
