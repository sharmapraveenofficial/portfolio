import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import UserProfile from "./components/UserProfile";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg relative">
      <div className="ambient-gradient" />
      <div className="grid-bg" />
      <div className="max-w-[880px] mx-auto px-5 sm:px-10 pb-24 relative">
        <ThemeToggle />
        <UserProfile />
        <Skills />
        <Experience />
        <Projects />
        <SocialLinks />
      </div>
    </div>
  );
}
