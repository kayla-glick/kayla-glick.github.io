const ROLES: Role[] = [
  {
    company: "GitHub",
    link: "https://github.com",
    logo: require("./assets/img/github.png"),
    name: "Senior Software Engineer",
    dates: "Aug 2022 - Present",
    description: `
      Leading & providing technical guidance for projects on GitHub's
      <a href='/gitcoin.png' target='_blank'>@GitCoin</a> billing team,
      including an ongoing overhaul of GitHub's billing UI/UX with new company-wide React initiatives.
      Also facilitating retros and technical discussions to improve team processes.
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
    logo: require("./assets/img/dutchie.png"),
    name: "Senior Software Engineer II",
    previousRoles: ["Senior Software Engineer I"],
    dates: "Mar 2021 - Jul 2022",
    description: `
      As a lead engineer for the payments team, I architected the workflows, services, & underlying
      relational data models supporting Dutchie's in-house payments service, Dutchie Pay, & worked
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
    logo: require("./assets/img/musc.png"),
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
]

export {
  ROLES
};
