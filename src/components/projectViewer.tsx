// @refresh reload
import { createSignal, For, Show } from 'solid-js';
import { A } from 'solid-start';

const ProjectViewer = (props: any) => {
	const [moreProjects, setMoreProjects] = createSignal(false);
	if (props.projects.length === 0) return <p>No projects to show</p>; // If there are no projects, show this message
	if (props.projects.length > 2) {
		// If there are more than 3 projects, show the first 3
		props.projects = props.projects.slice(0, 2);
		setMoreProjects(true);
	}
	const encodedProjects = encodeURIComponent(JSON.stringify(props.projects));
	return (
		<div>
			<For each={props.projects}>
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
			<Show when={moreProjects()} fallback={''}>
				<a href={`/projects/${encodedProjects}`}>View more projects</a>
			</Show>
		</div>
	);
};
export default ProjectViewer;
