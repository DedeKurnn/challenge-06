import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import MovieList from "../components/MovieList";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import useFetchMovie from "../hook/useFetchMovie";

const Home = () => {
	const { data: popular, loading: popularLoading } = useFetchMovie(
		"GET",
		"movie/popular"
	);
	const { data: topRated, loading: topRatedLoading } = useFetchMovie(
		"GET",
		"movie/top_rated"
	);
	const { data: upcoming, loading: upcomingLoading } = useFetchMovie(
		"GET",
		"movie/upcoming"
	);

	return (
		<>
			<Navigation />
			{!popularLoading && (
				<>
					<Hero data={popular.results} />
					<section className="container my-5">
						<div className="d-flex justify-content-between mb-4">
							<h2>Popular Movies</h2>
							<button className="btn btn-light rounded-pill color-primary d-flex align-items-center gap-2">
								<span className="fw-semibold">
									See All Movie{" "}
								</span>
								<ArrowRightIcon className="icon color-primary" />
							</button>
						</div>
						<MovieList data={popular.results} />
					</section>
				</>
			)}
			{!topRatedLoading && (
				<section className="container my-5">
					<div className="d-flex justify-content-between mb-4">
						<h2>Top Rated Movies</h2>
						<button className="btn btn-light rounded-pill color-primary d-flex align-items-center gap-2">
							<span className="fw-semibold">See All Movie </span>
							<ArrowRightIcon className="icon color-primary" />
						</button>
					</div>
					<MovieList data={topRated.results} />
				</section>
			)}
			{!upcomingLoading && (
				<section className="container my-5">
					<div className="d-flex justify-content-between mb-4">
						<h2>Upcoming Movies</h2>
						<button className="btn btn-light rounded-pill color-primary d-flex align-items-center gap-2">
							<span className="fw-semibold">See All Movie </span>
							<ArrowRightIcon className="icon color-primary" />
						</button>
					</div>
					<MovieList data={upcoming.results} />
				</section>
			)}
		</>
	);
};

export default Home;
