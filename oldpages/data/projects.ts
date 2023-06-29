interface Project {
  title: string;
  desc: string;
  tools: string[];
  github: string;
  url?: string;
}
export const projects: Project[] = [
  {
    title: "Planner",
    desc: "Make planning social events easier with a unified calendar",
    github: "https://github.com/ericsodev/planner",
    tools: ["Tailwind CSS", "Next.js", "tRPC", "Prisma", "PostgreSQL"],
    url: "https://planner-production.up.railway.app/",
  },
  {
    title: "PasteWin",
    desc: "An easy way to share snippets of code online.",
    tools: ["Next.js", "tRPC", "PostgreSQL"],
    url: "https://pastewin.findericso.com",
    github: "https://github.com/ericsodev/pastewin",
  },
  {
    title: "CHIP 8 Emulator (C)",
    desc: "An emulator used to play classic games such Pacman, Space Invaders, and Pong.",
    tools: ["C", "SDL2"],
    github: "https://github.com/ericsodev/chip8c",
  },
  {
    title: "Pomodoro Timer",
    desc: "A productivity tool to help create healthy study habits.",
    tools: ["React.js", "Chakra UI"],
    github: "https://github.com/ericsodev/pomodoro",
    url: "http://pomodoro.findericso.com",
  },
  {
    title: "Mood Board",
    desc: "A quick way to record the quality of your day and reflect on yourself.",
    tools: ["Tailwind CSS", "React.js", "MongoDB"],
    github: "https://github.com/ericsodev/Moodboard",
  },
  {
    title: "Flappy Bird",
    desc: "A Flappy Bird clone written in C.",
    tools: ["C", "SDL2"],
    github: "https://github.com/ericsodev/FlappyBird"
  },
  {
    title: "CHIP 8 Emulator (Java)",
    desc: "An emulator used to play classic games such Pacman, Space Invaders, and Pong.",
    tools: ["Java", "JavaFX"],
    github: "https://github.com/ericsodev/chip8emu",
  },
  {
    title: "Priority Todo",
    desc: "A simple todo app that allows draggle priority reordering.",
    tools: ["Next.js", "TailwindCSS", "PostgreSQL"],
    github: 'https://github.com/ericsodev/simple-todo-t3'
  }
];
