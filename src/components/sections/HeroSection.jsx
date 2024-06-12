import Button from "../shared/Button";
import MailIcon from "../../assets/Icons/MailIcon";
import DescriptionIcon from "../../assets/Icons/DescriptionIcon";
import SectionContainer from "../shared/SectionContainer";

function HeroSection() {
  return (
    <section id="hero-section" className="bg-primary pt-12 pb-24">
      <SectionContainer>
        <div className="flex items-center justify-center text-center text-white">
          <div>
            {/* TODO replace placeholder image */}
            <img src="/assets/sillypic.jpg" alt="" className="mx-auto mb-6 rounded-3xl max-w-80 max-h-80 border-4 border-secondary" />
            <div className="space-y-1">
              <p className="text-xl">Hello, my name is</p>
              <h1 className="text-4xl">Patrick Dolan</h1>
              <p className="text-xl">I&apos;m a Frontend Developer</p>
            </div>
            <p className="text-sm mt-4 mb-6 max-w-screen-sm">I build digital experiences with the power of code and problem-solving. When I&apos;m not writing code, I&apos;m usually getting lost in a good book.</p>
            <div className="space-y-2">
              <Button text="Contact Me" type="button" className="mx-auto" icon={<MailIcon height="18px" width="18px" />}/>
              <Button text="Resume" type="button" className="mx-auto" icon={<DescriptionIcon height="18px" width="18px" />}/>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default HeroSection;