import AboutMe from './AboutMe';
import CV from './CV';
import Projects from './Projects';
import Social from './Social';
import useStore from './Store';
import { GlassContainer } from './UI/GlassContainer.styled';
import { NavContainerOne } from './UI/NavContainerOne.styled';
import { NavContainerTwo } from './UI/NavContainerTwo.styled';
import { NavH2 } from './UI/NavH2.styled';
import { NavWrapper } from './UI/NavWrapper.styled';
import { TextArea } from './UI/TextArea.styled';

export default function Nav() {
	const setAboutMe = useStore(state => state.setAboutMe);
	const showAboutMe = useStore(state => state.showAboutMe);
	const hideAboutMe = useStore(state => state.hideAboutMe);

	const setCV = useStore(state => state.setCV);
	const showCV = useStore(state => state.showCV);
	const hideCV = useStore(state => state.hideCV);

	const setProjects = useStore(state => state.setProjects);
	const showProjects = useStore(state => state.showProjects);
	const hideProjects = useStore(state => state.hideProjects);

	const setSocial = useStore(state => state.setSocial);
	const showSocial = useStore(state => state.showSocial);
	const hideSocial = useStore(state => state.hideSocial);

	const setText = useStore(state => state.setText);
	const showText = useStore(state => state.showText);
	const hideText = useStore(state => state.hideText);

	const handleAboutMe = () => {
		if (!setAboutMe) {
			showAboutMe();
		} else {
			hideAboutMe();
		}
	};

	const handleCV = () => {
		if (!setCV) {
			showCV();
		} else {
			hideCV();
		}
	};

	const handleProjects = () => {
		if (!setProjects) {
			showProjects();
		} else {
			hideProjects();
		}
	};

	const handleSocial = () => {
		if (!setSocial) {
			showSocial();
		} else {
			hideSocial();
		}
	};
	return (
		<div>
			<NavWrapper>
				<NavContainerOne>
					<NavH2 onClick={handleAboutMe}>{setAboutMe ? 'About Me' : 'Close'}</NavH2>

					<NavH2 onClick={handleCV}>{setCV ? 'CV' : 'Close'}</NavH2>
				</NavContainerOne>

				<NavContainerTwo>
					<NavH2 onClick={handleProjects}>{setProjects ? ' Projekte' : 'Close'}</NavH2>

					<NavH2 onClick={handleSocial}>{setSocial ? 'Social' : 'Close'}</NavH2>
				</NavContainerTwo>
			</NavWrapper>
			<GlassContainer>
				<TextArea>
					{setAboutMe ? null : <AboutMe />}
					{setCV ? null : <CV />}
					{setProjects ? null : <Projects />}
					{setSocial ? null : <Social />}
				</TextArea>
			</GlassContainer>
		</div>
	);
}
