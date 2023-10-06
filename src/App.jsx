import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";

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
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
