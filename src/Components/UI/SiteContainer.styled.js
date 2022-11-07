import styled from 'styled-components';

export const SiteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 80vw;
	border-bottom: solid 2px;
	border-color: silver;

	@media screen and (max-width: 412px) {
		width: 60vw;
	}
`;
