export const headerData = {
  title: "Mukul Sharma",
  navLinks: [
    {
      label: "work",
      url: "/work",
    },
    {
      label: "music",
      url: "/music",
    },
  ],
};

export const homepage = {
  title: "Enter the <u>Realm</u> <br />Of Frontend",
  bannerImage: "./images/home-banner.avif",
};

export const workPage = {
  title: "<u>Skills</u> and<br />Work",
  bannerImage: "./images/work-banner.avif",
};

export const metaFields = [
  { name: "title", content: "Mukul Sharma - Portfolio Website" },
  {
    name: "description",
    content:
      "Explore Mukul Sharma's portfolio, featuring his latest projects, work experiences, and skillset. You can reach out for frontend-related work",
  },
  {
    name: "keywords",
    content: "Mukul Sharma, Portfolio, Projects, Work Experiences",
  },
  { name: "author", content: "Mukul Sharma" },
  { name: "og:title", content: "Mukul Sharma Portfolio" },
  {
    name: "og:description",
    content:
      "Explore Mukul Sharma's portfolio, featuring his latest projects, work experiences, and skillset. You can reach out for frontend-related work",
  },
  {
    name: "og:image",
    content: "https://mukul-sharma.vercel.app/images/home-banner.avif",
  },
  { name: "og:url", content: "https://mukul-sharma.vercel.app/" },
  { name: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:site", content: "@mukulTriesCode" },
  { name: "twitter:title", content: "Mukul Sharma Portfolio" },
  {
    name: "twitter:description",
    content:
      "Explore Mukul Sharma's portfolio, featuring his latest projects, work experiences, and skillset. You can reach out for frontend-related work",
  },
  {
    name: "twitter:image",
    content: "https://mukul-sharma.vercel.app/images/home-banner.avif",
  },
  { name: "robots", content: "index, follow" },
];

export const currentWorkData = [
  {
    title: "Currently",
    description:
      "I’m a <span>Frontend</span> Developer at RW Infotech, an Headless CMS experts company.",
  },
  {
    title: "Availability",
    description: "I’m currently available to work togather.",
  },
  {
    title: "Links",
    links: [
      { name: "Github", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
    ],
  },
];

export const workData = {
  title: "Selected <u>Work</u>",
  projects: [
    {
      title: "React Code Editor",
      description:
        "Code editor is created using React + TS with Redux Toolkit for state management",
    },
    {
      title: "E-commerce Website",
      description:
        "E-commerce website built using React, Redux, and Firebase for authentication and database management",
    },
    {
      title: "Portfolio Website",
      description:
        "Portfolio website created using React, Redux, and CSS for styling and animations",
    },
    {
      title: "Chatbot Application",
      description:
        "Chatbot application developed using React, Redux, and Dialogflow for conversational AI",
    },
  ],
};

export const skillData = [
  {
    label: "Skills",
    data: [
      {
        label: "Frontend",
        technologies: [
          { label: "HTML", logo: "" },
          { label: "CSS", logo: "" },
          { label: "SASS", logo: "" },
          { label: "BootStrap", logo: "" },
          { label: "Tailwind CSS", logo: "" },
          { label: "JavaScript", logo: "" },
          { label: "TypeScript", logo: "" },
          { label: "ReactJS", logo: "" },
          { label: "NextJS", logo: "" },
          { label: "Redux", logo: "" },
        ],
      },
      {
        label: "Headless CMS",
        technologies: [
          { label: "Prismic", logo: "" },
          { label: "Sanity", logo: "" },
        ],
      },
      {
        label: "API",
        technologies: [
          { label: "Axios", logo: "" },
          { label: "GraphQL", logo: "" },
          { label: "Postman", logo: "" },
          { label: "Insomnia", logo: "" },
        ],
      },
    ],
  },
];
