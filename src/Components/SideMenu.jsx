import Contact from './Contact';
import { SideBar } from './UI/SideBar.styled';

export default function SideMenu() {
	return (
		<SideBar>
			<Contact />
			<p>Impressum</p>
		</SideBar>
	);
}
