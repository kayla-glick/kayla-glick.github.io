import Image from 'react-bootstrap/Image';

import Section from '../Section';
import me from '../../assets/img/me.jpg';
import FadeInContainer from '../FadeInContainer';

function AboutSection() {
  return (
    <Section id="about" title="A Little About Me">
      <FadeInContainer className="flex-column">
        <div className="row">
          <div className="col-md-7 col-12 fade-in">
            <h2>Hi, I'm Kayla!</h2>
            <p>
              I'm a Senior Software Engineer based in
              <a href="https://www.google.com/maps/place/Raleigh,+NC/@35.8439338,-78.8098641,11z/data=!3m1!4b1!4m6!3m5!1s0x89ac5a2f9f51e0f7:0x6790b6528a11f0ad!8m2!3d35.7795897!4d-78.6381787!16zL20vMGZ2eWc?entry=ttu">&nbsp;Raleigh, North Carolina&nbsp;</a>
              with 8 years of experience leading and collaborating with teams to design, build, & deploy pixel-perfect web applications at scale with a focus on UI/UX, performance, and observability.
            </p>
            <p>
              I started my journey in college pursuing 3D modeling, environment art, & game development before jumping into the world of web development.
              After making the switch, I quickly learned Ruby on Rails & have since had opportunities to
              build tools for managing medical research,
              make Cannabis more accessible to people all over the world,
              helping to shape the future of software at <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>,
              and now I'm part of the team at <a href="https://tern.travel" target="_blank" rel="noreferrer">Tern</a> building a better all-in-one platform for the Travel industry!
            </p>
            <p className="mb-0">Outside the office, you'll often find me:</p>
            <ul className="list-unstyled">
              <li className="d-flex">
                <span className="me-2">☕</span>
                <span>In a cozy café sampling unique coffees.</span>
              </li>
              <li className="d-flex">
                <span className="me-2">🍙</span>
                <span>In a local restaurant sampling foods from all over the world.</span>
              </li>
              <li className="d-flex">
                <span className="me-2">👩‍🍳</span>
                <span>In the kitchen experimenting with new flavors for my cooking.</span>
              </li>
              <li className="d-flex">
                <span className="me-2">🐈</span>
                <span>Or at home, snuggling up on the couch with my wonderful cats, Momo and Mae!</span>
              </li>
            </ul>
          </div>
          <div className="col-5 col-lg-4 d-none d-md-block offset-lg-1 text-right fade-in">
            <Image src={me} alt="me" roundedCircle className="d-block w-100" />
          </div>
        </div>
        <Image src={me} alt="me" roundedCircle className="d-block d-md-none w-50 mx-auto mt-3 fade-in" />
      </FadeInContainer>
    </Section>
  )
}

export default AboutSection
