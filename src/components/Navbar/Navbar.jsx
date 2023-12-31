import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container-navbar">
			<div className="container-box">
				<Link to={"/"}>LOGO</Link>
			</div>
			<div className="container-box2">
				<Link to={"/"}>
					<li>HOME</li>
				</Link>
				<Link to={"/project"}>
					<li>PROJECTS</li>
				</Link>
				<Link to={"/project"}>
					<li>SKILLS</li>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
