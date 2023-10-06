import PropTypes from "prop-types";
import useFetchMovie from "../hook/useFetchMovie";
import profilePlaceholder from "../../public/assets/profileplaceholder.jpg";

const MovieDetails = ({ id }) => {
	const { data: casting, loading } = useFetchMovie(
		"GET",
		`movie/${id.toString()}/credits`
	);

	const { data, loading: dataLoading } = useFetchMovie("GET", `movie/${id}`);

	return (
		<section className="container mx-auto my-5 row">
			<div className="col-md-9">
				<h2 className="mb-5">Cast</h2>
				<div className="scroll-container">
					<ul className="row flex-nowrap list-unstyled">
						{!loading &&
							casting.cast.map((cast) => (
								<li key={cast.id} className="col-3 list-item">
									<img
										src={
											cast.profile_path
												? `https://image.tmdb.org/t/p/w1280${cast.profile_path}`
												: profilePlaceholder
										}
										alt={cast.name}
										className="w-100 rounded-3 profile-photo object-fit-cover mb-1"
									/>
									<p className="mb-0 fw-bold">{cast.name}</p>
									<p className="fs-7">{cast.character}</p>
								</li>
							))}
					</ul>
				</div>
			</div>
			{!dataLoading && (
				<aside className="col-md-3">
					<div>
						<h5>Status</h5>
						<p>{data.status}</p>
					</div>
					<div>
						<h5>Original Language</h5>
						<p>
							{new Intl.DisplayNames(["en"], {
								type: "language",
							}).of(data.original_language)}
						</p>
					</div>
					<div>
						<h5>Budget</h5>
						<p>
							{new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(data.budget)}
						</p>
					</div>
					<div>
						<h5>Revenue</h5>
						<p>
							{" "}
							{new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(data.revenue)}
						</p>
					</div>
				</aside>
			)}
		</section>
	);
};

MovieDetails.propTypes = {
	id: PropTypes.number,
};

export default MovieDetails;
