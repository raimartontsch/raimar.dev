import TheSVG from './SVGs';
import { IconBox } from './UI/IconBox.styled';
import { IconContainer } from './UI/IconContainer.styled';
import { useScroll, useTransform } from 'framer-motion';

export default function Social() {
	const openNewTab = url => {
		const newTab = window.open(url, '_blank', 'noopener,noreferrer');
		if (newTab) newTab.opener = null;
	};

	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0.7, 1], [-1000, 0]);

	return (
		<div>
			<IconContainer style={{ x }}>
				<IconBox>
					<a /*onClick={() => openNewTab('https://github.com/raimartontsch')}*/>
						<TheSVG variant="githubStroke" size="3em" />
					</a>
				</IconBox>
				<IconBox>
					<a /*onClick={() => openNewTab('https://www.linkedin.com/in/raimartontsch/')}*/>
						<TheSVG variant="linkedinStroke" color="white" size="3em" />
					</a>
				</IconBox>
				<IconBox>
					<a /*onClick={() => openNewTab('https://www.xing.com/profile/Raimar_Tontsch/cv')}*/
					>
						<TheSVG variant="xingStroke" color="white" size="3em" />
					</a>
				</IconBox>
			</IconContainer>
		</div>
	);
}
