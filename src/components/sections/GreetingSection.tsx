import { Button } from 'react-bootstrap';

import Section from '../Section';
import SocialLinks from '../SocialLinks';

function GreetingSection() {
  return (
    <Section id="greeting">
      <h1 className="section-title mb-0">Kayla Glick</h1>
      <h2 className="display-6 text-white mb-0">Senior Software Engineer @ <a href="mailto:kaylaglick12@gmail.com" target="_blank" rel="noreferrer">Looking for Work</a></h2>
      <h2 className="display-6 text-white mb-0">Developer & Maintainer @ <a href="https://wowsims.github.io" target="_blank" rel="noreferrer">WoWSims</a></h2>
      <p className="h5 text-white fw-light mb-4">Pixel-perfect websites for your picture-perfect business</p>
      <div className="d-flex align-items-center">
        <Button href="mailto:kaylaglick12@gmail.com" variant="outline-primary" size="lg" className="me-4">Get In Touch</Button>
        <SocialLinks />
      </div>
    </Section>
  )
}

export default GreetingSection
