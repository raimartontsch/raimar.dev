import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IconBox = styled(motion.div)`
	display: flex;
	height: 5em;
	width: 5em;
	justify-content: center;
	background-size: cover;
	align-items: center;
	border-radius: 50%;

	border: solid 2px;
	background-color: purple;
`;
