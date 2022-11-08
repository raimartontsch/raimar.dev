import styled from 'styled-components';

export const SingleProject = styled.li`
	width: 40vw;

	height: 15vh;
	border: solid 1px;
	border-color: pink;
	cursor: pointer;
	list-style: none;

	@media screen and (min-width: 720px) {
		max-width: 30vw;
	}
`;
