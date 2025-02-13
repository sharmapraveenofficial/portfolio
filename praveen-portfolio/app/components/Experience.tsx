import { CiCalendar } from "react-icons/ci";

const experiences = [
    {
        date: "Jan 2024 - Present",
        role: "Full Stack Engineer",
        company: "Betaque",
        location: "Indore, India",
        url: "https://betaque.com",
        description: (
            <div>
                <p>At Betaque, I spearheaded the development of innovative service projects for high-profile clients:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        <strong>{"<ConfidentialProject />"}</strong>
                        <span className="ml-1 text-xs bg-yellow-100/50 dark:bg-yellow-500/10 text-yellow-800 dark:text-yellow-500 px-1.5 py-0.5 rounded font-mono">
                          [REDACTED]
                        </span>
                        : Built with Angular, focusing on video collaboration and cross-device optimization.
                    </li>
                    <li>
                        <strong>{"<SecretProject hash={0x42} />"}</strong>
                        <span className="ml-1 text-xs bg-yellow-100/50 dark:bg-yellow-500/10 text-yellow-800 dark:text-yellow-500 px-1.5 py-0.5 rounded font-mono">
                          [CLASSIFIED]
                        </span>
                        : Architected backend services with Node.js, TypeScript, MongoDB, achieving 99.9% uptime using Redis.
                    </li>
                    <li>
                        <strong>{"<RestrictedProject scope='logistics' />"}</strong>
                        <span className="ml-1 text-xs bg-yellow-100/50 dark:bg-yellow-500/10 text-yellow-800 dark:text-yellow-500 px-1.5 py-0.5 rounded font-mono">
                          [PRIVATE]
                        </span>
                        : Engineered freight optimization solution, reducing processing time by 30%.
                    </li>
                    <li>
                        <strong>{"<ChatEngine version={2.0} />"}</strong>
                        <span className="ml-1 text-xs bg-green-100/50 dark:bg-green-500/10 text-green-800 dark:text-green-500 px-1.5 py-0.5 rounded font-mono">
                          [DEPLOYED]
                        </span>
                        : Crafted a seamless chat platform, boosting team communication efficiency.
                    </li>
                    <li>
                        <strong>{"<ContentForge status='stable' />"}</strong>
                        <span className="ml-1 text-xs bg-blue-100/50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-500 px-1.5 py-0.5 rounded font-mono">
                          [LIVE]
                        </span>
                        : Developed a versatile editor, elevating content creation productivity by 40%.
                    </li>
                    <li>
                        <strong>{"<ByteStream secure={true} />"}</strong>
                        <span className="ml-1 text-xs bg-purple-100/50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-500 px-1.5 py-0.5 rounded font-mono">
                          [ACTIVE]
                        </span>
                        : Delivered a secure file-sharing solution, accelerating data transfer speed by 20%.
                    </li>
                    <li>
                        <strong>{"<AuthGuardian provider='next-auth' />"}</strong>
                        <span className="ml-1 text-xs bg-indigo-100/50 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-500 px-1.5 py-0.5 rounded font-mono">
                          [SECURE]
                        </span>
                        : Integrated Next-Auth, enhancing security by 35%.
                    </li>
                </ul>
                <p className="mt-2">
                    Additionally, I designed and launched Betaque&rsquo;s official website using Next.js and Figma, amplifying our online presence.
                </p>
            </div>
        ),
        technologies: ["Angular", "Node.js", "TypeScript", "MongoDB", "Redis", "Next.js", "Figma"],
    },
    {
        date: "Jul 2021 - Dec 2023",
        role: "Full Stack Engineer",
        company: "Quantiphi",
        location: "Bengaluru, India",
        url: "https://quantiphi.com",
        description: (
            <div>
                <p>At Quantiphi, I spearheaded the development of transformative applications for industry leaders such as TIAA and Epson:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        <strong>{"<RegeneronPoC status='completed' />"}</strong>
                        <span className="ml-1 text-xs bg-emerald-100/50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-500 px-1.5 py-0.5 rounded font-mono">
                          [OPTIMIZED]
                        </span>
                        : Revamped the architecture with cutting-edge optimizations and best practices, elevating project success.
                    </li>
                    <li>
                        <strong>{"<GCPToolkit tools={['DocumentAI', 'GKE']} />"}</strong>
                        <span className="ml-1 text-xs bg-blue-100/50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-500 px-1.5 py-0.5 rounded font-mono">
                          [ENHANCED]
                        </span>
                        : Leveraged Document AI and GKE to enable real-time analytics and significant performance enhancements.
                    </li>
                    <li>
                        <strong>{"<CloudCertification provider='GCP' type='ACE' />"}</strong>
                        <span className="ml-1 text-xs bg-orange-100/50 dark:bg-orange-500/10 text-orange-800 dark:text-orange-500 px-1.5 py-0.5 rounded font-mono">
                          [CERTIFIED]
                        </span>
                        : Achieved this prestigious certification, highlighting my expertise in cloud architecture and operations.
                    </li>
                </ul>
            </div>
        ),
        technologies: ["React.js", "Node.js", "Next.js", "GCP", "Document AI", "GKE", "CloudSQL"],
    },
    {
        date: "Jun 2020 - May 2022",
        role: "Software Developer",
        company: "Walkover",
        location: "Indore, MP, India",
        url: "https://walkover.com",
        description: (
            <div className="text-center sm:text-left">
                <p>At Walkover, I orchestrated a seamless migration of the Viasocket app to Google Cloud Platform, ensuring a smooth transition:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        <strong>{"<APIOptimizer runtime='node.js' />"}</strong>
                        <span className="ml-1 text-xs bg-green-100/50 dark:bg-green-500/10 text-green-800 dark:text-green-500 px-1.5 py-0.5 rounded font-mono">
                          [OPTIMIZED]
                        </span>
                        : Enhanced performance and user satisfaction through significant API optimizations.
                    </li>
                    <li>
                        <strong>{"<KubernetesManager platform='GKE' mode='dynamic' />"}</strong>
                        <span className="ml-1 text-xs bg-blue-100/50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-500 px-1.5 py-0.5 rounded font-mono">
                          [AUTOMATED]
                        </span>
                        : Developed scripts to manage GKE nodes dynamically, boosting system stability and cost-efficiency.
                    </li>
                    <li>
                        <strong>{"<PipelineArchitect ci='CircleCI' />"}</strong>
                        <span className="ml-1 text-xs bg-purple-100/50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-500 px-1.5 py-0.5 rounded font-mono">
                          [DEPLOYED]
                        </span>
                        : Established efficient pipelines, streamlining project delivery and management.
                    </li>
                    <li>
                        <strong>{"<TeamCollaboration metric={'+20%'} />"}</strong>
                        <span className="ml-1 text-xs bg-indigo-100/50 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-500 px-1.5 py-0.5 rounded font-mono">
                          [ENHANCED]
                        </span>
                        : Worked with diverse teams to create a new web feature, driving a 20% increase in user engagement.
                    </li>
                </ul>
            </div>
        ),
        technologies: ["Node.js", "ReactJS", "JavaScript", "GCP", "MongoDB", "PostgreSQL", "CircleCI"],
    },
];

