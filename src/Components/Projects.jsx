import { ProjectsContainer } from './UI/ProjectsContainer.styled';
import { SingleProject } from './UI/SingleProject.styled';
import { ProjectList } from './UI/ProjectList.styled.js';

export default function Projects() {
	const openNewTab = url => {
		const newTab = window.open(url, '_blank', 'noopener,noreferrer');
		if (newTab) newTab.opener = null;
	};
	return (
		<ProjectsContainer>
			<ProjectList>
				<a onClick={() => openNewTab('https://c-u.vercel.app/')}>
					<SingleProject>BILD1</SingleProject>
				</a>
			</ProjectList>
		</ProjectsContainer>
	);
}
