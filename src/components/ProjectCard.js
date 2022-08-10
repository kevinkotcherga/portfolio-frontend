import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 49%;
`;

const Card = styled.div`
	height: 95vh;
	background-color: #fefefe;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ContainerDescription = styled.div`
	text-align: center;
	font-family: 'Belleza', sans-serif;
	font-size: 16px;
	margin: 30px 0 200px 0;
`;

const Name = styled.div``;
const Description = styled.div`
	color: #787878;
`;

const ProjectCard = ({ project }) => {
	return (
		<Container>
			<Card>
				<Img src={project.img} />
			</Card>
			<ContainerDescription>
				<Name>NOM DU PROJET</Name>
				<Description>DESCRIPTION SUR UNE LIGNE</Description>
			</ContainerDescription>
		</Container>
	);
};

export default ProjectCard;
