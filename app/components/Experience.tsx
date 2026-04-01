const experiences = [
  {
    period: "Aug 2025 — Present",
    role: "AI Full Stack Developer",
    company: "Helpshift",
    url: "https://helpshift.com",
    location: "Pune",
    accent: "accent",
    badge: "CURRENT",
    summary: "Building AI-powered customer support features including AI-Reply and AI Summary. Working across the full stack with Python, Clojure, and React while driving Kubernetes migration for scalable infrastructure.",
    achievements: ["AI-Reply feature", "AI Summary", "K8s migration", "Full-stack AI"],
    technologies: ["Python", "Clojure", "React.js", "Elasticsearch", "Kafka", "Kubernetes"],
  },
  {
    period: "2024 — 2025",
    role: "Full Stack Engineer",
    company: "Betaque",
    url: "https://betaque.com",
    location: "Indore",
    accent: "accent2",
    summary: "Led 6+ product builds for enterprise clients. Architected backend services hitting 99.9% uptime, cut freight processing by 30%, and boosted content productivity by 40%.",
    achievements: ["99.9% uptime", "30% faster", "+40% productivity", "6 products shipped"],
    technologies: ["Angular", "Node.js", "TypeScript", "MongoDB", "Redis", "Next.js"],
  },
  {
    period: "2021 — 2023",
    role: "Full Stack Engineer",
    company: "Quantiphi",
    url: "https://quantiphi.com",
    location: "Bengaluru",
    accent: "accent3",
    summary: "Built AI-powered apps for TIAA and Epson. Leveraged GCP Document AI and GKE for real-time analytics. Earned Google Cloud ACE certification.",
    achievements: ["TIAA & Epson clients", "GCP ACE certified", "Real-time analytics"],
    technologies: ["React.js", "Node.js", "Next.js", "GCP", "Document AI", "GKE"],
  },
  {
    period: "2020 — 2022",
    role: "Software Developer",
    company: "Walkover",
    url: "https://walkover.com",
    location: "Indore",
    accent: "accent",
    summary: "Migrated Viasocket to GCP, built dynamic K8s management scripts, and set up CI/CD pipelines. Drove 20% user engagement increase with a new web feature.",
    achievements: ["GCP migration", "+20% engagement", "K8s automation", "CI/CD pipelines"],
    technologies: ["Node.js", "React", "JavaScript", "GCP", "MongoDB", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <div className="mt-14 animate-fade-up-2">
      {/* section divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="section-line flex-1" />
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted whitespace-nowrap
                       px-3 py-1 rounded-full border border-border bg-surface2/50">
          Career Timeline
        </span>
        <div className="section-line flex-1" />
      </div>

      {/* timeline */}
      <div className="relative">
        {experiences.map((exp, index) => {
          const isFirst = index === 0;
          const isLast = index === experiences.length - 1;

          return (
            <div key={index} className="flex gap-5 sm:gap-7">
              {/* timeline gutter — dot + line */}
              <div className="flex flex-col items-center pt-1">
                {/* node */}
                <div className="relative flex-shrink-0">
                  {isFirst && (
                    <span className={`absolute -inset-1.5 rounded-full bg-${exp.accent}/20 animate-ping`} />
                  )}
                  <span className={`relative block w-3 h-3 rounded-full bg-${exp.accent}
                    ring-[3px] ring-bg shadow-[0_0_8px] shadow-${exp.accent}/30`} />
                </div>
                {/* connecting line */}
                {!isLast && (
                  <div className="w-px flex-1 bg-gradient-to-b from-border2 to-transparent min-h-[20px]" />
                )}
              </div>

              {/* content */}
              <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8 sm:pb-10'}`}>
                {/* period row */}
                <div className="flex items-center gap-3 mb-3 -mt-0.5">
                  <span className="text-[11px] font-mono text-muted tracking-wide">
                    {exp.period}
                  </span>
                  {exp.badge && (
                    <span className={`text-[8px] tracking-[0.15em] uppercase font-mono font-semibold
                      px-2 py-0.5 rounded-full border border-${exp.accent}/25 text-${exp.accent}
                      bg-${exp.accent}/5`}>
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* card */}
                <div className="glass-card overflow-hidden group">
                  <div className="p-5 sm:p-6">
                    {/* role + company */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-3">
                      <h2 className="font-syne text-[16px] sm:text-[17px] font-bold text-text">
                        {exp.role}
                      </h2>
                      <span className="text-muted/30 text-sm">at</span>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-syne text-[14px] sm:text-[15px] font-semibold text-${exp.accent}
                                 hover:underline decoration-${exp.accent}/30 underline-offset-4
                                 transition-all duration-200`}
                      >
                        {exp.company}
                      </a>
                      <span className="text-[10px] text-muted/40">{exp.location}</span>
                    </div>

                    {/* summary */}
                    <p className="text-[12px] text-muted leading-[1.8] mb-4">
                      {exp.summary}
                    </p>

                    {/* achievement chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.achievements.map((a) => (
                        <span
                          key={a}
                          className={`text-[10px] px-2.5 py-1 rounded-full font-mono
                                   bg-${exp.accent}/8 text-${exp.accent} border border-${exp.accent}/15`}
                        >
                          {a}
                        </span>
                      ))}
                    </div>

                    {/* tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded font-mono
                                   bg-surface2/60 text-muted/50 border border-border
                                   transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
