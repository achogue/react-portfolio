// Created Monday, March 13, 2023 5:19 PM by SliceImpl, all rights reserved. 
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Welcome from "./welcome";
//import Access from "./access";
import Results from "./results";



const Projects = props => {
	

	return (
		<React.Fragment>
			<Container>
				<Welcome/>
				{RenderContent()}
			</Container>
		</React.Fragment>
	)
};
export default Projects;

function RenderContent() {
	// const roles = useSelector(state => state.roles);
	
		return (
			<Results
				//data
			/>
		);
	
	
	
}