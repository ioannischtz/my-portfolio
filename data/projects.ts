export interface Project {
  title?: string;
  description?: string;
  image?: string;
  techStack?: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Harmonic Motion Symphony",
    description:
      "A JavaScript+Canvas game, that combines simple pendulum physics with Sound. ",
    image: "/images/harmonic-motion-symphony.png",
    techStack: ["JavaScript", "Canvas", "Web Audio API"],
    demoLink: "https://ioannischtz.github.io/harmonic-motion-symphony/",
    githubLink: "https://github.com/ioannischtz/harmonic-motion-symphony",
  },
  {
    title: "voreiapress.com",
    description: "A blog website for a photo-journalist.",
    image: "/images/voreiapress.png",
    techStack: ["Next.js", "Chakra UI", "Strapi CMS"],
    demoLink: "https://vpress-forntend-test.vercel.app/en",
    githubLink: "https://github.com/ioannischtz/vpress-forntend-test",
  },
  {
    title: "My Portfolio",
    description: "A showcase of my projects, skills, and experience.",
    techStack: ["Next.js", "shadcn/ui", "TailwindCSS"],
    image: "/images/portfolio.png",
    githubLink: "https://github.com/ioannischtz/my-portfolio",
    demoLink: "https://i-chatzi-portfolio.vercel.app/",
  },
  {
    title: "Psychophysics Connect(Frontend)",
    description: "SaaS for remote psychophysics experiments.",
    image: "/images/psychophysics-connect.png",
    techStack: ["TypeScript", "React", "shadcn/ui", "TailwindCSS"],
    demoLink: "https://ioannischtz.github.io/psychophysics-connect-frontend/",
    githubLink: "https://github.com/ioannischtz/psychophysics-connect-frontend",
  },
  {
    title: "Psychophysics Connect(Backend)",
    description:
      "A nodejs based server application for setting up and running remote psychophysics experiments",
    image: "/images/psychophysics-connect.png",
    techStack: ["TypeScript", "Node.js", "express.js", "MongoDB"],
    githubLink: "https://github.com/ioannischtz/psychophysics-connect-backend",
  },
  {
    title: "imnode-playground",
    description:
      "Fast prototype for adding visual scripting to my Computational Modeling of Auditory Perception Framework",
    image: "/images/imnode-playground.png",
    techStack: ["C++", "imgui", "imnodes"],
    githubLink: "https://github.com/ioannischtz/imnode-playground",
  },
  {
    title: "The Cpp Book",
    description: "A port of the 'Rust Book' to C++. (WIP)",
    techStack: ["C++"],
    githubLink: "https://github.com/ioannischtz/the-cpp-book",
  },
  {
    title: "autocomplete",
    description:
      "Autocomplete functionality utilizing the `Trie` data structure.",
    techStack: ["TypeScript"],
    githubLink: "https://github.com/ioannischtz/autocomplete",
  },
  {
    title: "Remote Timbre Experiment",
    description:
      "A platform for remote timbre experiments. (use quUdXUnR as sessionId)",
    image: "/images/remote-timbre-experiment.png",
    techStack: [
      "JavaScript",
      "React",
      "ant design",
      "Redux",
      "Node.js",
      "Express.js",
    ],
    demoLink: "https://remote-timbre-experiment.onrender.com",
    githubLink: "https://github.com/ioannischtz/remote-timbre-experiment",
  },
  {
    title: "Loopable-Samples",
    description:
      "An Android app for loopable samples, utilizing the Oboe C++ library",
    techStack: ["Kotlin", "C++", "Oboe Library"],
    githubLink: "https://github.com/ioannischtz/Loopable-Samples",
  },
];
