import React from 'react';
import styled from 'styled-components';

const BubbleContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	position: absolute;
	bottom: 40px;
	gap: 20px;
`;

const BubbleLink = styled.div`
	width: 35px;
	height: 35px;
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
			<BubbleLink>IN</BubbleLink>
			<BubbleLink>GH</BubbleLink>
			<BubbleLink>EM</BubbleLink>
		</BubbleContainer>
	);
};

export default BubblesLink;
