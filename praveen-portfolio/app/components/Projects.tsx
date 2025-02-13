import { MdArrowOutward } from "react-icons/md";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    name: "Excalidraw Clone",
    description: "A simple clone of Excalidraw built with React and TypeScript. I made this side project for learning purposes. The app isn't responsive, but I prioritized functionalities over responsiveness.",
    technologies: ["React", "TypeScript", "CSS", "Cypress"],
    url: "https://github.com/yourusername/excalidraw-clone",
  },
  {
    name: "DragTrack",
    description: "It's a simple Kanban board that allows you to drag and drop tasks between columns.",
    technologies: ["React", "TypeScript", "Framer-Motion", "Tailwind CSS"],
    url: "https://github.com/yourusername/dragtrack",
  },
];

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <hr className="border-gray-200 dark:border-gray-700 mb-8" />
      {projects.map((project: Project, index: number) => (
        <div 
          key={index} 
          className="group relative p-6 rounded-xl mb-8
                     bg-white/50 dark:bg-[#191e2c]/30
                     border border-gray-200/60 dark:border-[#2d3240]
                     shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)]
                     hover:shadow-[0_8px_30px_-3px_rgba(0,0,0,0.1)]
                     transition-all duration-300 ease-in-out
                     backdrop-blur-sm
                     overflow-hidden
                     before:absolute before:inset-0
                     before:bg-gradient-to-r before:from-blue-500/0 
                     before:via-blue-500/5 dark:before:via-[#5c87f6]/5 
                     before:to-transparent
                     before:translate-x-[-200%]
                     group-hover:before:translate-x-[200%]
                     before:transition-transform before:duration-1000
                     hover:border-blue-100 dark:hover:border-[#5c87f6]/20"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white 
                          flex items-center gap-2">
              <span className="bg-blue-50/80 dark:bg-[#1a1f2d] 
                             px-3 py-1 rounded-full text-[15px]
                             border border-blue-100/50 dark:border-transparent
                             shadow-sm">
                {project.name}
              </span>
            </h3>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group/link
                       p-2 rounded-full
                       bg-blue-50/50 dark:bg-[#1a1f2d]
                       border border-blue-100/50 dark:border-[#2d3240]
                       text-blue-600 dark:text-[#5c87f6]
                       hover:scale-110 
                       transition-all duration-300
                       hover:shadow-md"
            >
              <MdArrowOutward className="transform group-hover/link:rotate-45 transition-transform duration-300" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech: string) => (
              <span 
                key={tech} 
                className="shadow-sm hover:shadow-md 
                         bg-gray-100/80 dark:bg-[#111419] 
                         text-gray-800 dark:text-[#5c87f6]
                         py-1.5 px-3
                         border border-gray-200/50 dark:border-[#2d3240] 
                         text-xs font-medium
                         rounded-full
                         transition-all duration-300
                         hover:scale-105
                         hover:bg-blue-50 dark:hover:bg-[#1a1f2d]
                         relative overflow-hidden"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 