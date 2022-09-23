import styled from 'styled-components';

export const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	background-color: yellow;
	width: 100vw;
	align-items: center;

	@media (max-width: 820px) {
		flex-direction: column;
	}
`;
