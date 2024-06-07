import Button from "../shared/Button";

function HeroSection() {
  return (
    <article className="flex items-center justify-center text-center">
      <div>
        {/* TODO replace placeholder image */}
        <img src="/assets/silly-face.jpg" alt="" className="mx-auto my-8 rounded-3xl max-w-80" />
        <div className="space-y-1">
          <p className="text-xl">Hello, my name is</p>
          <h1 className="text-4xl">Patrick Dolan</h1>
          <p className="text-xl">I&apos;m a Frontend Developer</p>
        </div>
        <p className="text-sm mt-4 mb-6">Building digital experiences with code and problem-solving. When I&apos;m not writing code, I&apos;m usually getting lost in a good book.</p>
        <div className="flex gap-2">
          <Button text="Contact Me" type="button" className="mx-auto"/>
          <Button text="Resume" type="button" className="mx-auto"/>
        </div>
      </div>
    </article>
  )
}

export default HeroSection;