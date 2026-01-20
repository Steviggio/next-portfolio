import { Github, Linkedin } from "./svgs";

export const datas = {
  name: "Steviggio",
  title: "Développeur Fullstack React / Node.js",
  about:
    "Développeur React / Node.js, passionné de langues et de développement, j'aime prendre part à des projets innovants mélant créativité et modernité.",
  projects: [
    {
      title: "Polypost",
      description: "Tableau de bord temps réel avec Next.js 14 et Tremor.",
      link: "https://github.com/Steviggio/polypost",
      active: true,
    },
    {
      title: "E-commerce Headless ",
      description:
        "Template E-commerce 'Headless' optimisé pour la performance.",
      link: "https://github.com/Steviggio/eshop-template",
      active: true,
    },
    {
      title: "Speakio",
      description: "Plateforme d'accompagnement à l'apprentissage des langues.",
      link: "https://github.com",
      active: false,
    },
    {
      title: "Portfolio Minimaliste",
      description: "Le site sur lequel vous naviguez actuellement.",
      link: "https://github.com/Steviggio/next-portfolio",
      active: true,
    },
  ],
  experiences: [
    {
      company: "Efficience Digitale",
      role: "Développeur Frontend",
      date: "Sept. 2024 — Oct. 2025",
    },
    {
      company: "Ganatan",
      role: "Développeur Fullstack",
      date: "Août 2022 - Sept. 2023",
    },
    {
      company: "Freelance",
      role: "Développeur Web",
      date: "Août 2023 - Présent",
    },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Steviggio", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/stevemothmora/",
      icon: Linkedin,
    },
  ],
  resumeUrl: "/Mothmora_2026.pdf",
};
