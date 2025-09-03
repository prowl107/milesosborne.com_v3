import { getWorkExperience } from "@/sanity-utils";
import ToggleHistory from "./toggleHIstory";
import ExperienceCard from "./ExperienceCard";

const workExperience = await getWorkExperience();
const featured_experience_list = workExperience.filter(item=>item.featured)
const non_featured_experience_list = workExperience.filter(item=>!item.featured)

export default function timeline() {
  return (
    <section id="experience" className="wrapper">
      <div className="inner">
        <header className="major">
          <h2>Work Experience</h2>
        </header>

        <div className="timeline">
            {featured_experience_list.map((item) => (
              <ExperienceCard key={item._id} experience={item} />
            ))}

          <ToggleHistory>
            {non_featured_experience_list.map((item) => (
              <ExperienceCard key={item._id} experience={item} />
            ))}
          </ToggleHistory>
        </div>
      </div>
    </section>
  );
}
