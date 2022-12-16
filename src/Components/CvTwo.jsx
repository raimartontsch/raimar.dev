import { useAnimation, useAnimationControls, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { CvItem } from './UI/CvItem.styled';
import { CvList } from './UI/CvList.styled';
import { CvValue } from './UI/CvValue.styled';
import { CvWrapper } from './UI/CvWrapper.styled';
import { motion } from 'framer-motion';

export default function CvTwo() {
	const cvLi = {
		initial: { opacity: 1 },
		initialChildA: { opacity: 0.3 },
		initialChildB: { opacity: 0.7 },
	};

	const cvDate = {
		initialChildA: { opacity: 0.7 },
	};
	const cvValue = {
		initialChildB: { opacity: 0.3 },
	};

	const cvControls = useAnimationControls();

	useEffect(() => {
		cvControls.start({ opacity: 1 });
	}, [cvControls]);

	return (
		<CvWrapper>
			<h3>Professional Experience</h3>
			<CvList>
				<motion.li
					variants={cvLi}
					initial="initial"
					onHoverStart={() => {
						cvControls.start({ opacity: 1 });
					}}
					onHoverEnd={() => {
						cvControls.start({ opacity: 0.3 });
					}}
				>
					<CvItem variants={cvDate} initial="initialChildB" animate={cvControls}>
						03/2022 - 06/2022
					</CvItem>
					<CvValue variants={cvValue} initial="initialChildA" animate={cvControls}>
						Trainee Web Development at neue fische
					</CvValue>
				</motion.li>
			</CvList>
		</CvWrapper>
	);
}
