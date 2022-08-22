import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
	return (
		<div className="container">
			<Router>
				<Header />
				<Main />
			</Router>
		</div>
	);
};

export default App;
