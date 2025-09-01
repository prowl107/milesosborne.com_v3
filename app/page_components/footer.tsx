import contactForm from "./contactForm";

export default function footer() {
  return (
        <section id="contact" className="wrapper split style2">
      <div className="inner">
        <section>
          <header>
            <h3>Contact</h3>
          </header>
          <p>Have a question? Just want to say hi? Feel free to reach out!</p>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/milesosborne"
                className="icon brands fa-linkedin"
                target="_blank"
              >
                {/* <FontAwesomeIcon icon={faLinkedin} style={{height: "2em"}} /> */}
                {/* <span className="label">Linkedin</span> */}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/prowl107"
                className="icon brands fa-github"
                target="_blank"
              >
                {/* <FontAwesomeIcon icon={faGithub} style={{height: "2em"}}/> */}
                {/* <span className="label">GitHub</span> */}
              </a>
            </li>
            <li>
              <a
                href="mailto: milesosborne182@gmail.com"
                className="icon solid fa-envelope"
              >
                {/* <FontAwesomeIcon icon={faEnvelope} style={{height: "2em"}}/> */}
                {/* <span className="label">Email</span> */}
              </a>
            </li>
          </ul>
        </section>
        <section>
          {contactForm()}
        </section>
      </div>
    </section>
  );
}