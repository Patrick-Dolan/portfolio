import Button from "../shared/Button";
import MailIcon from "../../assets/Icons/MailIcon";
import DescriptionIcon from "../../assets/Icons/DescriptionIcon";
import SectionContainer from "../shared/SectionContainer";

function HeroSection() {
  return (
    <article className="bg-primary pt-4 pb-10">
      <SectionContainer>
        <div className="flex items-center justify-center text-center text-white">
          <div>
            {/* TODO replace placeholder image */}
            <img src="/assets/sillypic.jpg" alt="" className="mx-auto mb-6 rounded-3xl max-w-80 max-h-80" />
            <div className="space-y-1">
              <p className="text-xl">Hello, my name is</p>
              <h1 className="text-4xl">Patrick Dolan</h1>
              <p className="text-xl">I&apos;m a Frontend Developer</p>
            </div>
            <p className="text-sm mt-4 mb-6 max-w-screen-sm">Building digital experiences with code and problem-solving. When I&apos;m not writing code, I&apos;m usually getting lost in a good book.</p>
            <div className="flex gap-2">
              <Button text="Contact Me" type="button" className="mx-auto" icon={<MailIcon height="18px" width="18px" />}/>
              <Button text="Resume" type="button" className="mx-auto" icon={<DescriptionIcon height="18px" width="18px" />}/>
            </div>
          </div>
        </div>
      </SectionContainer>
    </article>
  )
}

export default HeroSection;