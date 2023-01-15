// @refresh reload
import { For } from 'solid-js';
import { A } from 'solid-start';

const ProjectViewer = (props: any) => {
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
		</div>
	);
};
export default ProjectViewer;
