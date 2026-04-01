'use client';

const row1 = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "LangChain", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg", invert: true },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg", invert: true },
];

const row2 = [
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

function MarqueeTextRow({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10
                     bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10
                     bg-gradient-to-l from-bg to-transparent pointer-events-none" />
      <div className="overflow-x-auto scrollbar-hide">
        <div className="marquee-slow flex gap-3 sm:gap-4">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 text-[10px] px-3 py-1.5 rounded-lg font-mono
                       border border-border/50 bg-surface/20 text-muted/50 whitespace-nowrap
                       hover:text-accent hover:border-accent/20
                       transition-colors duration-300 cursor-grab active:cursor-grabbing"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container relative group/marquee">
      {/* gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10
                     bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10
                     bg-gradient-to-l from-bg to-transparent pointer-events-none" />
      <div className="overflow-x-auto scrollbar-hide">
        <div className={`flex gap-6 sm:gap-8 ${reverse ? 'marquee-reverse' : 'marquee'}`}>
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl
                       border border-border bg-surface/40 backdrop-blur-sm
                       flex-shrink-0 min-w-fit
                       hover:border-accent/20 hover:bg-surface/80
                       transition-all duration-300 cursor-grab active:cursor-grabbing"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.logo}
                alt={tech.name}
                className={`w-7 h-7 object-contain ${tech.invert ? 'dark:invert' : ''}`}
              />
              <span className="text-[12px] font-syne font-semibold text-text whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="mt-14 animate-fade-up-1">
      {/* section divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="section-line flex-1" />
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted whitespace-nowrap
                       px-3 py-1 rounded-full border border-border bg-surface2/50">
          Tech Arsenal
        </span>
        <div className="section-line flex-1" />
      </div>

      {/* marquee rows — all three together */}
      <div className="space-y-3 -mx-5 sm:-mx-10">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeTextRow
          items={[
            "JavaScript", "C++", "HTML", "CSS", "SASS", "YAML",
            "GraphQL", "REST API", "RAG", "Prompt Engineering",
            "Bootstrap", "Material UI", "SQLite", "Firestore", "RabbitMQ",
            "GKE", "CloudSQL", "S3", "Cloud Functions", "Pub-Sub",
            "CircleCI", "Postman", "JIRA", "DataDog", "Newrelic",
          ]}
        />
      </div>
    </div>
  );
}
