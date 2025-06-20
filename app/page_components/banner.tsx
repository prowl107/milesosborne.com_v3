// import strata_css from "../stylesheets/strata.module.css";

export default function banner() {
  return (
    <div>
      {/* Header */}
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src="images/avatar.jpg" alt="d.ts" />
          </a>
          <h1>
            <strong>I am Strata</strong>, a super simple
            <br />
            responsive site template freebie
            <br />
            crafted by <a href="http://html5up.net">HTML5 UP</a>.
          </h1>
        </div>
      </header>
    </div>
  );
}
