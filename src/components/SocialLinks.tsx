import GitHubIcon from '../assets/img/icons/github.svg?react';
import LinkedinIcon from '../assets/img/icons/linkedin.svg?react';
import EnvelopeIcon from '../assets/img/icons/envelope.svg?react';

function SocialLinks() {
  return (
    <ul className="list-inline mb-0">
      <li className="list-inline-item me-4">
        <a href="https://github.com/kayla-glick" target="_blank" rel="noreferrer">
          <GitHubIcon fill="currentColor" height="36" width="36" />
        </a>
      </li>
      <li className="list-inline-item me-4">
        <a href="https://linkedin.com/in/kayla-glick" target="_blank" rel="noreferrer">
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
