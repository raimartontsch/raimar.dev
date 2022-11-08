import TheSVG from './SVGs';
import { IconBox } from './UI/IconBox.styled';
import { IconContainer } from './UI/IconContainer.styled';

export default function Social() {
	const openNewTab = url => {
		const newTab = window.open(url, '_blank', 'noopener,noreferrer');
		if (newTab) newTab.opener = null;
	};
	return (
		<IconContainer>
			<IconBox>
				<a onClick={() => openNewTab('https://github.com/raimartontsch')}>
					<TheSVG variant="Github" color="white" size="2.5em" />
				</a>
			</IconBox>
			<IconBox>
				<a onClick={() => openNewTab('https://www.linkedin.com/in/raimartontsch/')}>
					<TheSVG variant="LinkedIn" color="white" size="2.5em" />
				</a>
			</IconBox>
			<IconBox>
				<a onClick={() => openNewTab('https://www.xing.com/profile/Raimar_Tontsch/cv')}>
					<TheSVG variant="Xing" color="white" size="2.5em" />
				</a>
			</IconBox>
		</IconContainer>
	);
}
