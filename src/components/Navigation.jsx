import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const searchMovieHandler = (e) => {
		if (e.key == "Enter") {
			navigate(`/search?q=${query}`);
		}
	};

	return (
		<nav className="navbar pt-3 navbar-expand-lg navbar-background fixed-top">
			<div className="container d-flex justify-content-between align-items-center">
				<Link className="navbar-brand w-100" to="/">
					MovieList
				</Link>
				<div className="input-group border border-2 rounded-pill">
					<input
						type="text"
						className="form-control border border-0 rounded-start-pill"
						placeholder="What do you want to watch?"
						aria-label="What do you want to watch?"
						aria-describedby="basic-addon1"
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={searchMovieHandler}
					/>
					<span
						className="input-group-text border border-0 rounded-end-pill"
						id="basic-addon1"
					>
						<MagnifyingGlassIcon className="icon" />
					</span>
				</div>

				<ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end gap-3">
					<li className="nav-item">
						<button className="btn btn-primary rounded-pill">
							Login
						</button>
					</li>
					<li className="nav-item">
						<button className="btn btn-primary rounded-pill">
							Signup
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
