const HeroPlaceholder = () => {
	return (
		<div className="carousel-item active" data-bs-interval="5000">
			<img
				src="https://www.distro.tv/img/bggrey.jpg"
				className="d-block w-100 hero"
				alt="Backdrop placeholder"
			/>
			<div className="caption container row align-items-center justify-content-between">
				<div className="col-md-6">
					<h1 className="caption--hero-title">
						Log in to see the movies
					</h1>
				</div>
			</div>
		</div>
	);
};

export default HeroPlaceholder;
