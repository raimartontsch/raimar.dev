import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	position: fixed;
	justify-content: flex-start;

	right: 0px;
	top: 15vh;
	height: 75vh;
	width: 15vw;
	min-width: 150px;

	background: rgba(255, 255, 255, 0.2);
	border-top-left-radius: 16px;
	border-bottom-left-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3px);
	border: 1px solid rgba(255, 255, 255, 0.3);

	@media (max-width: 720px) {
		width: 35vw;
	}
`;
