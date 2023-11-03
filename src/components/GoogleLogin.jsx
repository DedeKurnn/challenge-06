import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { registerLoginWithGoogle } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginWithGoogle = useGoogleLogin({
		onSuccess: (responseGoogle) =>
			dispatch(
				registerLoginWithGoogle(responseGoogle.access_token, navigate)
			),
	});

	return (
		<button
			type="submit"
			className="btn btn-primary"
			onClick={() => loginWithGoogle()}
		>
			Log in with Google
		</button>
	);
};

export default GoogleLogin;
