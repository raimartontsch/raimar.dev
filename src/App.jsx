import Nav from './Components/Nav';
import { BodyContainer } from './Components/UI/BodyContainer.styled';
import GlobalStyle from './GlobalStyles';
import AboutMe from './Components/AboutMe';
import CV from './Components/CV';
import Projects from './Components/Projects';
import Social from './Components/Social';
import { SiteContainer } from './Components/UI/SiteContainer.styled';
import Welcome from './Components/Welcome';
import Contact from './Components/Contact';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<main>
				<BodyContainer>
					<Nav />
					<SiteContainer>
						<Welcome id="Start" />
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
					<SiteContainer>
						<h2 id="Social">Social Media</h2>
						<Social />
						<h2>Contact</h2>
						<Contact />
					</SiteContainer>
				</BodyContainer>
				<footer>Impressum</footer>
			</main>
		</div>
	);
}

export default App;
