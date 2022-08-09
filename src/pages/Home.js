import React, { useState } from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const MainContainer = styled.div`
	height: 100vh;
	background-color: #000;
	position: relative;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	font-family: 'Belleza', sans-serif;
	position: fixed;
	width: 100%;
	z-index: 99;
`;

const ProfilInformation = styled.div`
	margin: 40px;
	line-height: 12px;
	background-image: linear-gradient(-40deg, #ff7e00, #ffd300);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Name = styled.p`
	margin-bottom: 8px;
	text-transform: uppercase;
	cursor: pointer;
	:after {
		content: 'Kevin Kotcherga';
	}
	:hover:after {
		content: 'Développeur Web';
		font-family: 'Zighead', serif;
	}
`;

const City = styled.p``;

const Navbar = styled.div`
	margin: 40px;
	display: flex;
	align-items: center;
	gap: 25px;
	background-image: linear-gradient(0deg, #ff7e00 10%, #ffd300 90%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Link = styled.span`
	cursor: pointer;
	text-transform: uppercase;
`;

const BubbleContainer = styled.div`
	display: flex;
	align-items: center;
	height: 25px;
	width: 25px;
	background-color: #ffae5d;
	border-radius: 12.5px;
	cursor: pointer;
	transition: 0.5s ease-in-out;
	:hover {
		width: 250px;
		border-radius: 25px;
	}
`;

const Bubble = styled.div`
	height: 25px;
	width: 25px;
	border-radius: 12.5px;
	background-color: #ff7e00;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BubbleMessage = styled.p`
	text-transform: uppercase;
	overflow: hidden;
	color: black;
`;

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	color: #242423;
`;

const Date = styled.p`
	font-family: 'Viaoda Libre';
	font-size: 18px;
	text-transform: uppercase;
	margin-bottom: 50px;
	color: #ffd300;
`;

const TitleName = styled.h1`
	font-weight: normal;
	font-family: 'Zighead', serif;
	font-size: 220px;
	text-transform: uppercase;
	background: -webkit-linear-gradient(#ffd300, #ff7e00);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Description = styled.p`
	font-size: 22px;
	font-family: 'Belleza', sans-serif;
	line-height: 50px;
	text-transform: uppercase;
	color: #ff7e00;
	background-image: linear-gradient(-40deg, #ff7e00, #ffd300);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const SurroundedBlock = styled.span`
	border: solid 1px;
	border-radius: 30px;
	padding: 2px 10px;
`;

const Home = () => {
	const [hover, setHover] = useState(false);

	return (
		<MainContainer>
			<Header>
				<ProfilInformation>
					<Name />
					<City>Paris, France</City>
				</ProfilInformation>
				<Navbar>
					<Link>Projets</Link>
					<Link>Profil</Link>
					<Link>Contact</Link>
					<BubbleContainer
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<Bubble
							style={{
								height: hover ? 17 : 25,
								width: hover ? 17 : 25,
								borderRadius: hover ? '12,5px' : '7,5px',
								transition: '0.3s ease-in-out',
								marginLeft: hover ? '5px' : 0,
							}}
						>
							<EmailOutlinedIcon
								sx={{
									color: 'black',
									height: hover ? 10 : 15,
									width: hover ? 10 : 15,
									transition: '0.3s ease-in-out',
								}}
							/>
						</Bubble>
						<BubbleMessage
							style={{
								width: hover ? '100%' : 0,
								opacity: hover ? 1 : 0,
								marginLeft: hover ? '5px' : 0,
								transition: hover ? 'opacity 1.4s ease-in-out' : '',
							}}
						>
							kevin.kotcherga@gmail.com
						</BubbleMessage>
					</BubbleContainer>
				</Navbar>
			</Header>
			<Container>
				<Date>(Folio 2022 - Since 2020)</Date>
				<TitleName>
					Kevin
					<br />
					Kotcherga
				</TitleName>
				<Description>
					Développeur Web <SurroundedBlock>Frontend</SurroundedBlock> & Frontend{' '}
					<SurroundedBlock>Applicatif</SurroundedBlock> <br />
					Spécialisé React, Javascript & Typescript
				</Description>
			</Container>
			<BubblesLink />
		</MainContainer>
	);
};

export default Home;
