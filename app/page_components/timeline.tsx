
import { getProjects } from "@/sanity-utils";
const projects = await getProjects();
const featured_projects_list = projects.filter((item) => item.featured);

export default function timeline() {

// const toggleBtn = document.getElementById('toggle-history');
// const olderJobs = document.getElementById('older-jobs');
// toggleBtn.addEventListener('click', () => {
// const expanded = olderJobs.classList.toggle('expanded');

// toggleBtn.textContent = expanded ? 'Show Less' : 'Show Full History';
// });
  return (
    <section id="experience">
      <header class="major">
        <h2>Work Experience</h2>
      </header>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>
              Systems Engineer <span>@ NASA</span>
            </h3>
            <p class="job-dates">June 2022 – Present</p>
            <ul>
              <li>Developed embedded flight software for CubeSats.</li>
              <li>Led testing on radiation-hardened microcontrollers.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>
              Embedded Intern <span>@ SpaceX</span>
            </h3>
            <p class="job-dates">Jan 2022 – May 2022</p>
            <ul>
              <li>Built telemetry pipeline for diagnostics.</li>
              <li>Optimized STM32 boot time by 60%.</li>
            </ul>
          </div>
        </div>

        <div id="older-jobs" class="timeline-collapsed">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>
                Firmware Developer <span>@ MITRE</span>
              </h3>
              <p class="job-dates">Summer 2021</p>
              <ul>
                <li>Reverse-engineered legacy embedded systems.</li>
                <li>Wrote peripheral drivers for IoT platform.</li>
              </ul>
            </div>
          </div>
        </div>

        <button id="toggle-history" class="button">
          Show Full History
        </button>
      </div>
    </section>
  );
}
