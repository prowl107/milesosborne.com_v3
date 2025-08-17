import { getLastUpdatedDate } from "@/sanity-utils";

const ISO_lastUpdatedAt = await getLastUpdatedDate();
const lastUpdatedAt_date = new Date(ISO_lastUpdatedAt._updatedAt);
const lastUpdatedDateString = lastUpdatedAt_date.toISOString().substring(0, 10);

export default function footer() {
  return (
    <div>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/milesosborne"
                className="icon brands fa-linkedin"
                target="_blank"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/prowl107"
                className="icon brands fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto: milesosborne182@gmail.com"
                className="icon solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Miles Osborne - {lastUpdatedDateString} </li>
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
