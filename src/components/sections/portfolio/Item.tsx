import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import FadeInContainer from '../../FadeInContainer';
import PortfolioItemFooter from "../../PortfolioItemFooter";
import useInteractiveContainer from "../hooks/use-interactive-container";

import type { Project } from '../../../types';

type Props = {
  project: Project
}

function Item({ project }: Props) {
  const {
    containerRef,
    linkRef,
    handleClick,
    handleHover,
  } = useInteractiveContainer();

  const eventProps = project.link ? {
    onMouseOver: (e: any) => handleHover(e, true),
    onMouseLeave: (e: any) => handleHover(e, false),
    onClick: (e: any) => handleClick(e),
  } : {}

  return (
    <FadeInContainer className="portfolio-item">
      <div className="portfolio-item-details" ref={containerRef} {...eventProps}>
        <h2>
          {project.link ?
            <a href={project.link} target="_blank" rel="noreferrer" ref={linkRef}>{project.name} </a>  
            :
            project.name
          }
        </h2>
        <p>{project.description}</p>
        <PortfolioItemFooter badges={project.skills} />
      </div>
      <Carousel className="portfolio-item-carousel" fade>
        {project.images.map((image) => {
          return (
            <Carousel.Item>
              <Image src={image} width="100%" />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </FadeInContainer>
  )
}

export default Item;
