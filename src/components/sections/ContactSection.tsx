import { Button } from 'react-bootstrap';
import Section from '../Section';
import SocialLinks from '../SocialLinks';

function ContactSection() {
  return (
    <Section id="contact" title="Get in Touch">
      <p className="h3 text-body mb-0">I'm always looking for new opportunities!</p>
      <p className="h3 text-body mb-4">Send me an email for business inquiries.</p>
      <div className="d-flex align-items-center">
        <Button href="mailto:kaylaglick12@gmail.com" variant="outline-primary" size="lg" className="me-4">Say Hello!</Button>
        <SocialLinks />
      </div>
      <div id="site-footer">
        <p className="text-light mb-0">Designed & built by Kayla Glick</p>
      </div>
    </Section>
  )
}

export default ContactSection
