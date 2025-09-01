import { getProjects } from "@/sanity-utils";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";
const projects = await getProjects();
const featured_projects_list = projects.filter(item => item.featured)


export default function featured_projects() {
    return(
    <section className="wrapper style1 special" id="featured">
      <div className="inner">
        <header>
          <h2>Featured Projects</h2>
          <p>Some Things I&apos;ve Built</p>
        </header>
        {featured_projects_list.map((item) => (
          <SpotlightCard key={item._id} featureProject={item} />
        ))}
        {/* {addLinkAttribute()} */}
        <footer>
          <ul className="actions special">
            <li>
              <Link href="/projects" className="button">
                View All Projects
              </Link>
            </li>
          </ul>
        </footer>
      </div>
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
