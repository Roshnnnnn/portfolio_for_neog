import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

function App() {
	return (
		<>
			<div>
				<hr />
				<Navbar />
				<hr />
				<Home />
				<hr />
				<Projects />
			</div>
		</>
	);
}

export default App;
