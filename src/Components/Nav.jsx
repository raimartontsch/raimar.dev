import AboutMe from "./AboutMe";
import CV from "./CV";
import Projects from "./Projects";
import Social from "./Social";
import useStore from './Store';

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
		<div>

			<h2 onClick={handleAboutMe}>About me</h2>
			{setAboutMe ? null: <AboutMe/>}

			<h2 onClick={handleCV}>CV</h2>
			{setCV ? null: <CV/>}			
			
			<h2 onClick={handleProjects}>Projekte</h2>
			{setProjects ? null: <Projects/>}

			<h2 onClick={handleSocial}>Social</h2>
			{setSocial? null: <Social/>}

			
		</div>
	);
}
