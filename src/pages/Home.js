import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
	height: 100vh;
	background-color: #fefae0;
	position: relative;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 40px 40px 0 40px;
	font-size: 26px;
	font-family: 'Belleza', sans-serif;
	color: #242423;
`;

const ProfilInformation = styled.div``;
const Name = styled.p``;
const City = styled.p`
	color: #545454;
`;

const Navbar = styled.div``;
const Link = styled.span`
	margin-left: 25px;
	cursor: pointer;
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
	font-size: 24px;
	color: #545454;
`;

const TitleName = styled.h1`
	font-weight: normal;
	font-family: 'Italiana', serif;
	font-size: 220px;
	text-transform: uppercase;
`;

const Description = styled.p`
	font-size: 30px;
	font-family: 'Belleza', sans-serif;
	line-height: 50px;
`;

const SurroundedBlock = styled.span`
	border: solid 1px;
	border-radius: 30px;
	padding: 2px 10px;
`;

const Home = () => {
	return (
		<MainContainer>
			<Header>
				<ProfilInformation>
					<Name>Kevin Kotcherga</Name>
					<City>Paris, France</City>
				</ProfilInformation>
				<Navbar>
					<Link>Projets</Link>
					<Link>Profil</Link>
					<Link>Contact</Link>
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
		</MainContainer>
	);
};

export default Home;
