import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const [user, setUser] = useState({});

	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchData = async () => {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await axios
				.get("https://shy-cloud-3319.fly.dev/api/v1/auth/me")
				.then((response) => {
					console.log(response.data);
					setUser(response.data.data);
				})
				.catch((error) => console.log(error.response));
		};

		fetchData();
	}, [navigate, token]);

	const searchMovieHandler = (e) => {
		if (e.key == "Enter") {
			navigate(`/search?q=${query}`);
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem("token");
		window.location.href = "/";
	};

	return (
		<nav className="navbar pt-3 navbar-expand-lg navbar-background fixed-top">
			<div className="container d-flex w-100 justify-content-between align-items-center">
				<Link className="navbar-brand w-100" to="/">
					MovieList
				</Link>
				<div className="input-group border border-2 rounded-pill w-100">
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

				<ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex align-items-center justify-content-end gap-3">
					{token ? (
						<div className="d-flex align-items-center gap-2 justify-content-center">
							<li className="nav-item w-auto">
								<p className="fw-bold text-white mb-0">
									Halo, {user.name}
								</p>
							</li>
							<li className="nav-item w-auto">
								<button
									className="btn btn-primary rounded-pill"
									onClick={logoutHandler}
								>
									Log out
								</button>
							</li>
						</div>
					) : (
						<>
							<li className="nav-item">
								<button
									className="btn btn-primary rounded-pill"
									onClick={() => navigate("/login")}
								>
									Login
								</button>
							</li>
							<li className="nav-item">
								<button
									className="btn btn-primary rounded-pill"
									onClick={() => navigate("/signup")}
								>
									Signup
								</button>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
