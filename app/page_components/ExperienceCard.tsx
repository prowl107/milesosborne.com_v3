import { PortableText } from "next-sanity";

const ExperienceCard = ({ experience }) => {
    return (
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>
               {experience.jobTitle} <span>@ {experience.company}</span>
              </h3>
              <p className="job-dates">{formatDate_to_mmmyyyyy(experience.startDate)} – {experience.endDate ? formatDate_to_mmmyyyyy(experience.endDate) : "Present"}</p>
                <PortableText value={experience.description}></PortableText>
            </div>
          </div>
    );
};


function formatDate_to_mmmyyyyy (inputDate){

  // Parse the input string into a Date object
  const date = new Date(inputDate);

  // Array of month abbreviations
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get month and year
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month}-${year}`;
}

export default ExperienceCard;