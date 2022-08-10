import React from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';

const Container = styled.div`
	height: 101vh;
	background-color: #e9edc9;
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
	color: #0b0b0b;
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
		background-color: #0b0b0b;
		transition: width 0.3s ease-out;
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
