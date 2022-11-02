import styled from 'styled-components';

export const TextContainer = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-items: center;
	align-content: center;
	background-color: darkgrey;
	width: 70vw;

	@media screen and (max-width: 540px) {
		flex-direction: column;
	}
`;
