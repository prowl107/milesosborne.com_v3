import { getLastUpdatedDate } from "@/sanity-utils";

const ISO_lastUpdatedAt = await getLastUpdatedDate();
const lastUpdatedAt_date = new Date(ISO_lastUpdatedAt._updatedAt);
const lastUpdatedDateString = lastUpdatedAt_date.toISOString().substring(0, 10);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function footer() {
  return (
    <div>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/milesosborne"
                className="icon brands"
                target="_blank"
              >       
                <FontAwesomeIcon icon={faLinkedin} style={{height: "2em"}} />
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/prowl107"
                className="icon brands"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} style={{height: "2em"}}/>
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto: milesosborne182@gmail.com"
                className="icon solid"
              >
                <FontAwesomeIcon icon={faEnvelope} style={{height: "2em"}}/>
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Miles Osborne </li>
            <li> Last Updated: {lastUpdatedDateString} </li>
            <li>
              Design:{" "}
              <a href="https://html5up.net/strata" target="_blank">
                Strata - HTML5 UP
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
