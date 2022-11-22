import { useScroll, useTransform } from 'framer-motion';
import TheSVG from './SVGs';
import { IconBox } from './UI/IconBox.styled';
import { IconContainer } from './UI/IconContainer.styled';

export default function Contact() {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0.7, 1], [1000, 0]);

	return (
		<IconContainer style={{ x }}>
			<IconBox>
				<a /*</IconBox>href="mailto:raimar.tontsch@gmail.com"*/>
					<TheSVG variant="mail" color="white" />
				</a>
			</IconBox>

			<IconBox>
				<a /*</IconBox>href="tel:+4915678182651"*/>
					<TheSVG variant="phone" color="white" />
				</a>
			</IconBox>
		</IconContainer>
	);
}
