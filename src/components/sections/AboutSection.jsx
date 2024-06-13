import SectionContainer from "../shared/SectionContainer";

function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionContainer>
        <div className="lg:grid lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-10">
          <img src="/assets/sillypic.jpg" alt="Patrick in a duck costume with hands on hips." className="mx-auto mb-10 rounded-3xl shadow-xl max-w-80 md:max-w-96 lg:mb-0 lg:max-w-none lg:w-full" />
          <div className="border border-secondary-light rounded-3xl px-4 py-8 text-center lg:text-left lg:h-full lg:flex lg:flex-col lg:justify-center lg:p-10">
            <h2 className="text-3xl mb-2 font-bold uppercase lg:text-center">About Me</h2>
            <p className="mb-6 lg:text-center lg:mb-10">A Little Bit About Myself</p>
            <div className="space-y-4">
              <p>Hi, I&apos;m Patrick. I began my web development journey in 2021, though my passion for technology started in childhood with my first video game. This early fascination led me to freelance in computer support and digital art, building and repairing systems, and creating assets for online creators and small businesses.</p>
              <p>Diving into web development, I discovered an endless enthusiasm for building useful and engaging websites. Currently, I teach full stack web development at Fidgetech, helping autistic adults develop their coding skills.</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default AboutSection;