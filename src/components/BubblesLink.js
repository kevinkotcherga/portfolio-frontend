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

const BubblesLink = () => {
	return (
		<BubbleContainer>
			<BubbleSlide type="linkedin" />
			<BubbleSlide type="github" />
		</BubbleContainer>
	);
};

export default BubblesLink;
