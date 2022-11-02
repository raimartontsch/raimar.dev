import styled from 'styled-components';

export const NavH2 = styled.h2`
	color: silver;
	font-size: 0.75em;
	border: 0.1em;
	border-style: solid;
	border-image: linear-gradient(45deg, turquoise, pink) 1;
	border-radius: 16px;
	align-items: center;
	min-width: 15vw;
	opacity: 100%;

	padding: 0.75em;

	@media screen and (max-width: 540px) {
		justify-content: center;
	}
`;
