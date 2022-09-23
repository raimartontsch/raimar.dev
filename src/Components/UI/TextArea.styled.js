import styled from 'styled-components';

export const TextArea = styled.div`
	display: flex;

	@media (max-width: 820px) {
		flex-direction: column;
		height: 50vh;
		top: 10vh;
		padding: 1.5em;
	}
`;
