import TheSVG from './SVGs';
import { IconBox } from './UI/IconBox.styled';
import { IconContainer } from './UI/IconContainer.styled';

export default function Contact() {
	return (
		<IconContainer>
			<a href="mailto:raimar.tontsch@gmail.com">
				<TheSVG variant="Mail" color="white" size="2.5em" />
			</a>

			<IconBox>
				<a href="tel:+4915678182651">
					<TheSVG variant="Phone" color="white" size="2.5em" />
				</a>
			</IconBox>
		</IconContainer>
	);
}
