import type { Project, Role } from "./types";

import TernLogo from "./assets/img/experience/tern.png";
import GitHubLogo from "./assets/img/experience/github.png";
import DutchieLogo from "./assets/img/experience/dutchie.png";
import MUSCLogo from "./assets/img/experience/musc.png";

import WoWSims1 from "./assets/img/portfolio/wowsims-1.png";
import WoWSims2 from "./assets/img/portfolio/wowsims-2.png";
import WoWSims3 from "./assets/img/portfolio/wowsims-3.png";
import WoWSims4 from "./assets/img/portfolio/wowsims-4.png";

import DutchiePay1 from "./assets/img/portfolio/dutchie-pay-1.png";

const ROLES: Role[] = [
  {
    company: "Tern",
    link: "https://tern.travel",
    logo: TernLogo,
    name: "Senior Software Engineer",
    dates: "Dec 2024 - Apr 2026",
    description: `
      Led numerous initiatives to add new features and reimagine the user experience
      of Tern's travel advisory platform. Using tools like Claude Code and cloud
      agents, we shipped fast and iteratively - without sacrificing on quality -
      to always have something new for our users every single week.
      I also hosted a weekly forum for our engineering team to discuss new tools
      and process improvements.
    `,
    skills: [
      "Ruby on Rails",
      "Hotwire",
      "Stimulus",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    company: "GitHub",
    link: "https://github.com",
    logo: GitHubLogo,
    name: "Senior Software Engineer",
    dates: "Aug 2022 - Nov 2024",
    description: `
      Led & provided technical guidance for projects on GitHub's billing team,
      including a complete overhaul of the GitHub billing UI powered by
      an event store service processing millions of line items each day.
      I also facilitated retros on my team and hosted training sessions
      to teach other developers Ruby on Rails.
    `,
    skills: [
      "Ruby on Rails",
      "React",
      "TypeScript",
      "Go",
      "Kafka",
    ],
  },
  {
    company: "Dutchie",
    link: "https://dutchie.com",
    logo: DutchieLogo,
    name: "Senior Software Engineer II",
    previousRoles: ["Senior Software Engineer I"],
    dates: "Mar 2021 - Jul 2022",
    description: `
      As a lead engineer for Dutchie's payments team I architected Dutchie's in-house payments service - Dutchie Pay.
      along with with various other payment processor integrations.
      I worked closely with our product team and engineering leadership to draft engineering plans
      and lead my team through 
    `,
    skills: [
      "System Design",
      "Data Modeling",
      "Project Management",
      "UI/UX Design",
      "Ruby on Rails",
      "React",
      "Figma",
    ],
    projects: [
      {
        text: "Dutchie Pay",
        url: "https://business.dutchie.com/dutchiepay/consumer"
      }
    ]
  },
  {
    company: "MUSC",
    link: "https://web.musc.edu/",
    logo: MUSCLogo,
    name: "Senior Web Developer",
    previousRoles: [
      "Web Developer",
      "Intern Web Developer",
    ],
    dates: "Jun 2015 - Feb 2021",
    description: `
      Developed & maintained several Ruby on Rails web applications to aid with medical research processes,
      including a full redesign of SPARCRequest's UI/UX, designing an interactive in-house survey builder,
      & optimizing performance working with large datasets.
    `,
    skills: [
      "Ruby on Rails",
      "JavaScript",
      "jQuery",
      "HTML",
      "SCSS",
      "Bootstrap",
    ],
    projects: [
      {
        text: "SPARCRequest",
        url: "https://sparc.musc.edu"
      },
      {
        text: "Living BiobBank",
        url: "https://lbb.musc.edu"
      }
    ]
  }
]

const PROJECTS: Project[] = [
  {
    link: "https://wowsims.github.io/",
    name: "WoWSims",
    images: [
      WoWSims1,
      WoWSims2,
      WoWSims3,
      WoWSims4,
    ],
    description: `
      WoWSims is a fan-made open-source project to provide simulations for World of Warcraft® Classic™.
      Since 2022 I've made thousands of contributions to the project including a complete UI redesign.<br /><br />
      In 2024 I was made a maintainer of the project and have since managed our GitHub organization, site hosting,
      and worked with our developers to launch multiple new site versions for new WoW Classic releases.
    `,
    skills: [
      "Open-Source",
      "TypeScript",
      "Go",
      "Protobufs",
      "Web Components",
      "Bootstrap",
    ],
  },
  {
    link: "https://business.dutchie.com/dutchiepay/consumer",
    name: "Dutchie Pay",
    images: [
      DutchiePay1,
    ],
    description: `
      Dutchie Pay is Dutchie's premiere in-house payments service for online Cannabis payments.
      I architected the workflows, services, & underlying relational data models for the project,
      & also worked with the product & design teams to flesh out the UI/UX.
    `,
    skills: [
      "System Design",
      "Data Modeling",
      "Project Management",
      "UI/UX Design",
      "Ruby on Rails",
      "React",
      "Figma",
    ],
  },
]

export {
  ROLES,
  PROJECTS,
};
