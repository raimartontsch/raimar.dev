import styled from 'styled-components';

export const GlassContainer = styled.div`
	display: flex;
	align-items: center;
	align-self: center;
	justify-content: center;
	//border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 16px;
	overflow: hidden;

	content: '';
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	//background: inset 0 0 200px rgba(255, 255, 255, 0.11);
	//backdrop-filter: blur(5px);
`;
