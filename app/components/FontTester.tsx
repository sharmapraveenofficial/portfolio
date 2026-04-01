'use client';

import { 
  Space_Grotesk,
  Fira_Code,
  JetBrains_Mono,
  IBM_Plex_Sans,
  Source_Code_Pro,
  Roboto_Mono,
  Inter,
  Outfit,
  Manrope,
  Plus_Jakarta_Sans,
  Montserrat,
  DM_Sans,
  Quicksand,
  Work_Sans,
  Nunito
} from "next/font/google";

// Initialize fonts
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const firaCode = Fira_Code({ subsets: ['latin'] });
const jetBrains = JetBrains_Mono({ subsets: ['latin'] });
const ibmPlex = IBM_Plex_Sans({ weight: ['400', '500', '600'], subsets: ['latin'] });
const sourceCode = Source_Code_Pro({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });
const workSans = Work_Sans({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });

const fonts = [
  { name: 'Space Grotesk', font: spaceGrotesk, description: 'Modern, geometric, tech-forward' },
  { name: 'Fira Code', font: firaCode, description: 'Popular coding font with ligatures' },
  { name: 'JetBrains Mono', font: jetBrains, description: 'Clear, distinctive, IDE-inspired' },
  { name: 'IBM Plex Sans', font: ibmPlex, description: 'Corporate yet modern, highly readable' },
  { name: 'Source Code Pro', font: sourceCode, description: 'Clean, monospaced, versatile' },
  { name: 'Roboto Mono', font: robotoMono, description: 'Google\'s take on monospace' },
  { name: 'Inter', font: inter, description: 'Modern classic, screen-optimized' },
  { name: 'Outfit', font: outfit, description: 'Geometric, minimal, contemporary' },
  { name: 'Manrope', font: manrope, description: 'Modern geometric sans-serif' },
  { name: 'Plus Jakarta Sans', font: jakarta, description: 'Modern humanist sans-serif' },
  { name: 'Montserrat', font: montserrat, description: 'Classic, versatile, professional' },
  { name: 'DM Sans', font: dmSans, description: 'Clean, modern, tech-friendly' },
  { name: 'Quicksand', font: quicksand, description: 'Rounded, friendly, modern' },
  { name: 'Work Sans', font: workSans, description: 'Optimized for screens, highly legible' },
  { name: 'Nunito', font: nunito, description: 'Rounded, warm, approachable' }
];

export default function FontTester() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Font Tester</h2>
      <div className="space-y-8">
        {fonts.map(({ name, font, description }) => (
          <div 
            key={name}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
            </div>
            <div className={font.className}>
              <p className="text-2xl mb-3 text-gray-900 dark:text-white">
                Hello, I&apos;m a Full Stack Developer
              </p>
              <pre className="text-base text-gray-700 dark:text-gray-300">
                {`const greeting = () => {
  console.log("Building amazing things with code!");
};`}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 