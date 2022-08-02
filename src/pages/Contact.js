import React from 'react';
import styled from 'styled-components';

import { MouseParallax, ScrollParallax } from 'react-just-parallax';

const Container = styled.div`
	height: 100vh;
	background-color: #ccd5ae;
	font-family: 'Italiana', serif;
`;

const Text = styled.p`
	font-size: 20rem;
	text-align: center;
	color: #fefefe;
`;

const Contact = () => {
	return (
		<Container>
			<Text>Rencontrons nous</Text>
		</Container>
	);
};

export default Contact;
