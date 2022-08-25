import React, { useState } from 'react';
import styled from 'styled-components';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const BubbleContainer = styled.div`
	display: flex;
	align-items: center;
	height: 30px;
	background-color: #fdfefa;
	cursor: pointer;
	transition: 0.5s ease-in-out;
	z-index: 99;
`;

const Bubble = styled.div`
	height: 30px;
	width: 30px;
	border-radius: 15px;
	background-color: #242423;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BubbleMessage = styled.p`
	overflow: hidden;
	font-size: 13px;
`;

const BubbleSlide = ({ type }) => {
	const [hover, setHover] = useState(false);

	let message;
	let icon;
	let width;

	if (type === 'email') {
		message = 'kevin.kotcherga@gmail.com';
		icon = (
			<EmailOutlinedIcon
				sx={{
					color: '#e9edc9',
					height: hover ? 8 : 13,
					width: hover ? 8 : 13,
					transition: '0.3s ease-in-out',
				}}
			/>
		);
		width = '180px';
	} else if (type === 'linkedin') {
		message = 'in/kevinkotcherga';
		icon = 'in';
		width = '125px';
	} else {
		message = '@kevinkotcherga';
		icon = 'gh';
		width = '125px';
	}

	return (
		<BubbleContainer
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				width: hover ? width : '30px',
				borderRadius: hover ? '12.5px' : '25px',
			}}
		>
			<Bubble
				style={{
					height: hover ? 17 : 30,
					width: hover ? 17 : 30,
					borderRadius: hover ? '15px' : '7,5px',
					transition: '0.3s ease-in-out',
					marginLeft: hover ? '5px' : 0,
					color: '#e9edc9',
					textTransform: 'uppercase',
					fontSize: hover ? 8 : 12,
				}}
			>
				{icon}
			</Bubble>
			<BubbleMessage
				style={{
					width: hover ? '100%' : 0,
					opacity: hover ? 1 : 0,
					marginLeft: hover ? '5px' : 0,
					transition: hover ? 'opacity 1.6s ease-in-out' : '',
					color: '#000',
				}}
			>
				{message}
			</BubbleMessage>
		</BubbleContainer>
	);
};

export default BubbleSlide;
