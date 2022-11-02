import styled from 'styled-components';

export const NavBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	position: fixed;
	flex-wrap: wrap;
	justify-items: center;
	align-content: center;

	background-color: grey;
	top: 25vh;
	width: 25vw;
	height: 50vh;
	right: 0px;
	@media screen and (max-width: 540px) {
		flex-direction: column;
	}
`;
