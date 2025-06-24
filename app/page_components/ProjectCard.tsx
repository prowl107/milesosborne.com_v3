import Link from "next/link";
import { PortableText } from "next-sanity";

const ProjectCard = ({ project }) => {
  return (
    <section className="projectCard">
      <span className="image">
        <img src={project.thumbnail} />
      </span>
      <div className="content">
        <header>
          <h3>{project.projectName}</h3>
        </header>
        <PortableText
          className="project-description"
          value={project.description}
        />
        <footer>
          <ul className="actions">
            {listDetails({ project })}
            {listSourceButton({ project })}
          </ul>
        </footer>
      </div>
    </section>
  );
};

function listDetails({ project }) {
  if (project.documentationURL != null) {
    return (
      <li>
        <a href={project.documentationURL} className="button" target="_blank">
          Details
        </a>
      </li>
    );
  } else if (project.documentationRef != null) {
    return (
      <li>
        <Link href={`/docs/${project.slug}`} className="button">
          Details
        </Link>
      </li>
    );
  }
}

function listSourceButton({ project }) {
  if (project.sourceURL != null) {
    return (
      <li>
        <a href={project.sourceURL} className="button" target="_blank">
          View on GitHub
        </a>
      </li>
    );
  }
}

export default ProjectCard;
