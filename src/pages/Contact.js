import React from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';

const Container = styled.div`
	height: 101vh;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Text = styled.p`
	font-family: 'Italiana', serif;
	font-size: 300px;
	text-align: center;
	background-image: linear-gradient(0deg, #ffd300, #ff7e00);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	display: inline-block;
	position: relative;
	cursor: pointer;
	::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background-image: linear-gradient(10deg, #ffd300, #ff7e00);
		transition: width 0.25s ease-out;
	}
	:hover::before {
		width: 100%;
	}
`;

const Contact = () => {
	return (
		<Container>
			<Wrapper>
				<Text>Let's talk</Text>
				<BubblesLink />
			</Wrapper>
		</Container>
	);
};

export default Contact;
