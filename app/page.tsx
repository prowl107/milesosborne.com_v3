import banner from "./page_components/banner";
import about from "./page_components/about";
import featured_projects from "./page_components/featured_projects";
import contact from "./page_components/contact";
import footer from "./page_components/footer";

function setup_page ()
{
  return (
    <div>
      {/**************************************************
      * Insert page components 
      ***************************************************/}

      {/* Side banner */}
      {banner()};

      <div id="main">
        {about()};
        {featured_projects()};
        {contact()};
      </div>

      {/* Footer section */}
      {footer()};

      {/* Scripts */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
    </div>
  )
}

export default function Home() {
  return (
    setup_page()
  );
}


