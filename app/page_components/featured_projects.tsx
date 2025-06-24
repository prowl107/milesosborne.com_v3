import { getProjects } from "@/sanity-utils"
import SpotlightCard from "./SpotlightCard";
const projects = await getProjects();
const featured_projects_list = projects.filter(item => item.featured)


export default function featured_projects() {
    return(
// Two 
					<section id="two">
						<h2>Recent Work</h2>
						<div className="row">
							{featured_projects_list.map((item) => (
							<article className="col-6 col-12-xsmall work-item">
								  <SpotlightCard key={item._id} featureProject={item} />
								{addLinkAttribute()}
							</article>
							))}
							{/* <article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/01.jpg" className="image fit thumb"><img src="milesosborne.com_v3/app/images/thumbs/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/02.jpg" className="image fit thumb"><img src="app/images/thumbs/02.jpg" alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/03.jpg" className="image fit thumb"><img src="app/images/thumbs/03.jpg" alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/04.jpg" className="image fit thumb"><img src="app/images/thumbs/04.jpg" alt="" /></a>
								<h3>Quam neque phasellus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/05.jpg" className="image fit thumb"><img src="app/images/thumbs/05.jpg" alt="" /></a>
								<h3>Nunc enim commodo aliquet</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/06.jpg" className="image fit thumb"><img src="app/images/thumbs/06.jpg" alt="" /></a>
								<h3>Risus ornare lacinia</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article> */}
						</div>
						<ul className="actions">
							<li><a href="/projects" className="button">Full Portfolio</a></li>
						</ul>
					</section>
    )
}

function addLinkAttribute() {
  if (typeof window !== "undefined") {
    $(document).ready(function () {
      const textBlock = document.getElementsByClassName("project-description");
      for (let i = 0; i < textBlock.length; i++) {
        var text = textBlock[i].getElementsByTagName("a");
        for (let j = 0; j < text.length; j++) {
          if (!text[j].hasAttribute("target")) {
            text[j].setAttribute("target", "_blank");
          }
          if (!text[j].hasAttribute("rel")) {
            text[j].setAttribute("rel", "noreferrer");
          }
        }
      }
    });
  }
}
