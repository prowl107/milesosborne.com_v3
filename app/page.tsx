import { getProfile, getProjects, getLastUpdatedDate } from "@/sanity-utils";
import banner from "./page_components/banner";
import about from "./page_components/about";
import featured_projects from "./page_components/featured_projects";
import contactForm from "./page_components/contactForm";
import footer from "./page_components/footer";
import timeline from "./page_components/timeline";

export default async function Home() {

  return (
    <div>
      {/**************************************************
       * Insert page components
       ***************************************************/}

      {/* Side banner */}
      {banner()}

      <div id="main">
        {about()}
        {timeline()}
        {featured_projects()}
        {contactForm()}
      </div>

      {/* Footer section */}
      {footer()}

      {/* Scripts */}
      <script src="js/jquery.min.js"></script>
      <script src="js/jquery.poptrox.min.js"></script>
      <script src="js/browser.min.js"></script>
      <script src="js/breakpoints.min.js"></script>
      <script src="js/util.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
}
