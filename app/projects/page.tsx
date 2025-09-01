import { getProjects } from "@/sanity-utils"
import ProjectCard from "../page_components/ProjectCard";
import Menu from "../page_components/menu";

export default async function Home() {
const projects = await getProjects();

  return <div>
    <Menu></Menu>
    <div id="wrapper" style={{ backgroundColor: "#1b1c1c", display: "flex" }}>
      <section id="main" className="wrapper style1">
        <div className="projects-list">
          <header className="major">
            <h1>Projects Archive</h1>
          </header>
          <div id="projectContainer">
            {projects.map((item) => (
              <ProjectCard key={item._id} project={item} />
            ))}
            {/* {addLinkAttribute()} */}
          </div>
        </div>
      </section>
    </div>
  </div>
}

// function addLinkAttribute() {
//   if (typeof window !== "undefined") {
//     document.addEventListener("DOMContentLoaded", function(){
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
