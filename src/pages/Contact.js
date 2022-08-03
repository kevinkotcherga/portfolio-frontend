import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	background-color: #ccd5ae;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Text = styled.p`
	font-family: 'Italiana', serif;
	font-size: 12rem;
	text-align: center;
	color: #fefefe;
`;

const Contact = () => {
	return (
		<Container>
			<Wrapper>
				<Text>Contactez moi</Text>
			</Wrapper>
		</Container>
	);
};

export default Contact;
