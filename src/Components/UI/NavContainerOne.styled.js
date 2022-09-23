import styled from 'styled-components';

export const NavContainerOne = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	background-color: purple;
	width: 80vw;
	align-items: center;

	@media (max-width: 820px) {
		flex-direction: column;
		justify-content: space-evenly;
		padding: 1.5em;
	}
`;
