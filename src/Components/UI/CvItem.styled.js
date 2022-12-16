import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CvItem = styled(motion.p)`
	margin: 1em;
	color: white;
	cursor: pointer;
	border: solid 1px;
	border-radius: 5px;
	background-color: darkgray;
	padding: 0.4em;
	width: 15%;
`;
