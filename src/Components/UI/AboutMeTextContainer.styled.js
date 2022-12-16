import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AboutMeTextContainer = styled(motion.div)`
	border: 1em;
	justify-items: space-evenly;
	flex-wrap: wrap;
	background-color: purple;
	width: 70vw;
	height: 35vh;

	@media (max-width: 600px) {
		height: 30vh;
	}
`;
