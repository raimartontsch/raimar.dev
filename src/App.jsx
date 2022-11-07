import SideMenu from './Components/SideMenu';
import Nav from './Components/Nav';
import { BodyContainer } from './Components/UI/BodyContainer.styled';
import GlobalStyle from './GlobalStyles';
import AboutMe from './Components/AboutMe';
import CV from './Components/CV';
import Projects from './Components/Projects';
import Social from './Components/Social';
import { SiteContainer } from './Components/UI/SiteContainer.styled';
import Welcome from './Components/Welcome';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<main>
				<SideMenu />
				<BodyContainer>
					<Nav />
					<SiteContainer>
						<h2 id="Start">Welcome </h2>{' '}
					</SiteContainer>
					<SiteContainer>
						<h2 id="AboutMe">About Me</h2>
						<AboutMe />
					</SiteContainer>
					<SiteContainer>
						<h2 id="Projects">Projects</h2>
						<Projects />
					</SiteContainer>
					<SiteContainer>
						<h2>CV</h2>
						<CV />
					</SiteContainer>
				</BodyContainer>
			</main>
		</div>
	);
}

export default App;
