import banner from "./page_components/banner";
import about from "./page_components/about";
import featured_projects from "./page_components/featured_projects";
import contactForm from "./page_components/contactForm";
import footer from "./page_components/footer";
import timeline from "./page_components/timeline";
import Script from 'next/script'

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
      <Script src="js/jquery.min.js"></Script>
      <Script src="js/jquery.poptrox.min.js"></Script>
      <Script src="js/browser.min.js"></Script>
      <Script src="js/breakpoints.min.js"></Script>
      <Script src="js/util.js"></Script>
      <Script src="js/main.js"></Script>
    </div>
  );
}
