import { getProfile, getProjects, getLastUpdatedDate } from "@/sanity-utils";
import banner from "./page_components/banner";
import about from "./page_components/about";
import featured_projects from "./page_components/featured_projects";
import contactForm from "./page_components/contactForm";
import footer from "./page_components/footer";
import timeline from "./page_components/timeline";
import { time } from "console";

export default async function Home() {
  const projects = await getProjects();
  // const profile = await getProfile();
  const ISO_lastUpdatedAt = await getLastUpdatedDate();
  const lastUpdatedAt_date = new Date(ISO_lastUpdatedAt._updatedAt);
  const lastUpdatedDateString = lastUpdatedAt_date
    .toISOString()
    .substring(0, 10);

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
        {/* {contactForm()}; */}
      </div>

      {/* Footer section */}
      {footer()}

      {/* Scripts */}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.poptrox.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
}
