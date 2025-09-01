import banner from "./page_components/banner";
import about from "./page_components/about";
import featured_projects from "./page_components/featured_projects";
import footer from "./page_components/footer";
import timeline from "./page_components/timeline";
import Menu from "./page_components/menu";

import { getLastUpdatedDate } from "@/sanity-utils";
const ISO_lastUpdatedAt = await getLastUpdatedDate();
const lastUpdatedAt_date = new Date(ISO_lastUpdatedAt._updatedAt);
const lastUpdatedDateString = lastUpdatedAt_date.toISOString().substring(0, 10);

export const dynamic = "force-dynamic";
export const revalidate = 10;

export default async function Home() {
  return (
    <div>
      {/**************************************************
       * Insert page components
       ***************************************************/}

      {/* Side banner */}
      <Menu></Menu>
      {banner()}
      {/* {menu()} */}

      {about()}
      {timeline()}
      {featured_projects()}
      {/* {contactForm()} */}

      {/* Footer section */}
      {footer()}

      <section id="tagline" className="wrapper split style2">
        <div className="copyright inner">
          <p id="message">
            &copy; Miles Osborne | Last Updated: {lastUpdatedDateString}
            <br></br>Design:{" "}
            <a href="https://html5up.net/strata" target="_blank">
              Strata - HTML5 UP
            </a>{" "}
          </p>
          <p id="message"></p>
        </div>
      </section>
    </div>
  );
}
