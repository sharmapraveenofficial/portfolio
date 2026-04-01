import Image from "next/image";
import { MdVerified } from "react-icons/md";

export default function UserProfile() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 animate-fade-up text-center">

      {/* avatar with orbiting particles */}
      <div className="relative inline-block mb-10 group">
        {/* glow behind avatar */}
        <div className="absolute -inset-6 rounded-full blur-3xl
                       bg-gradient-to-br from-accent/20 via-accent2/10 to-accent3/15
                       opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

        {/* orbiting dots */}
        <div className="orbit-dot bg-accent shadow-[0_0_6px] shadow-accent/60" />
        <div className="orbit-dot-2 bg-accent2 shadow-[0_0_6px] shadow-accent2/60" />
        <div className="orbit-dot-3 bg-accent3 shadow-[0_0_4px] shadow-accent3/60" />

        {/* spinning gradient ring */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px]">
          <div className="absolute inset-0 rounded-full avatar-ring
                         bg-[conic-gradient(from_0deg,var(--accent),var(--accent2),var(--accent3),transparent,var(--accent))]" />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-bg ring-1 ring-border">
            <Image
              className="object-cover w-full h-full"
              src="/images/profile.png"
              alt="Praveen Sharma"
              width={144}
              height={144}
              priority
            />
          </div>
        </div>

        {/* available indicator */}
        <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-bg 
                       flex items-center justify-center ring-2 ring-bg z-10">
          <span className="w-3 h-3 rounded-full bg-emerald-400 
                         shadow-[0_0_8px_2px] shadow-emerald-400/40 animate-pulse" />
        </div>
      </div>

      {/* name with shimmer */}
      <h1 className="font-syne font-extrabold tracking-[-0.04em] leading-none mb-5">
        <span className="text-[clamp(52px,9vw,88px)] shimmer-text">
          Praveen
        </span>
        <br />
        <span className="text-[clamp(52px,9vw,88px)] font-serif italic font-normal text-accent">
          Sharma
        </span>
        <MdVerified className="inline-block ml-3 text-accent2 align-middle
          text-2xl sm:text-3xl -translate-y-2
          [filter:drop-shadow(0_0_8px_rgba(167,139,250,0.4))]" />
      </h1>

      {/* bio — punchy, specific, memorable */}
      <p className="text-[14px] sm:text-[15px] text-text leading-[2] max-w-lg mx-auto mb-4 px-2">
        I&apos;ve spent 5.5 years building systems that don&apos;t break at 3 AM.
      </p>
      <p className="text-[12px] sm:text-[13px] text-muted leading-[1.95] max-w-lg mx-auto mb-10 px-2">
        From architecting backends that hold
        <span className="text-accent font-medium"> 99.9% uptime</span>, to
        shipping AI-powered features, to cutting freight processing time
        by <span className="text-accent font-medium">30%</span> — I build
        full-stack apps for clients like
        <span className="text-text"> TIAA</span> and
        <span className="text-text"> Epson</span>.
        Google Cloud certified. Currently obsessing over LLMs
        and cricket analytics 🏏
      </p>

      {/* impact proof — what makes them stop scrolling */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">
        {[
          { num: "99.9%", label: "Uptime" },
          { num: "30%", label: "Faster" },
          { num: "40%", label: "More productive" },
          { num: "20%", label: "More engagement" },
        ].map((s) => (
          <div key={s.label} className="group text-center">
            <div className="font-syne text-lg sm:text-xl font-extrabold text-accent leading-none
                           group-hover:scale-110 transition-transform duration-300">
              {s.num}
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.15em] uppercase text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* tech pills */}
      <div className="flex flex-wrap justify-center gap-2 pill-stagger">
        {["Node.js", "React", "TypeScript", "Next.js", "AWS", "GCP", "Docker", "MongoDB", "AI / LLMs"].map((t) => (
          <span key={t} className="text-[10px] px-3 py-1.5 rounded-full font-mono
                                  border border-border bg-surface/60 text-muted backdrop-blur-sm
                                  hover:border-accent/30 hover:text-accent hover:bg-accent/5
                                  hover:shadow-sm hover:shadow-accent/10
                                  transition-all duration-300 cursor-default">
            {t}
          </span>
        ))}
      </div>

    </div>
  );
}
