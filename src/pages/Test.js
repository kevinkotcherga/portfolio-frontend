import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background-color: gray;
	height: 100vh;
`;

const Bubble = styled.div`
	margin-left: 200px;
	height: 50px;
	width: 50px;
	background-color: white;
	border-radius: 25px;
	cursor: pointer;
	transition: 0.8s;
	:hover {
		transform: translateX(-200px);
		width: 200px;
		border-radius: 25px;
	}
`;

const BubbleBlack = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 25px;
	background-color: black;
`;

const ContainerWhite = styled.div`
	background-color: white;
`;

const Test = () => {
	return (
		<Container>
			<Bubble>
				<BubbleBlack />
			</Bubble>
		</Container>
	);
};

export default Test;
