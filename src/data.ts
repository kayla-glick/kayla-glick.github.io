const ROLES: Role[] = [
  {
    company: "GitHub",
    link: "https://github.com",
    logo: require("./assets/img/experience/github.png"),
    name: "Senior Software Engineer",
    dates: "Aug 2022 - Present",
    description: `
      Leading & providing technical guidance for projects on GitHub's
      <a href='/gitcoin.png' target='_blank'>@GitCoin</a> billing team,
      including an ongoing overhaul of GitHub's billing UI/UX with new company-wide React initiatives.
      Also facilitating retros & technical discussions to improve team processes.
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
    logo: require("./assets/img/experience/dutchie.png"),
    name: "Senior Software Engineer II",
    previousRoles: ["Senior Software Engineer I"],
    dates: "Mar 2021 - Jul 2022",
    description: `
      As a lead engineer for the payments team, I architected the workflows, services, & underlying
      relational data models supporting Dutchie's in-house payments service - Dutchie Pay - & worked
      closely with product, design, & engineering leadership to drive numerous other projects at the company.
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
    logo: require("./assets/img/experience/musc.png"),
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
      require("./assets/img/portfolio/wowsims-1.png"),
      require("./assets/img/portfolio/wowsims-2.png"),
      require("./assets/img/portfolio/wowsims-3.png"),
      require("./assets/img/portfolio/wowsims-4.png"),
    ],
    description: `
      I lead a full UI refresh of the Wrath of the Light King site for WoWSims -
      an open-source fan-made World of Warcraft®: Classic™ simulation website -
      along with designing the site homepages, raid simulation UI, & doing various
      other feature work & bug fixes in collaboration with users & other developers.
    `,
    skills: [
      "Open-Source",
      "TypeScript",
      "Web Components",
      "SCSS",
      "Bootstrap",
    ],
  },
  // {
  //   name: "GitHub Billing vNext",
  //   images: [
  //     require("./assets/img/portfolio/github-billing-vnext-1.png"),
  //   ],
  //   description: `
  //     Billing vNext is a project to overhaul GitHub's Billing UI/UX that my team is currently
  //     working on. As one of the most experienced front-end developers on the team, I've been
  //     providing guidance throughout the development of the project. 
  //   `,
  //   skills: [
  //     "React",
  //     "TypeScript",
  //     "Figma",
  //   ],
  // },
  {
    link: "https://business.dutchie.com/dutchiepay/consumer",
    name: "Dutchie Pay",
    images: [
      require("./assets/img/portfolio/dutchie-pay-1.png"),
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
