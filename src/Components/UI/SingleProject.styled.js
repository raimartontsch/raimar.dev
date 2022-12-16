import styled from 'styled-components';

export const SingleProject = styled.li`
	width: 40%;

	height: 35%;
	border: solid 1px;
	border-color: blue;
	cursor: pointer;
	list-style: none;
	background-color: pink;

	@media screen and (max-width: 720px) {
		max-width: 25%;
	}
`;
