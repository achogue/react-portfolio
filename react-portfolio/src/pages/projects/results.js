 
import React from "react";
import Projects from '../../data/projects.json';
import Card from "react-bootstrap/Card";

const Results = props => {
	

	return (
		Projects.map((project) => {
			return(
			<Card className="card">
			<Card.Img className="card-img-top" src={ project.project_img } alt="project image"/>
			<Card.Body>
				<h5 className="card-title">{project.title}</h5>
				<a href={project.app_link} className="btn btn-link" target="_blank">Application Link</a>
				<a href={project.github_link} className="btn btn-link" target="_blank">GitHub Link</a>
			</Card.Body>

			</Card>
			);
		})
	);
};

export default Results;

