import Button from 'react-bootstrap/Button';
import Section from '../Section';
import SocialLinks from '../SocialLinks';

function GreetingSection() {
  return (
    <Section id="greeting">
      <h1 className="section-title mb-0">Kayla Glick</h1>
      <h2 className="display-6 text-white mb-0">Senior Software Engineer @ GitHub</h2>
      <p className="h5 text-white mb-4">Pixel-perfect websites for your picture-perfect business</p>
      <div className="d-flex align-items-center">
        <Button href="mailto:kaylaglick12@gmail.com" variant="outline-primary" size="lg" className="me-4">Get In Touch</Button>
        <SocialLinks />
      </div>
    </Section>
  )
}

export default GreetingSection
