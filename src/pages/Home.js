import React, { useState } from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BubbleSlide from '../components/BubbleSlide';

const MainContainer = styled.div`
	height: 100vh;
	background-color: #e9edc9;
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
	color: #1b1f0a;
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
	}
`;

const City = styled.p``;

const Navbar = styled.div`
	margin: 40px;
	display: flex;
	align-items: center;
	gap: 25px;
	color: #1b1f0a;
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
	background-color: #fefefe;
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
	background-color: #1b1f0a;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BubbleMessage = styled.p`
	text-transform: uppercase;
	overflow: hidden;
	color: #1b1f0a;
`;

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const Date = styled.p`
	font-family: 'Viaoda Libre';
	font-size: 18px;
	text-transform: uppercase;
	margin-bottom: 50px;
	color: #0b0b0b;
`;

const TitleName = styled.h1`
	font-weight: normal;
	font-family: 'Zighead', serif;
	font-size: 220px;
	text-transform: uppercase;
	color: #1b1f0a;
`;

const Description = styled.p`
	font-size: 22px;
	font-family: 'Belleza', sans-serif;
	line-height: 50px;
	text-transform: uppercase;
	color: #1b1f0a;
`;

const SurroundedBlock = styled.span`
	border: solid 1px #1b1f0a;
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
									color: '#e9edc9',
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
					<BubbleSlide />
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
