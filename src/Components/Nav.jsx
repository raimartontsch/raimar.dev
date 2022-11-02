import { NavBar } from './UI/NavBar.styled';
import { NavH2 } from './UI/NavH2.styled';

export default function Nav() {
	return (
		<div>
			<NavBar>
				<NavH2>About me</NavH2>

				<NavH2>CV</NavH2>

				<NavH2>Projekte</NavH2>

				<NavH2>Social</NavH2>
			</NavBar>
		</div>
	);
}
