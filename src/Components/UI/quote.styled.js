import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Quote = styled(motion.p)`
	display: flex;
	flex-wrap: wrap;
	font-size: 3rem;
	font-style: italic;
	overflow-wrap: anywhere;
	padding: 1rem;

	@media (max-width: 942px) {
		font-size: 2.5rem;
	}
	@media (max-width: 620px) {
		font-size: 2rem;
	}
	@media (max-width: 480px) {
		font-size: 1.6rem;
	}
`;
