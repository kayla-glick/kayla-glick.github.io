import { v4 as uuidv4 } from "uuid";
import Section from "../../Section";
import { ROLES } from "../../../data";
import Experience from ".";

function ExperienceSection() {
  return (
    <Section id="experience" title="Where I've Worked">
      <div className="timeline">
        {ROLES.map((role) => (
          <Experience.Item role={role} key={uuidv4()}/>
        ))}
      </div>
    </Section>
  )
}

export default ExperienceSection
