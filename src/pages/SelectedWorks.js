import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const MainContainer = styled.div`
	background-color: #e9edc9;
	color: #242423;
`;

const Title = styled.p`
	font-weight: normal;
	text-align: center;
	padding: 200px 0;
	font-size: 50px;
	font-family: 'Italiana', serif;
	position: relative;
`;

const Asterisk = styled.span`
	top: 190px;
	position: absolute;
	font-family: 'Viaoda Libre';
	font-size: 20px;
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
