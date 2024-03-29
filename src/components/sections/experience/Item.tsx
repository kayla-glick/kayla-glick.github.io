import React from 'react';
import Image from "react-bootstrap/Image";
import { v4 as uuidv4 } from "uuid";
import PortfolioItemFooter from "../../PortfolioItemFooter";
import { ReactComponent as DotIcon } from "../../../assets/img/icons/dot-circle.svg";
import useInteractiveContainer from "../hooks/use-interactive-container";
import FadeInContainer from '../../FadeInContainer';

import type { Role } from '../../../types';

type Props = {
  role: Role
}

function Item({ role }: Props) {
  const {
    containerRef,
    linkRef,
    handleClick,
    handleHover,
  } = useInteractiveContainer();

  return (
    <div className="timeline-row">
      <div
        className="timeline-section"
        onMouseOver={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
        onClick={(e) => handleClick(e)}
        ref={containerRef}
      >
        <FadeInContainer className="timeline-indicator">
          <button className="btn">
            <DotIcon fill="currentcolor" />
            <p className="mb-0">{role.dates}</p>
          </button>
        </FadeInContainer>
        <div
          className="timeline-section-contents"
        >
          <FadeInContainer className="timeline-section-details">
            <Image src={role.logo} alt={`${role.company} Logo`} width="48" height="48" className="me-2" />
            <div className="d-flex flex-column">
              <h2 className="timeline-company">
                <a href={role.link} target="_blank" rel="noreferrer" ref={linkRef}>
                  {role.company}
                </a>
              </h2>
              <div className="timeline-roles">
                <h3 className="timeline-role">{role.name}</h3>
                {role.previousRoles?.map((name) => {
                  return <p className="timeline-role" key={uuidv4()}>{name}</p>
                })}
              </div>
              <p className="timeline-description" dangerouslySetInnerHTML={{__html: role.description}} />
              <PortfolioItemFooter links={role.projects} badges={role.skills} />
            </div>
          </FadeInContainer>
        </div>
      </div>
    </div>
  )
}

export default Item;