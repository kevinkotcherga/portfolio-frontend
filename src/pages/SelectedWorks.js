import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const MainContainer = styled.div`
	background-color: #ccd5ae;
`;

const Title = styled.p`
	font-weight: normal;
	text-align: center;
	padding: 150px 0;
	font-size: 50px;
	font-family: 'Italiana', serif;
	position: relative;
	color: #0b0b0b;
`;

const Asterisk = styled.span`
	top: 150px;
	position: absolute;
	font-family: 'Viaoda Libre';
	font-size: 20px;
	color: #0b0b0b;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const SelectedWorks = () => {
	return (
		<MainContainer>
			<Title>
				Selected Works<Asterisk>(4)</Asterisk>
			</Title>
			<Container>
				{projects.map(project => (
					<ProjectCard project={project} />
				))}
			</Container>
		</MainContainer>
	);
};

export default SelectedWorks;
