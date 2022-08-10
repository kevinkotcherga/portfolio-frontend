import styled from 'styled-components';
import BubblesLink from '../components/BubblesLink';
import BubbleSlide from '../components/BubbleSlide';

const MainContainer = styled.div`
	height: 100vh;
	background-color: #e9edc9;
	position: relative;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 15px;
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

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const Date = styled.p`
	font-family: 'Viaoda Libre';
	font-size: 15px;
	color: #353e14;
	font-style: italic;
	margin-bottom: 30px;
`;

const TitleName = styled.h1`
	font-weight: normal;
	font-family: 'Zighead', serif;
	font-size: 12vw;
	text-transform: uppercase;
	color: #1b1f0a;
`;

const Description = styled.p`
	font-size: 15px;
	font-family: 'Belleza', sans-serif;
	line-height: 30px;
	text-transform: uppercase;
	color: #353e14;
`;

const SurroundedBlock = styled.span`
	border: solid 1px #1b1f0a;
	border-radius: 30px;
	padding: 2px 10px;
`;

const Home = () => {
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
