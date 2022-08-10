import React from 'react';
import styled from 'styled-components';
import BubbleSlide from './BubbleSlide';

const BubbleContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	position: absolute;
	bottom: 40px;
	gap: 20px;
`;

const BubbleLink = styled.div`
	width: 30px;
	height: 30px;
	font-size: 15px;
	background-color: #242423;
	color: #fefae0;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const BubblesLink = () => {
	return (
		<BubbleContainer>
			<BubbleSlide />
			<BubbleSlide />
			<BubbleSlide />
		</BubbleContainer>
	);
};

export default BubblesLink;
