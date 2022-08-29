import AboutMe from "./AboutMe";
import CV from "./CV";
import Projects from "./Projects";
import Social from "./Social";
import useStore from './Store';
import { NavContainer } from "./UI/NavContainer.styled";
import { NavH2 } from "./UI/NavH2.styled";

export default function Nav() {
	
	const setAboutMe = useStore(state => state.setAboutMe);
	const showAboutMe = useStore(state => state.showAboutMe);
	const hideAboutMe= useStore(state => state.hideAboutMe);
	
	const setCV = useStore(state => state.setCV);
	const showCV = useStore(state => state.showCV);
	const hideCV= useStore(state => state.hideCV);
	
	const setProjects = useStore(state => state.setProjects);
	const showProjects = useStore(state => state.showProjects);
	const hideProjects= useStore(state => state.hideProjects);
	
	const setSocial = useStore(state => state.setSocial);
	const showSocial = useStore(state => state.showSocial);
	const hideSocial= useStore(state => state.hideSocial);


	const handleAboutMe = () => {
		if (!setAboutMe) {showAboutMe()} else {hideAboutMe()}}

	const handleCV = () => {
			if (!setCV) {showCV()} else {hideCV()}}
	
			const handleProjects = () => {
				if (!setProjects) {showProjects()} else {hideProjects()}}
		
				const handleSocial = () => {
					if (!setSocial) {showSocial()} else {hideSocial()}}
	return (
		
			<NavContainer>

			<NavH2 onClick={handleAboutMe}>About me</NavH2>
			{setAboutMe ? null : <AboutMe/>}

			<NavH2 onClick={handleCV}>CV</NavH2>
			{setCV ? null : <CV/>}			
			
			<NavH2 onClick={handleProjects}>Projekte</NavH2>
			{setProjects ? null : <Projects/>}

			<NavH2 onClick={handleSocial}>Social</NavH2>
			{setSocial? null : <Social/>}
			</NavContainer>

	);
}
