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
`;

const Link = styled.span`
	cursor: pointer;
	margin-left: 25px;
	text-transform: uppercase;
`;

const BubbleContainer = styled.div`
	gap: 5px;
	margin-left: 25px;
	padding: 5px;
	border-radius: 15px;
	display: flex;
	align-items: center;
`;

const BubbleText = styled.div`
	text-transform: uppercase;
	display: flex;
`;

const Bubble = styled.span`
	background-color: #242423;
	color: #fefae0;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	align-items: center;
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
						style={{
							backgroundColor: hover ? '#fefefe' : 'transparent',
						}}
					>
						<Bubble
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
							style={{
								width: hover ? '15px' : '25px',
								height: hover ? '15px' : '25px',
							}}
						>
							<EmailOutlinedIcon
								sx={{
									color: '#fefae0',
									fontSize: hover ? 10 : 13,
									transition: 1,
								}}
							/>
						</Bubble>
						<BubbleText
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
							style={{
								height: hover ? 'auto' : 0,
								width: hover ? 'auto' : 0,
								opacity: hover ? 1 : 0,
								cursor: 'pointer',
								transition: 'opacity 1s ease-out',
								overflow: 'hidden',
							}}
						>
							kevin.kotcherga@gmail.com
						</BubbleText>
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
