import styled from 'styled-components';

export const TechList = styled.ul`
	list-style: none;
	display: grid;
	grid-column-gap: 1em;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);
	background-color: transparent;
	height: 100%;
	width: 100%;
	padding-left: 1em;
	padding-bottom: 1em;
`;
