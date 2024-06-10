import HTMLIcon from "../../assets/skills-icons/HTMLIcon";
import CSSIcon from "../../assets/skills-icons/CSSIcon";
import JavaScriptIcon from "../../assets/skills-icons/JavaScriptIcon";
import ReactIcon from "../../assets/skills-icons/ReactIcon";
import FirebaseIcon from "../../assets/skills-icons/FirebaseIcon";
import GitHubIcon from "../../assets/skills-icons/GitHubIcon";
import GitIcon from "../../assets/skills-icons/GitIcon";
import TailwindCSSIcon from "../../assets/skills-icons/TailwindCSSIcon";
import JestIcon from "../../assets/skills-icons/JestIcon";
import ViteIcon from "../../assets/skills-icons/ViteIcon";
import SectionContainer from "../shared/SectionContainer";
import SkillCard from "../skills/SkillCard";

function SkillsSection() {
  return (
    <section className="my-20">
      <SectionContainer>
        <h2 className="text-center text-3xl mb-2">Skills</h2>
        <p className="text-center text-sm mb-12">Proficient in HTML, CSS, JavaScript, React, and Beyond</p>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          <SkillCard iconComponent={<HTMLIcon />} title="HTML5" />
          <SkillCard iconComponent={<CSSIcon />} title="CSS3" />
          <SkillCard iconComponent={<JavaScriptIcon />} title="JavaScript" />
          <SkillCard iconComponent={<ReactIcon />} title="React" />
          <SkillCard iconComponent={<FirebaseIcon />} title="Firebase" />
          <SkillCard iconComponent={<GitIcon />} title="Git" />
          <SkillCard iconComponent={<GitHubIcon />} title="GitHub" />
          <SkillCard iconComponent={<TailwindCSSIcon />} title="Tailwind CSS" />
          <SkillCard iconComponent={<JestIcon />} title="Jest" />
          <SkillCard iconComponent={<ViteIcon />} title="Vite" />
        </div>
      </SectionContainer>
    </section>
  )
}

export default SkillsSection