export default function Experience() {
    return (
        <div className="max-w-2xl mx-auto px-4">
            <hr className="border-gray-200 dark:border-gray-700 mb-8" />
            {experiences.map((exp, index) => (
                <div key={index} 
                     className="group relative flex flex-col sm:flex-row gap-3 sm:gap-8 mb-8 text-center sm:text-left
                              p-6 rounded-xl
                              bg-white/80 dark:bg-[#191e2c]/30
                              border border-gray-200/60 dark:border-[#2d3240]
                              hover:bg-blue-50/30 dark:hover:bg-[#191e2c]/50
                              shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_-3px_rgba(0,0,0,0.1)]
                              transition-all duration-300 ease-in-out
                              backdrop-blur-sm
                              overflow-hidden
                              after:absolute after:inset-0
                              after:rounded-xl
                              after:border after:border-transparent
                              after:bg-gradient-to-r 
                              after:from-blue-500/0 after:via-blue-500/30 dark:after:via-[#5c87f6]/50 after:to-blue-500/0
                              after:opacity-0 
                              after:bg-[length:200%_100%]
                              after:animate-shimmer
                              group-hover:after:opacity-100
                              after:transition-opacity after:duration-500
                              before:absolute before:inset-[1px]
                              before:rounded-xl
                              before:bg-white/90 dark:before:bg-[#191e2c]/30
                              before:z-10
                              [box-shadow:0_0_0_1px_rgba(0,0,0,0.03)]
                              hover:[box-shadow:0_0_0_1px_rgba(59,130,246,0.1)]">
                    <div className="relative z-20 flex-none sm:w-42">
                        <div className="inline-flex items-center justify-center sm:justify-start text-[11px] 
                          text-blue-600 dark:text-[#5c87f6] 
                          font-medium tracking-wide
                          bg-blue-50 dark:bg-[#1a1f2d] 
                          px-3 py-1.5 rounded-full
                          hover:scale-105 transition-transform duration-200
                          shadow-sm hover:shadow-md
                          whitespace-nowrap
                          overflow-hidden">
                            <span className="mr-2 animate-pulse shrink-0"><CiCalendar size={14} /></span>
                            <span className="truncate">{exp.date}</span>
                        </div>
                    </div>
                    <div className="relative z-20">
                        <h2 className="text-[15px] font-medium flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                            <span className="text-gray-800 dark:text-white 
                                         bg-blue-50/80 dark:bg-[#1a1f2d]
                                         px-3 py-1 rounded-full
                                         shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]
                                         hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)]
                                         border border-blue-100/50 dark:border-transparent
                                         transition-all duration-300">
                                {exp.role}
                            </span>
                            <span className="text-gray-400">·</span>
                            <a href={exp.url} 
                               className="text-gray-900 dark:text-[#5c87f6] 
                                        hover:text-blue-600 dark:hover:text-blue-400 
                                        transition-all duration-300
                                        relative group
                                        font-medium" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                {exp.company}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 
                                               bg-blue-600 dark:bg-blue-400 
                                               group-hover:w-full 
                                               transition-all duration-300"></span>
                            </a>
                        </h2>
                        <div className="text-gray-600 dark:text-gray-300 mt-4">
                            {exp.description}
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                            {exp.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="shadow-sm hover:shadow-md 
                                           bg-gray-100/80 dark:bg-[#191e2c] 
                                           text-gray-800 dark:text-[#5c87f6]
                                           py-1.5 px-3
                                           border border-gray-200/50 dark:border-[#2d3240] 
                                           text-xs font-medium
                                           rounded-full
                                           transition-all duration-300
                                           hover:scale-105
                                           hover:bg-blue-50 dark:hover:bg-[#1a1f2d]
                                           relative
                                           overflow-hidden
                                           before:absolute before:inset-0
                                           before:bg-gradient-to-r before:from-transparent
                                           before:via-white/10 before:to-transparent
                                           before:translate-x-[-200%]
                                           hover:before:translate-x-[200%]
                                           before:transition-transform before:duration-1000"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}