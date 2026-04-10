import { v4 as uuidv4 } from "uuid";
import Section from "../../Section";
import Item from "./Item";
import { ROLES } from "../../../data";

function ExperienceSection() {
  return (
    <Section id="experience" title="Where I've Worked">
      <div className="timeline">
        {ROLES.map((role) => (
          <Item role={role} key={uuidv4()}/>
        ))}
      </div>
    </Section>
  )
}

export default ExperienceSection
