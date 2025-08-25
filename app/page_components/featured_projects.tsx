import { getProjects } from "@/sanity-utils";
import SpotlightCard from "./SpotlightCard";
const projects = await getProjects();
const featured_projects_list = projects.filter(item => item.featured)


export default function featured_projects() {
    return(
// Two 
					<section id="featured">
						<h2>Recent Work</h2>
						<div className="row">
							{featured_projects_list.map((item) => (
							<article className="col-6 col-12-xsmall work-item" key={item._id}>
								  <SpotlightCard featureProject={item} />
								{/* {addLinkAttribute()} */}
							</article>
							))}
						</div>
						<ul className="actions">
							<li><a href="/projects" className="button">Full Portfolio</a></li>
						</ul>
					</section>
    )
}

// function addLinkAttribute() {
//   if (typeof window !== "undefined") {
//     $(document).ready(function () {
//       const textBlock = document.getElementsByClassName("project-description");
//       for (let i = 0; i < textBlock.length; i++) {
//         let text = textBlock[i].getElementsByTagName("a");
//         for (let j = 0; j < text.length; j++) {
//           if (!text[j].hasAttribute("target")) {
//             text[j].setAttribute("target", "_blank");
//           }
//           if (!text[j].hasAttribute("rel")) {
//             text[j].setAttribute("rel", "noreferrer");
//           }
//         }
//       }
//     });
//   }
// }
