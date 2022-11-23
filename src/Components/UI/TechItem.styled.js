import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TechItem = styled(motion.li)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1em;
	height: 50%;
	max-width: 70%;
	color: white;
	cursor: pointer;
	border: solid 2px;
	border-radius: 5px;
	background-color: darkgray;
`;
