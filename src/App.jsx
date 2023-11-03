import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/:id",
		element: <Details />,
	},
	{
		path: "/search",
		element: <SearchResults />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);

function App() {
	return (
		<Provider store={store}>
			<GoogleOAuthProvider
				clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
			>
				<RouterProvider router={routes} />
				<Toaster />
			</GoogleOAuthProvider>
		</Provider>
	);
}

export default App;
