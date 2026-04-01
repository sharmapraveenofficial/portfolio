import { MdArrowOutward } from "react-icons/md";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  emoji: string;
}

const projects: Project[] = [
  {
    name: "Excalidraw Clone",
    description: "A simple clone of Excalidraw built with React and TypeScript. I made this side project for learning purposes. The app isn't responsive, but I prioritized functionalities over responsiveness.",
    technologies: ["React", "TypeScript", "CSS", "Cypress"],
    url: "https://github.com/yourusername/excalidraw-clone",
    emoji: "🎨",
  },
  {
    name: "DragTrack",
    description: "It's a simple Kanban board that allows you to drag and drop tasks between columns.",
    technologies: ["React", "TypeScript", "Framer-Motion", "Tailwind CSS"],
    url: "https://github.com/yourusername/dragtrack",
    emoji: "📋",
  },
];

export default function Projects() {
  return (
    <div className="mt-14 animate-fade-up-3">
      {/* section divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="section-line flex-1" />
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted whitespace-nowrap
                       px-3 py-1 rounded-full border border-border bg-surface2/50">
          Side Projects
        </span>
        <div className="section-line flex-1" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className="glass-card overflow-hidden group relative"
          >
            {/* subtle gradient highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent2/5 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative">
              {/* card header */}
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{project.emoji}</span>
                  <span className="font-syne text-sm font-bold text-text">
                    {project.name}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface2/80 border border-border
                           text-muted hover:text-accent hover:border-accent/30
                           hover:bg-accent/5 hover:shadow-sm hover:shadow-accent/10
                           transition-all duration-300 hover:scale-110"
                >
                  <MdArrowOutward size={14} className="transform group-hover:rotate-45 transition-transform duration-500" />
                </a>
              </div>

              {/* card body */}
              <div className="px-5 py-4">
                <p className="text-[12px] text-muted leading-[1.75] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-md font-mono
                               bg-surface2/80 text-muted border border-border
                               hover:text-accent hover:border-accent/20 hover:bg-accent/5
                               transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
