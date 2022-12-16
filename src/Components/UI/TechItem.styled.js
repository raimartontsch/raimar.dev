import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TechItem = styled(motion.li)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	height: 50%;
	max-width: 70%;
	color: white;
	cursor: pointer;
	border: solid 2px;
	border-radius: 5px;
	background-color: darkgray;
	padding: 0.5rem;

	@media (max-width: 942px) {
		font-size: 1rem;
		padding: 0.3rem;
		width: 60%;
	}
	@media (max-width: 500px) {
		font-size: 0.7rem;
		padding: 0.2rem;
	}
`;
