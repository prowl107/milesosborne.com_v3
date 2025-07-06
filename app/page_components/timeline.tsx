import ToggleHistory from "./toggleHIstory"; // adjust if your structure differs

export default function timeline() {
  return (
    <section id="experience">
      <header className="major">
        <h2>Work Experience</h2>
      </header>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>
              Systems Engineer <span>@ NASA</span>
            </h3>
            <p className="job-dates">June 2022 – Present</p>
            <ul>
              <li>Developed embedded flight software for CubeSats.</li>
              <li>Led testing on radiation-hardened microcontrollers.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>
              Embedded Intern <span>@ SpaceX</span>
            </h3>
            <p className="job-dates">Jan 2022 – May 2022</p>
            <ul>
              <li>Built telemetry pipeline for diagnostics.</li>
              <li>Optimized STM32 boot time by 60%.</li>
            </ul>
          </div>
        </div>

        <ToggleHistory>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>
                Firmware Developer <span>@ MITRE</span>
              </h3>
              <p className="job-dates">Summer 2021</p>
              <ul>
                <li>Reverse-engineered legacy embedded systems.</li>
                <li>Wrote peripheral drivers for IoT platform.</li>
              </ul>
            </div>
          </div>
        </ToggleHistory>
      </div>
    </section>
  );
}