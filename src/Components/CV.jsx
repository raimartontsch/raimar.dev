import { useAnimation, useAnimationControls, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { CvItem } from './UI/CvItem.styled';
import { CvList } from './UI/CvList.styled';
import { CvValue } from './UI/CvValue.styled';
import { CvWrapper } from './UI/CvWrapper.styled';
import { motion } from 'framer-motion';

export default function CV() {
	const cvItemOne = {
		hover: { scale: 1.1 },
	};
	const cvItemTwo = {
		hover: { scale: 1.1 },
	};
	const cvItemThree = {
		hover: { scale: 1.1 },
	};
	const cvItemFour = {
		hover: { scale: 1.1 },
	};
	const cvItemFive = {
		hover: { scale: 1.1 },
	};

	const cvValueOne = {
		hidden: { opacity: 0.3, scale: 1 },
	};

	const cvValueTwo = {
		hidden: { opacity: 0.3, scale: 1 },
	};

	const cvValueThree = {
		hidden: { opacity: 0.3, scale: 1 },
	};

	const cvValueFour = {
		hidden: { opacity: 0.3, scale: 1 },
	};

	const cvValueFive = {
		hidden: { opacity: 0.3, scale: 1 },
	};

	const cvControlsOne = useAnimationControls();
	const cvControlsTwo = useAnimationControls();
	const cvControlsThree = useAnimationControls();
	const cvControlsFour = useAnimationControls();
	const cvControlsFive = useAnimationControls();

	useEffect(() => {
		cvControlsOne.start({ opacity: 1 });
	}, [cvControlsOne]);
	useEffect(() => {
		cvControlsTwo.start({ opacity: 1 });
	}, [cvControlsTwo]);
	useEffect(() => {
		cvControlsThree.start({ opacity: 1 });
	}, [cvControlsThree]);
	useEffect(() => {
		cvControlsFour.start({ opacity: 1 });
	}, [cvControlsFour]);
	useEffect(() => {
		cvControlsFive.start({ opacity: 1 });
	}, [cvControlsFive]);

	return (
		<CvWrapper>
			<h3>Professional Experience</h3>
			<CvList>
				<motion.li>
					<CvItem
						variants={cvItemOne}
						whileHover="hover"
						initial="initial"
						onHoverStart={() => {
							cvControlsOne.start({ opacity: 1, scale: 1.05 });
						}}
						onHoverEnd={() => {
							cvControlsOne.start({ opacity: 0.3, scale: 1 });
						}}
					>
						03/2022 - 06/2022
					</CvItem>
					<CvValue variant={cvValueOne} animate={cvControlsOne} initial="hidden">
						Trainee Web Development at neue fische
					</CvValue>
				</motion.li>
				<CvItem
					variants={cvItemTwo}
					whileHover="hover"
					initial="initial"
					onHoverStart={() => {
						cvValueTwo.start({ opacity: 1, scale: 1.05 });
					}}
					onHoverEnd={() => {
						cvValueTwo.start({ opacity: 0.3, scale: 1 });
					}}
				>
					10/2015 - 02/2022
				</CvItem>
				<CvValue variant={cvValueTwo} animate={cvControlsTwo} initial="hidden">
					Free lancing communications consultant in marketing & culture Projects: PR &
					consulting, marketing, communication strategy & -concept, content production
					(text/ photo/video), social media communication
				</CvValue>
				<CvItem
					variants={cvItemThree}
					whileHover="hover"
					initial="initial"
					onHoverStart={() => {
						cvValueThree.start({ opacity: 1, scale: 1.05 });
					}}
					onHoverEnd={() => {
						cvValueThree.start({ opacity: 0.3, scale: 1 });
					}}
				>
					10/2013 – 09/2015
				</CvItem>
				<CvValue variant={cvValueThree} animate={cvControlsThree} initial="hidden">
					Junior communications consultant at FAKTOR 3 AG, Hamburg. Public relations- &
					(B2C & B2B) for digital businesses
				</CvValue>
				<CvItem
					variants={cvItemFour}
					whileHover="hover"
					initial="initial"
					onHoverStart={() => {
						cvControlsFour.start({ opacity: 1, scale: 1.05 });
					}}
					onHoverEnd={() => {
						cvControlsFour.start({ opacity: 0.3, scale: 1 });
					}}
				>
					04/2012 – 09/2013
				</CvItem>
				<CvValue variant={cvValueFour} animate={cvControlsFour} initial="hidden">
					PR trainee at FAKTOR 3 AG, Hamburg
				</CvValue>
				<h3>Education</h3>
				<CvItem
					variants={cvItemFive}
					whileHover="hover"
					initial="initial"
					onHoverStart={() => {
						cvControlsFive.start({ opacity: 1, scale: 1.05 });
					}}
					onHoverEnd={() => {
						cvControlsFive.start({ opacity: 0.3, scale: 1 });
					}}
				>
					2004/05 – 2011/12
				</CvItem>
				<CvValue variant={cvValueFive} animate={cvControlsFive} initial="hidden">
					Master at Bayrische Julius-Maximilians- Universität Würzburg. Major field of
					study: sociology. Minor fields of study: public law and political science.
					(Graduation grade:1.9)
				</CvValue>
			</CvList>
		</CvWrapper>
	);
}
