import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';
import BubbleSlide from '../components/BubbleSlide';
import { useState } from 'react';

const MainContainer = styled.div`
	height: 100vh;
	background-color: #fefae0;
	position: relative;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 13px;
	font-family: 'Belleza', sans-serif;
	position: fixed;
	width: 100%;
	z-index: 99;
`;

const ProfilInformation = styled.div`
	margin: 40px;
	line-height: 12px;
	color: #0b0b0b;
`;

const Name = styled.p`
	margin-bottom: 8px;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 500;
	:after {
		content: 'Kevin Kotcherga';
	}
	:hover:after {
		content: 'Développeur Web';
	}
`;

const City = styled.p`
	color: #7f7874;
`;

const Navbar = styled.div`
	margin: 40px;
	display: flex;
	align-items: center;
	gap: 25px;
	color: #0b0b0b;
`;

const Link = styled.span`
	cursor: pointer;
	text-transform: uppercase;
	display: inline-block;
	position: relative;
	cursor: pointer;
	transition: 0.3s ease-out;
	::before {
		content: '';
		position: absolute;
		left: 0;
		top: 18px;
		width: 0;
		height: 1px;
		background-color: #0b0b0b;
		transition: width 0.3s ease-out;
	}
	:hover::before {
		width: 100%;
	}
`;

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const Date = styled.p`
	font-family: 'Belleza';
	font-size: 18px;
	color: #0b0b0b;
	font-style: italic;
	margin-bottom: 30px;
	color: #7f7874;
`;

const TitleName = styled.h1`
	font-weight: normal;
	font-family: 'Italiana', serif;
	font-size: 12vw;
	text-transform: uppercase;
	color: #0b0b0b;
`;

const Description = styled.p`
	font-size: 13px;
	font-family: 'Belleza', sans-serif;
	line-height: 30px;
	text-transform: uppercase;
	color: #0b0b0b;
`;

const SurroundedBlock = styled.span`
	border: solid 1px #1b1f0a;
	border-radius: 30px;
	padding: 2px 10px;
`;

const Home = () => {
	const [hoverProjects, setHoverProjects] = useState(false);
	const [hoverProfil, setHoverProfil] = useState(false);
	const [hoverContact, setHoverContact] = useState(false);

	return (
		<MainContainer>
			<Header>
				<ProfilInformation>
					<Name />
					<City>Paris, France</City>
				</ProfilInformation>
				<Navbar>
					<Link
						onMouseEnter={() => setHoverProjects(true)}
						onMouseLeave={() => setHoverProjects(false)}
						style={{ opacity: hoverProfil || hoverContact ? 0.24 : 1 }}
					>
						Projets
					</Link>
					<Link
						onMouseEnter={() => setHoverProfil(true)}
						onMouseLeave={() => setHoverProfil(false)}
						style={{ opacity: hoverProjects || hoverContact ? 0.24 : 1 }}
					>
						Profil
					</Link>
					<Link
						onMouseEnter={() => setHoverContact(true)}
						onMouseLeave={() => setHoverContact(false)}
						style={{ opacity: hoverProjects || hoverProfil ? 0.24 : 1 }}
					>
						Contact
					</Link>
					<BubbleSlide type="email" />
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
