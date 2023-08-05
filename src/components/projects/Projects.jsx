import "./Projects.css";
import projectsData from "./projectData.json";

const Projects = () => {
	return (
		<div className="projects-container">
			{projectsData.map((project, index) => (
				<div key={index} className="project-card">
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<a href={project.url} target="_blank" rel="noopener noreferrer">
						View Project
					</a>
					<a href={project.github} target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
				</div>
			))}
		</div>
	);
};

export default Projects;
