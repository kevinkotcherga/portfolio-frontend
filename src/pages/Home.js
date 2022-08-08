import React, { useState } from 'react';
import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const MainContainer = styled.div`
	height: 100vh;
	background-color: #fefae0;
	position: relative;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	font-family: 'Belleza', sans-serif;
	color: #242423;
	position: fixed;
	width: 100%;

	z-index: 99;
`;

const ProfilInformation = styled.div`
	margin: 40px;
	line-height: 12px;
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

const City = styled.p`
	color: #545454;
`;

const Navbar = styled.div`
	margin: 40px;
	display: flex;
	align-items: center;
	gap: 25px;
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
	background-color: white;
	border-radius: 12.5px;
	cursor: pointer;
	transition: 1s;
	:hover {
		width: 250px;
		border-radius: 25px;
	}
`;

const Bubble = styled.div`
	height: 25px;
	width: 25px;
	border-radius: 12.5px;
	background-color: #242423;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BubbleMessage = styled.p`
	text-transform: uppercase;
	overflow: hidden;
	margin-left: 5px;
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
	color: #545454;
`;

const TitleName = styled.h1`
	font-weight: normal;
	font-family: 'Italiana', serif;
	font-size: 220px;
	text-transform: uppercase;
`;

const Description = styled.p`
	font-size: 22px;
	font-family: 'Belleza', sans-serif;
	line-height: 50px;
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
								transition: '0.8s',
								marginLeft: hover ? '5px' : 0,
							}}
						>
							<EmailOutlinedIcon
								sx={{
									color: '#fefae0',
									height: hover ? 10 : 15,
									width: hover ? 10 : 15,
									transition: '0.8s',
								}}
							/>
						</Bubble>
						<BubbleMessage
							style={{
								display: hover ? 'block' : 'none',
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
