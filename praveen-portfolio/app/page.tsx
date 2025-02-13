import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import UserProfile from "./components/UserProfile";
import ThemeToggle from "./components/ThemeToggle";
// import FontTester from "./components/FontTester";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[rgb(17,20,24)]">
      <div className="flex flex-col gap-10 mt-5">
        <ThemeToggle />
        <UserProfile />
        <Skills />
        <Experience />
        <Projects />
        <SocialLinks />
        {/* <FontTester /> */}
      </div>
    </div>
  );
}
