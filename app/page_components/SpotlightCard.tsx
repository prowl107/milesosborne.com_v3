import Link from "next/link";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity-utils";

const SpotlightCard = ({featureProject}) => {
  return (
    <section className="spotlight">
        <a href={featureProject.thumbnail} className="image fit thumb"> 
      <img
        src={urlFor(featureProject.thumbnail).url()}
        alt={featureProject.projectName || "Project thumbnail"}
      />
        </a>
      <div className="content">
        <header>
          <h3>{featureProject.projectName}</h3>
        </header>
          <PortableText value={featureProject.description} />
        <footer>
          <ul className="actions project-button">
            {listDetails({ featureProject })}
            {listSourceButton({ featureProject })}
          </ul>
        </footer>
      </div>
    </section>
  );
};

function listDetails({ featureProject }) {
  if (featureProject.documentationURL != null) {
    return (
      <li>
        <a href={featureProject.documentationURL} className="button" target="_blank">
          Details
        </a>
      </li>
    );
  } else if (featureProject.documentationRef != null) {
    return (
      <li>
        <Link href={`/docs/${featureProject.slug}`} className="button">
          
            Details
          
        </Link>
      </li>
    );
  }
}

function listSourceButton({ featureProject }) {
  if (featureProject.sourceURL != null) {
    return (
      <li>
        <a href={featureProject.sourceURL} className="button" target="_blank">
          View on GitHub
        </a>
      </li>
    );
  }
}

export default SpotlightCard;
