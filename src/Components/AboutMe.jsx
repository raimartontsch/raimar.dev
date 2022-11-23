import { useScroll, useTransform } from 'framer-motion';
import { AboutMeTextContainer } from './UI/AboutMeTextContainer.styled';
import { Quote } from './UI/quote.styled';
import { TechItem } from './UI/TechItem.styled';
import { TechList } from './UI/TechList.styled';
import { TextContainer } from './UI/TextContainer.styled';
import { Wrapper } from './UI/Wrapper.styled';
import { TechListContainer } from './UI/TechListContainer.styled';

export default function AboutMe() {
	const { scrollYProgress } = useScroll();
	const scaleLeft = useTransform(scrollYProgress, [0.07, 0.23], [0, 1]);
	const xLeft = useTransform(scrollYProgress, [0.3, 0.4], [0, -1000]);
	const opacityLeft = useTransform(scrollYProgress, [0.07, 0.23], [0, 1]);
	const scaleRight = useTransform(scrollYProgress, [0.17, 0.23], [0, 1]);
	const xRight = useTransform(scrollYProgress, [0.375, 0.47], [0, 1200]);
	const opacityRight = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

	const TechLi = {
		hover: {
			scale: 1.2,
			textShadow: '0px 0px 8px rgb(255, 255, 255)',
			boxshadow: '0px 0px 8px rgb(255, 255, 255)',
		},
	};

	return (
		<Wrapper>
			<AboutMeTextContainer style={{ scale: scaleLeft, opacity: opacityLeft, x: xLeft }}>
				<Quote style={{ scale: scaleLeft, opacity: opacityLeft }}>
					"I am a front-end web developer
				</Quote>
				<Quote style={{ scale: scaleLeft, opacity: opacityLeft }}>
					and enjoy creating digital solutions for real life challenges.
				</Quote>
				<Quote style={{ scale: scaleLeft, opacity: opacityLeft }}>
					To me coding is the perfect synergy of analytical thinking and creativity.
				</Quote>
				<Quote style={{ scale: scaleLeft, opacity: opacityLeft }}>
					I am facing technical challenges with curiosity and a lot of team spirit."
				</Quote>
			</AboutMeTextContainer>

			<TextContainer
				transition={{ ease: 'easeInOut' }}
				style={{ opacity: opacityRight, x: xRight, scale: scaleRight }}
			>
				<h2>Tech Stack</h2>
				<TechListContainer>
					<TechList>
						<TechItem variants={TechLi} whileHover="hover">
							React
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							JS
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							HTML5
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							CSS
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							Node.js
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							Git & Github
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							UI/UX-Design
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							figma
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							Linting
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							ZShell
						</TechItem>
						<TechItem variants={TechLi} whileHover="hover">
							Framer Motion
						</TechItem>
					</TechList>
				</TechListContainer>
			</TextContainer>
		</Wrapper>
	);
}
