import { getProjects } from "@/sanity-utils"
import ProjectCard from "../page_components/ProjectCard";
import banner from "../page_components/banner";
// const projects = await getProjects();

// export default function featured_projects() {
//     return(
// // Two 
// 					<section id="two">
// 						<h2>Recent Work</h2>
// 						<div className="row">
// 							{projects.map((item) => (
// 							<article className="col-6 col-12-xsmall work-item">
// 								  <ProjectCard key={item._id} project={item} />
// 								{addLinkAttribute()}
// 							</article>
// 							))}
// 							{/* <article className="col-6 col-12-xsmall work-item">
// 								<a href="images/fulls/01.jpg" className="image fit thumb"><img src="milesosborne.com_v3/app/images/thumbs/01.jpg" alt="" /></a>
// 								<h3>Magna sed consequat tempus</h3>
// 								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
// 							</article>
// 							<article className="col-6 col-12-xsmall work-item">
// 								<a href="images/fulls/02.jpg" className="image fit thumb"><img src="app/images/thumbs/02.jpg" alt="" /></a>
// 								<h3>Ultricies lacinia interdum</h3>
// 								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
// 							</article>
// 							<article className="col-6 col-12-xsmall work-item">
// 								<a href="images/fulls/03.jpg" className="image fit thumb"><img src="app/images/thumbs/03.jpg" alt="" /></a>
// 								<h3>Tortor metus commodo</h3>
// 								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
// 							</article>
// 							<article className="col-6 col-12-xsmall work-item">
// 								<a href="images/fulls/04.jpg" className="image fit thumb"><img src="app/images/thumbs/04.jpg" alt="" /></a>
// 								<h3>Quam neque phasellus</h3>
// 								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
// 							</article>
// 							<article className="col-6 col-12-xsmall work-item">
// 								<a href="images/fulls/05.jpg" className="image fit thumb"><img src="app/images/thumbs/05.jpg" alt="" /></a>
// 								<h3>Nunc enim commodo aliquet</h3>
// 								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
// 							</article>
// 							<article className="col-6 col-12-xsmall work-item">
// 								<a href="images/fulls/06.jpg" className="image fit thumb"><img src="app/images/thumbs/06.jpg" alt="" /></a>
// 								<h3>Risus ornare lacinia</h3>
// 								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
// 							</article> */}
// 						</div>
// 						<ul className="actions">
// 							<li><a href="/projects" className="button">Full Portfolio</a></li>
// 						</ul>
// 					</section>
//     )
// }

export default async function Home() {
const projects = await getProjects();
  // const dynamic = 'force-dynamic'

  return <div>
    {/* Side banner */}
    {banner()};
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
