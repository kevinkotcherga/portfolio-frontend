import React from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';

const Container = styled.div`
	height: 100vh;
	background-color: #ccd5ae;
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
	font-family: 'Italiana', sans-serif;
	font-size: 300px;
	text-align: center;
	color: #fefefe;
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
		background-color: #fefefe;
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
	z-index: 1;
	font-family: 'Epilogue', sans-serif;
	font-size: 13px;
`;

const ContainerFooter = styled.div`
	margin: 40px;
`;
const DateFooter = styled.p``;
const TextFooter = styled.p`
	text-transform: uppercase;
`;
const ButtonTop = styled.div`
	margin: 40px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const ButtonText = styled.p`
	text-transform: uppercase;
	:hover {
		transition: 0.2s;
		opacity: 0.5;
	}
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
				<ButtonTop>
					<ButtonText>Back to top</ButtonText>

					<NorthOutlinedIcon sx={{ height: '15px', marginLeft: '5px' }} />
				</ButtonTop>
			</Footer>
		</Container>
	);
};

export default Contact;
