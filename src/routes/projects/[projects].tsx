import { For } from 'solid-js';
import { A, useParams } from 'solid-start';

export default function Projects(props: any) {
	const params = useParams();
	const decodedProjects = JSON.parse(decodeURIComponent(params.projects));
	return (
		<div>
			<h1>Projects</h1>
			<For each={decodedProjects}>
				{(project, i) => (
					<div class="card sunken">
						<h3 class="headline">{project.title}</h3>
						<p>{project.description}</p>
						<A href={project.link}>View Project</A>
						<div class="badgeContainer">
							<For each={project.badges}>{(badge, i) => <p class="outline-badge">{badge}</p>}</For>
						</div>
					</div>
				)}
			</For>
		</div>
	);
}
