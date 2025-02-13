import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function UserProfile() {
  return (
    // <div className={`text-gray-900 dark:text-white p-8 sm:p-10 rounded-xl max-w-2xl mx-auto mt-10 
    //                  bg-white/50 dark:bg-[#191e2c]/30 backdrop-blur-sm
    //                  border border-gray-200/60 dark:border-[#2d3240]
    //                  shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)]
    //                  ${spaceGrotesk.className}`}>
    <div className={`text-gray-900 dark:text-white p-6 sm:p-8 rounded-lg max-w-2xl mx-auto mt-10 ${spaceGrotesk.className}`}>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div className="relative group">
          <div className="w-24 h-24 sm:w-[88px] sm:h-[88px] rounded-full 
                         ring-2 ring-offset-2 ring-blue-100 dark:ring-[#5c87f6]/20
                         ring-offset-white dark:ring-offset-[#191e2c]
                         transform transition duration-300 group-hover:scale-105">
            <Image
              className="rounded-full object-cover w-full h-full"
              src="/images/profile.png"
              alt="User Profile"
              width={88}
              height={88}
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"/>
        </div>
        
        <div className="text-center sm:text-left">
          <h1 className="flex items-center justify-center sm:justify-start gap-1.5 
                         text-2xl font-bold text-gray-900 dark:text-white
                         font-space-grotesk tracking-tight">
            Praveen Sharma
            <span className="inline-flex items-center justify-center text-[#1d9bf0]">
              <MdVerified size={24} />
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2
                        font-poppins font-medium tracking-wide
                        flex items-center justify-center sm:justify-start gap-2">
            <span className="bg-blue-50/80 dark:bg-[#1a1f2d] px-3 py-1 rounded-full 
                           border border-blue-100/50 dark:border-transparent">
              {"<FullStackWizard />"}
            </span>
          </p>
        </div>
      </div>
      <p className="mt-8 text-gray-700 dark:text-gray-300 
                    text-base sm:text-lg leading-relaxed 
                    text-center sm:text-left font-inter
                    space-y-6">
        <span className="block">
          Hey there <span className="animate-wave inline-block">👋🏻</span> I&apos;m your friendly neighborhood code architect, turning 
          <span className="mx-1 px-2 py-0.5 rounded bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 
                         text-purple-700 dark:text-purple-400 font-medium">caffeine</span> into 
          <span className="mx-1 px-2 py-0.5 rounded bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20
                         text-blue-700 dark:text-blue-400 font-medium">code</span> for 
          <span className="font-semibold text-blue-600 dark:text-[#5c87f6]"> 3+ years</span>. 
        </span>

        <span className="block">
          When I&apos;m not crafting pixel-perfect UIs or building zombie-proof backends, you&apos;ll find me analyzing cricket 
          matches with the same precision I debug code 🏏 Check out my 
          <span className="inline-flex items-center mx-1.5 px-2 py-0.5 rounded
                         bg-blue-50/50 dark:bg-blue-500/10 
                         text-blue-800 dark:text-blue-400
                         border border-blue-100/50 dark:border-blue-500/20
                         group cursor-pointer
                         hover:scale-105 transition-all duration-200">
            <span className="mr-1">{"<Skills/>"}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">↓</span>
          </span>
          <span className="inline-flex items-center mx-1.5 px-2 py-0.5 rounded
                         bg-purple-50/50 dark:bg-purple-500/10 
                         text-purple-800 dark:text-purple-400
                         border border-purple-100/50 dark:border-purple-500/20
                         group cursor-pointer
                         hover:scale-105 transition-all duration-200">
            <span className="mr-1">{"<Experience/>"}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">↓</span>
          </span>
          and
          <span className="inline-flex items-center mx-1.5 px-2 py-0.5 rounded
                         bg-green-50/50 dark:bg-green-500/10 
                         text-green-800 dark:text-green-400
                         border border-green-100/50 dark:border-green-500/20
                         group cursor-pointer
                         hover:scale-105 transition-all duration-200">
            <span className="mr-1">{"<Projects/>"}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">↓</span>
          </span>
          below!
        </span>
      </p>
    </div>
  );
} 