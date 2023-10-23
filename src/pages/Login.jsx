import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [validation, setValidation] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/");
		}
	}, [navigate]);

	const handleLogin = async (e) => {
		e.preventDefault();

		const payload = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				"https://shy-cloud-3319.fly.dev/api/v1/auth/login",
				payload
			);
			localStorage.setItem("token", response.data.data.token);
			navigate("/");
		} catch (error) {
			console.log(error.response);
			setValidation(error.response.data);
		}
	};
	return (
		<>
			<Toaster />
			<div className="container" style={{ marginTop: "120px" }}>
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="card border-0 rounded shadow-sm">
							<div className="card-body">
								<h4 className="fw-bold">HALAMAN LOGIN</h4>
								<hr />
								{validation.message && (
									<div className="alert alert-danger">
										{validation.message}
									</div>
								)}
								<form onSubmit={handleLogin}>
									<div className="mb-3">
										<label className="form-label">
											ALAMAT EMAIL
										</label>
										<input
											type="email"
											className="form-control"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											placeholder="Masukkan Alamat Email"
										/>
									</div>
									{validation.email && (
										<div className="alert alert-danger">
											{validation.email[0]}
										</div>
									)}
									<div className="mb-3">
										<label className="form-label">
											PASSWORD
										</label>
										<input
											type="password"
											className="form-control"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
											placeholder="Masukkan Password"
										/>
									</div>
									{validation.password && (
										<div className="alert alert-danger">
											{validation.password[0]}
										</div>
									)}
									<div className="d-grid gap-2">
										<button
											type="submit"
											className="btn btn-primary"
										>
											LOGIN
										</button>
										<GoogleLogin />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
