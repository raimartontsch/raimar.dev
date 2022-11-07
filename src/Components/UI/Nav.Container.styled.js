import styled, { keyframes } from 'styled-components';

const SlideInNav = keyframes`
	0% {
		right: 10px;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	position: fixed;
	background-color: blue;
	justify-content: space-around;

	animation: SlideInNav;

	right: 0px;
	top: 10vh;
	height: 75vh;
	width: 15vw;

	@media screen and (max-width: 412px) {
		width: 50vw;
`;
