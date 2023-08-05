// import React from "react";
import "./home.css";
import Image from "../../assets/avatar-image.png";

const Home = () => {
	return (
		<div className="home-container">
			<div className="container-box-text">
				<div className="container-box-name">
					<h1>Roshan Kumar Yadav</h1>
					<div className="container-box-intro">
						<p>
							Hello, my name is Roshan Kumar Yadav. I completed my BCA in 2021
							from Vikrant Group of Institutions, which is affiliated with
							Jiwaji University. After that, I joined a BPO job at Jio. During
							that time, I realized that I wasn't finding fulfillment in my work
							and decided to consider a change in my career path.
						</p>
						<p>
							It was at this point that I heard about web development, a field
							known for its creative aspects, which appealed to me. I decided to
							explore this avenue further and joined the Neog Camp. Here, I
							learned a variety of skills including HTML, CSS, vanilla
							JavaScript, version control, and much more. I applied these skills
							to my projects, some of which I have mentioned here.
						</p>
						<p>
							This journey allowed me to tap into my creativity and provided me
							with the opportunity to learn and grow. I'm proud of the projects
							I've worked on, and I'm excited to continue exploring new and
							exciting projects in the future.
						</p>
					</div>
				</div>
			</div>
			<div className="container-box-image">
				<img src={Image} alt="image" />
			</div>
		</div>
	);
};

export default Home;
