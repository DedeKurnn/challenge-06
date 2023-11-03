import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions";

const SignUp = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.auth);

	const handleRegister = async (e) => {
		e.preventDefault();

		const payload = JSON.stringify({
			email,
			password,
		});

		dispatch(register(payload, navigate));
	};

	return (
		<div className="container" style={{ marginTop: "120px" }}>
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div className="card border-0 rounded shadow-sm">
						<div className="card-body">
							<h4 className="fw-bold">HALAMAN DAFTAR</h4>
							<hr />
							{error && error.message && (
								<div className="alert alert-danger">
									{error.message}
								</div>
							)}
							<form onSubmit={handleRegister}>
								<div className="mb-3">
									<label className="form-label">NAMA</label>
									<input
										type="text"
										className="form-control"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
										placeholder="Masukkan nama"
									/>
								</div>
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
								{error && error.email && (
									<div className="alert alert-danger">
										{error.email[0]}
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
								{error && error.password && (
									<div className="alert alert-danger">
										{error.password[0]}
									</div>
								)}
								<div className="d-grid gap-2">
									<button
										type="submit"
										className="btn btn-primary"
									>
										REGISTER
									</button>
									<GoogleLogin />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
