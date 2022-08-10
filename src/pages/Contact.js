import React from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';

const Container = styled.div`
	height: 100vh;
	background-color: #e9edc9;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
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
	font-family: 'Zighead', serif;
	font-size: 250px;
	text-align: center;
	color: #0b0b0b;
	display: inline-block;
	position: relative;
	cursor: pointer;
	text-transform: uppercase;
	::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 3px;
		background-color: #0b0b0b;
		transition: width 0.3s ease-out;
	}
	:hover::before {
		width: 100%;
	}
`;

const Footer = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
`;

const ContainerFooter = styled.div`
	margin: 40px;
`;
const DateFooter = styled.p``;
const TextFooter = styled.p`
	text-transform: uppercase;
`;
const ButtonTop = styled.div`
	text-transform: uppercase;
	margin: 40px;
`;

const Contact = () => {
	return (
		<Container>
			<Wrapper>
				<Text>Let's talk</Text>
				<BubblesLink />
			</Wrapper>
			<Footer>
				<ContainerFooter>
					<DateFooter>© 2022</DateFooter>
					<TextFooter>Made by Kevin Kotcherga</TextFooter>
				</ContainerFooter>
				<ButtonTop>Back to top</ButtonTop>
			</Footer>
		</Container>
	);
};

export default Contact;
