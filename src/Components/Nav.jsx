import useStore from './Store';
import TheSVG from './SVGs';
import { NavContainer } from './UI/Nav.Container.styled';
import { NavBar } from './UI/NavBar.styled';
import { NavButton } from './UI/NavButton.styled';
import { NavH2 } from './UI/NavH2.styled';

export default function Nav() {
	const setNavBar = useStore(state => state.setNavBar);
	const showNavBar = useStore(state => state.showNavBar);
	const hideNavBar = useStore(state => state.hideNavBar);

	const handleNavBar = () => {
		if (setNavBar) {
			showNavBar();
		} else {
			hideNavBar();
		}
	};

	return (
		<div>
			{setNavBar ? (
				<NavButton onClick={handleNavBar}>
					<TheSVG
						variant="NavMenu"
						color="silver"
						size="24px"
						aria-label="Navigation Menu"
					/>
				</NavButton>
			) : (
				<NavContainer>
					<button onClick={handleNavBar}>
						<TheSVG
							variant="CloseNavMenu"
							color="silver"
							size="24px"
							aria-label="Close navigation menu"
						/>
					</button>
					<NavBar>
						<a href="#Start">
							<NavH2>Start</NavH2>
						</a>
						<a href="#AboutMe">
							<NavH2>About me</NavH2>
						</a>

						<a href="#Projects">
							<NavH2>Projekte</NavH2>
						</a>
						<NavH2>CV</NavH2>
						<p>Impressum</p>
					</NavBar>
				</NavContainer>
			)}
		</div>
	);
}
