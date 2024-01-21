import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marisa Diaz",
  initials: "MD",
  location: "Berlin, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Berlin",
  about:
    "About - WIP",
  summary:
    "Summary - WIP",
  avatarUrl: "https://github.com/d14znet/blog/raw/main/static/bmo.png",
  personalWebsiteUrl: "https://d14znet.github.io/blog-chirpy/",
  contact: {
    email: "test",
    tel: "test",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/D14znet",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "School 1",
      degree: "Degree 1",
      start: "start_year",
      end: "end_year",
    },
  ],
  work: [
    {
      company: "Company 1",
      link: "link-to-company",
      badges: ["Remote"],
      title: "Title 1",
      //logo: ,
      start: "start_year",
      end: "end_year",
      description:
        "I did this and that",
    },
    {
      company: "Company 2",
      link: "link-to-company",
      badges: ["Remote"],
      title: "Title 2",
      //logo: ,
      start: "start_year",
      end: "end_year",
      description:
        "I did this and that",
    },
  ],
  skills: [
    "Skill 1",
    "Skill 2",
    "Skill 3",
  ],
  projects: [
    {
      title: "Project 1",
      techStack: [
        "Tech 1",
        "Tech 2",
        "Tech 3",
      ],
      description: "This is what the project does",
      //logo: ,
      link: {
        label: "project1-site",
        href: "link-to-project1",
      },
    },
    {
      title: "Project 2",
      techStack: ["Tech 1", "Tech 2"],
      description:
        "This is what the project does",
      //logo: ,
      link: {
        label: "project2-site",
        href: "link-to-project2",
      },
    },
  ],
} as const;
