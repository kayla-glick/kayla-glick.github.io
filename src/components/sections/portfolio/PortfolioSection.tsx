import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Section from '../../Section';
import Item from './Item';
import { PROJECTS } from '../../../data';

function PortfolioSection() {
  return (
    <Section id="portfolio" title="Featured Projects">
      {PROJECTS.map((project) => (
        <Item project={project} key={uuidv4()}/>
      ))}
    </Section>
  )
}

export default PortfolioSection
