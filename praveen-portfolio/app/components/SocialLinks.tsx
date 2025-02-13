interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://www.instagram.com/praveen_sharma_1208" },
  { name: "Github", url: "https://github.com/sharmapraveenofficial" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/praveen-sharma-12653a193" },
];

export default function SocialLinks() {
  return (
    <div>
      <hr className="border-gray-200 dark:border-gray-700 mb-8" />
      <div className="flex justify-center gap-6 mb-10">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-4 py-2
                     text-gray-600 dark:text-gray-400 
                     hover:text-blue-600 dark:hover:text-[#5c87f6]
                     transition-all duration-300"
          >
            <span className="relative z-10 font-medium text-sm">
              {link.name === 'Github' && '{ '}
              {link.name === 'Linkedin' && '[ '}
              {link.name === 'Instagram' && '< '}
              {link.name}
              {link.name === 'Github' && ' }'}
              {link.name === 'Linkedin' && ' ]'}
              {link.name === 'Instagram' && ' />'}
            </span>
            <span className="absolute inset-0 rounded-full 
                           bg-blue-50 dark:bg-[#1a1f2d]
                           scale-0 group-hover:scale-100
                           transition-transform duration-300 ease-out"/>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2
                           w-0 h-0.5 bg-blue-600 dark:bg-[#5c87f6]
                           group-hover:w-full
                           transition-all duration-300"/>
          </a>
        ))}
      </div>
    </div>
  );
} 