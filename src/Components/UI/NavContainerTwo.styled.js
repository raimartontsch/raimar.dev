import styled from 'styled-components';

export const NavContainerTwo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	background-color: greenyellow;
	width: 80vw;
	align-items: center;

	@media (max-width: 820px) {
		flex-direction: column;
		justify-content: center;
		justify-content: space-evenly;
		padding: 1.5em;
	}
`;
