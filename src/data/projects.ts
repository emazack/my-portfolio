export type Project = {
  name: string;
  technologies: string[];
  image: string;
  live: string;
  code?: string;
};

export const projects: Project[] = [
  {
    name: "Chef GPT",
    technologies: ["React", "Vite", "Hugging Face API", "CSS"],
    image: "/chefgpt.png",
    live: "https://chef-gpt-eight.vercel.app/",
    code: "https://github.com/emazack/chef-gpt"
  },
  {
    name: "User Manager",
    technologies: ["React", "CSS", "Bootstrap", "Axios"],
    image: "/usermanager.png",
    live: "https://emazack.github.io/user-manager/",
    code: "https://github.com/emazack/user-manager"
  },
  {
    name: "Guess the word",
    technologies: ["React", "CSS"],
    image: "/guesstheword.png",
    live: "https://emazack.github.io/assembly-game/",
    code: "https://github.com/emazack/assembly-game"
  },
  {
    name: "Medical Doctor Landing Page",
    technologies: ["React", "Next.js", "SCSS", "Vercel", "Node.js"],
    image: "/landingdoctor.png",
    live: "https://giusepperoccochirurgo.it/"
  },
  {
    name: "Endorsement App",
    technologies: ["Javascript", "CSS", "Firebase"],
    image: "/endorsement.png",
    live: "https://endorsment-app.netlify.app/",
    code: "https://github.com/emazack/endorsement-web-app/tree/main"
  },
  {
    name: "Role-playing-game",
    technologies: ["JavaScript", "CSS", "HTML"],
    image: "/roleplayinggame.png",
    live: "https://emazack.github.io/role-playing-game/",
    code: "https://github.com/emazack/role-playing-game"
  }
];
