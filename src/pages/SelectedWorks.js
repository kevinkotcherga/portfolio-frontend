import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const MainContainer = styled.div`
	border-top: 1px solid #ffd300;
	border-bottom: 1px solid #ffd300;
	background-color: #000;
	color: #242423;
`;

const Title = styled.p`
	font-weight: normal;
	text-align: center;
	padding: 150px 0;
	font-size: 50px;
	font-family: 'Italiana', serif;
	position: relative;
	background-image: linear-gradient(10deg, #ffd300, #ff7e00);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Asterisk = styled.span`
	top: 150px;
	position: absolute;
	font-family: 'Viaoda Libre';
	font-size: 20px;
	background-image: linear-gradient(10deg, #ffd300, #ff7e00);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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
