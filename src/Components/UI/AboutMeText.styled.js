import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    margin-top: 100%;
    height: 300%;
  }

  to {
    margin-top: 0%;
    height: 100%;
  }				
`;

export const AboutMeText = styled.p`
	animation: ${slideIn} 1s;
	//background-color: yellow;
	width: 80vw;
	color: Silver;
	overflow: scroll;
	border: solid silver;
	border-bottom: none;
	padding: 3em;
`;
