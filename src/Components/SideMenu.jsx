import Contact from './Contact';
import { SideBar } from './UI/SideBar.styled';
import TheSVG from './SVGs';
import { IconBox } from './UI/IconBox.styled';

export default function SideMenu() {
	return (
		<SideBar>
			<IconBox>
				<a href="https://github.com/raimartontsch">
					<TheSVG variant="Github" color="white" size="2.5em" />
				</a>
			</IconBox>
			<IconBox>
				<a href="https://www.linkedin.com/in/raimartontsch/">
					<TheSVG variant="LinkedIn" color="white" size="2.5em" />
				</a>
			</IconBox>
			<IconBox>
				<a href="https://www.xing.com/profile/Raimar_Tontsch/cv">
					<TheSVG variant="Xing" color="white" size="2.5em" />
				</a>
			</IconBox>
			<IconBox>
				<a href="mailto:raimar.tontsch@gmail.com">
					<TheSVG variant="Mail" color="white" size="2.5em" />
				</a>
			</IconBox>
			<IconBox>
				<a href="tel:+4915678182651">
					<TheSVG variant="Phone" color="white" size="2.5em" />
				</a>
			</IconBox>
			<p>Impressum</p>
		</SideBar>
	);
}
