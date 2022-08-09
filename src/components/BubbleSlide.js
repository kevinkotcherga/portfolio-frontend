import React, { useState } from 'react';
import styled from 'styled-components';

const BubbleContainer = styled.div`
	display: flex;
	align-items: center;
	height: 25px;
	width: 25px;
	background-color: white;
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
	background-color: #242423;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BubbleMessage = styled.p`
	text-transform: uppercase;
	overflow: hidden;
`;

const BubbleSlide = () => {
	const [hover, setHover] = useState(false);

	return (
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
			></Bubble>
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
	);
};

export default BubbleSlide;
