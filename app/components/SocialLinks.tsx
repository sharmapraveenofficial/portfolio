interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://www.instagram.com/praveen_sharma_1208", icon: "📸" },
  { name: "Github", url: "https://github.com/sharmapraveenofficial", icon: "🔗" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/praveen-sharma-12653a193", icon: "💼" },
];

export default function SocialLinks() {
  return (
    <div className="mt-16 animate-fade-up-4">
      {/* footer */}
      <div className="border-t border-border pt-8 pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-muted/60 tracking-[0.15em] uppercase">
            Praveen Sharma · 2026
          </div>
          <div className="flex gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-2.5 px-4 py-2.5
                         text-[11px]
                         hover:border-accent/30 hover:shadow-md
                         hover:shadow-accent/5
                         group"
              >
                <span className="text-sm group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                <span className="font-syne font-semibold text-text text-[11px]
                               group-hover:text-accent transition-colors duration-300">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
