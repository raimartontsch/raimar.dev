import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
	font-size: 62.5%;
}
:root {
    color: light white;  
    color-scheme: light dark;
    background-color: #7d8e87;		
}

body {
	padding: 0;
	margin: 0;
	font-family: 'Hind', sans-serif;
	font-size: 1.6rem;
	background: light purple;

	}
	*{
		box-sizing: border-box
	}

	
`;

export default GlobalStyle;
