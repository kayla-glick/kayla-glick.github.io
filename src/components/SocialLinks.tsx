import { ReactComponent as GitHubIcon } from '../assets/img/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/img/icons/linkedin.svg';
import { ReactComponent as EnvelopeIcon } from '../assets/img/icons/envelope.svg';

function SocialLinks() {
  return (
    <ul className="list-inline mb-0">
      <li className="list-inline-item me-4">
        <a href="https://github.com/kayla-glick" target="blank">
          <GitHubIcon fill="currentColor" height="36" width="36" />
        </a>
      </li>
      <li className="list-inline-item me-4">
        <a href="https://linkedin.com/in/kayla-glick" target="blank">
          <LinkedinIcon fill="currentColor" height="36" width="36" />
        </a>
      </li>
      <li className="list-inline-item me-4">
        <a href="mailto:kaylaglick12@gmail.com">
          <EnvelopeIcon fill="currentColor" height="36" width="36" />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks;
